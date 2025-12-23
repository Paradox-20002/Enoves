"use client";

import { useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaRobot } from "react-icons/fa";

export default function Search() {
  const [ isAssistantOpen, setIsAssistantOpen ] = useState( false );
  const [ prompt, setPrompt ] = useState( "" );
  const [ messages, setMessages ] = useState( [] );
  const [ isLoading, setIsLoading ] = useState( false ); // waiting on network
  const [ isStreaming, setIsStreaming ] = useState( false ); // typing animation active
  const [ isAtBottom, setIsAtBottom ] = useState( true ); // whether to auto-scroll

  const containerRef = useRef( null );
  const messagesRef = useRef( null ); // DOM ref for messages container
  const typingIntervalRef = useRef( null );
  const abortControllerRef = useRef( null );

  const API_URL = "http://127.0.0.1:5000/ask";

  const createId = () =>
    `${ Date.now() }-${ Math.random().toString( 36 ).slice( 2, 9 ) }`;

  const toggleAssistant = () => setIsAssistantOpen( ( v ) => !v );
  const handlePromptChange = ( e ) => setPrompt( e.target.value );

  // Helper: update the last assistant message
  const updateLastAssistantMessage = ( updater ) => {
    setMessages( ( prev ) => {
      const updated = [ ...prev ];
      for ( let i = updated.length - 1; i >= 0; i-- ) {
        if ( updated[ i ].role === "assistant" ) {
          const prevMsg = updated[ i ];
          updated[ i ] =
            typeof updater === "function"
              ? { ...prevMsg, ...updater( prevMsg ) }
              : { ...prevMsg, ...updater };
          break;
        }
      }
      return updated;
    } );
  };

  // Auto-scroll: scroll to bottom only if user is already near bottom.
  const scrollToBottomIfNeeded = () => {
    const el = messagesRef.current;
    if ( !el ) return;
    if ( isAtBottom ) {
      // smooth scroll to bottom
      el.scrollTo( { top: el.scrollHeight, behavior: "smooth" } );
    }
  };

  // Keep track if user scrolled up (don't auto-scroll while streaming if they scrolled up)
  const handleMessagesScroll = () => {
    const el = messagesRef.current;
    if ( !el ) return;
    const threshold = 60; // px from bottom to consider "at bottom"
    const distanceFromBottom =
      el.scrollHeight - ( el.scrollTop + el.clientHeight );
    setIsAtBottom( distanceFromBottom <= threshold );
  };

  // STOP streaming: abort network and typing interval
  const stopStreaming = () => {
    console.log( "⛔ stopStreaming called" );
    // abort pending fetch, if any
    if ( abortControllerRef.current ) {
      try {
        abortControllerRef.current.abort();
      } catch ( e ) {
        // ignore
      } finally {
        abortControllerRef.current = null;
      }
    }

    // stop typing animation
    if ( typingIntervalRef.current ) {
      clearInterval( typingIntervalRef.current );
      typingIntervalRef.current = null;
    }

    setIsStreaming( false );
    setIsLoading( false );

    // mark last assistant message as complete/stopped but keep whatever partial content exists
    updateLastAssistantMessage( ( prev ) => ( { ...prev, status: "complete" } ) );
  };

  // stream typing animation for the assistant answer
  const streamAssistantResponse = ( answer ) => {
    const trimmed =
      answer?.toString().trim() ?? "The assistant didn't return a response.";
    let idx = 0;

    // clear any previous intervals
    if ( typingIntervalRef.current ) {
      clearInterval( typingIntervalRef.current );
    }

    setIsStreaming( true );
    typingIntervalRef.current = window.setInterval( () => {
      idx += 1;
      updateLastAssistantMessage( () => ( {
        content: trimmed.slice( 0, idx ),
        status: idx >= trimmed.length ? "complete" : "typing",
      } ) );

      // auto-scroll while streaming only if user is at bottom
      scrollToBottomIfNeeded();

      if ( idx >= trimmed.length ) {
        if ( typingIntervalRef.current ) {
          clearInterval( typingIntervalRef.current );
          typingIntervalRef.current = null;
        }
        setIsStreaming( false );
      }
    }, 18 );
  };

  // SUBMIT handler: sends request, handles response, fallback for raw text
  const handleSubmit = async ( e ) => {
    e.preventDefault();
    const trimmedPrompt = prompt.trim();
    if ( !trimmedPrompt ) return;

    // Prevent double-sending while network is pending
    if ( isLoading ) {
      console.log( "Request already in progress" );
      return;
    }

    // Create messages (user + assistant placeholder)
    const userMessage = {
      id: createId(),
      role: "user",
      content: trimmedPrompt,
    };
    const assistantMessage = {
      id: createId(),
      role: "assistant",
      content: "",
      status: "typing", // show typing placeholder immediately
    };

    setMessages( ( prev ) => [ ...prev, userMessage, assistantMessage ] );
    setPrompt( "" );
    setIsLoading( true );

    // Prepare abort controller for the fetch
    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef;

    try {
      console.log( "✉️ Sending request to", API_URL, "payload:", {
        question: trimmedPrompt,
      } );

      const response = await fetch( API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( { question: trimmedPrompt } ),
        signal,
      } );

      const raw = await response.text();
      console.log( "🟠 raw response:", raw );

      if ( !response.ok ) {
        // try parse JSON error
        let errMsg = `HTTP ${ response.status }`;
        try {
          const parsed = JSON.parse( raw );
          errMsg = parsed.error || parsed.message || errMsg;
        } catch {
          if ( raw ) errMsg = raw;
        }
        throw new Error( errMsg );
      }

      // parse answer if possible
      let answer = "";
      try {
        const parsed = JSON.parse( raw );
        answer = parsed.answer ?? parsed.data ?? "";
        if ( typeof answer !== "string" ) answer = String( answer ?? "" );
      } catch {
        answer = raw || "";
      }

      // start typing animation with the final answer
      streamAssistantResponse( answer );
    } catch ( err ) {
      // possible abort
      const isAbort =
        err?.name === "AbortError" ||
        String( err ).toLowerCase().includes( "abort" );
      console.log(
        "🔴 handleSubmit error:",
        err?.message ?? err,
        "abort?",
        isAbort
      );

      // clear any typing interval (if running)
      if ( typingIntervalRef.current ) {
        clearInterval( typingIntervalRef.current );
        typingIntervalRef.current = null;
      }

      // reflect error in the assistant's last message
      updateLastAssistantMessage( {
        content: isAbort
          ? "Generation stopped by user."
          : err?.message || "Something went wrong.",
        status: "error",
      } );
    } finally {
      // clean up loading state and abort controller (typing may still be active)
      setIsLoading( false );
      abortControllerRef.current = null;
    }
  };

  // Scroll into view when new messages appended only if user is at bottom
  useEffect( () => {
    scrollToBottomIfNeeded();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ messages ] );

  // Clean up intervals and abort on unmount
  useEffect( () => {
    return () => {
      if ( typingIntervalRef.current ) {
        clearInterval( typingIntervalRef.current );
        typingIntervalRef.current = null;
      }
      if ( abortControllerRef.current ) {
        try {
          abortControllerRef.current.abort();
        } catch ( e ) { }
        abortControllerRef.current = null;
      }
    };
  }, [] );

  const isPromptReady = prompt.trim().length > 0;

  return (
    <div ref={ containerRef } className="relative">
      <button
        type="button"
        onClick={ toggleAssistant }
        aria-expanded={ isAssistantOpen }
        aria-haspopup="dialog"
        className="group relative flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-indigo-400 to-blue-400 opacity-0 blur transition-opacity duration-300 group-hover:opacity-70" />
        <FaRobot className="relative h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
      </button>

      { isAssistantOpen && (
        <div className="fixed inset-x-4 bottom-26 z-50 max-h-[80vh] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/95 text-slate-100 shadow-2xl backdrop-blur md:absolute md:inset-x-auto md:bottom-auto md:right-0 md:top-full md:mt-3 md:max-h-none md:w-96">
          <header className="flex items-center justify-between gap-4 border-b border-slate-800 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/30 via-indigo-500/30 to-blue-500/30 text-purple-300">
                <FaRobot className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Ask Enoves AI</p>
                <p className="text-xs text-slate-400">
                  Preview the upcoming assistant experience
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Prototype
            </span>
          </header>

          {/* messages container: fixed height, scroll only here */ }
          <div
            ref={ messagesRef }
            onScroll={ handleMessagesScroll }
            className="max-h-[50vh] overflow-y-auto space-y-3 px-5 py-4 text-sm text-slate-300 border-b border-slate-800 md:h-80"
          >
            { messages.length ? (
              <div className="flex flex-col gap-3">
                { messages.map( ( message ) => (
                  <div
                    key={ message.id }
                    className={ `rounded-2xl px-4 py-3 ${ message.role === "user"
                      ? "border border-slate-800/80 bg-slate-900/80 text-slate-200"
                      : "bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 text-slate-100"
                      }` }
                  >
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      { message.role === "user" ? "You" : "Enoves AI" }
                    </p>

                    { message.content ? (
                      <p className="mt-2 whitespace-pre-wrap leading-relaxed">
                        { message.content }
                      </p>
                    ) : null }

                    { message.role === "assistant" &&
                      message.status === "typing" && (
                        <div className="mt-2 flex items-center gap-2 text-xs text-slate-200/80">
                          <span className="h-4 w-4 animate-pulse rounded-full bg-slate-400/40" />
                          Typing...
                        </div>
                      ) }

                    { message.role === "assistant" &&
                      message.status === "error" && (
                        <p className="mt-2 text-xs font-medium text-rose-300/80">
                          Unable to complete the request.
                        </p>
                      ) }
                  </div>
                ) ) }
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-700 px-4 py-6 text-center">
                <p className="text-sm font-medium text-slate-200">
                  Start a conversation
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  Ask anything about our services. Responses will appear here as
                  soon as the AI assistant is live.
                </p>
              </div>
            ) }
          </div>

          {/* input area */ }
          <form
            onSubmit={ handleSubmit }
            className="flex items-end gap-3 border-t border-slate-800 bg-slate-900/80 px-5 py-4"
          >
            <label className="sr-only" htmlFor="ai-query">
              Ask Enoves AI
            </label>
            <input
              id="ai-query"
              type="text"
              value={ prompt }
              onChange={ handlePromptChange }
              placeholder="Describe what you're looking for..."
              autoFocus
              aria-busy={ isLoading || isStreaming }
              className="flex-1 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={ isLoading } // optional: disable typing while waiting for network; adjust if you want otherwise
            />

            {/* Send / Stop button */ }
            <button
              type={ isStreaming ? "button" : "submit" }
              onClick={ isStreaming ? stopStreaming : undefined }
              disabled={ !isPromptReady && !isStreaming }
              className={ `inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-white shadow-lg transition ${ isStreaming
                ? "bg-red-500 hover:bg-red-400"
                : "bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 hover:from-purple-400 hover:to-indigo-400"
                }` }
            >
              { isStreaming ? (
                "⛔ Stop"
              ) : (
                <>
                  <FaPaperPlane className="h-4 w-4" /> Send
                </>
              ) }
            </button>
          </form>
        </div>
      ) }
    </div>
  );
}
