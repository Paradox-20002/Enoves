"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function NewsletterWidget() {
  const [ name, setName ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
  const [ message, setMessage ] = useState( "" );
  const [ submitted, setSubmitted ] = useState( false );
  const [ loading, setLoading ] = useState( false );
  const containerRef = useRef( null );

  const handleSubmit = async ( e ) => {
    e.preventDefault();
    if ( !name || !email || !message ) return;

    setLoading( true );

    const formData = new FormData();
    formData.append( "name", name );
    formData.append( "email", email );
    formData.append( "message", message );

    try {
      const response = await fetch( "https://getform.io/f/amdjppjb", {
        method: "POST",
        body: formData,
      } );

      if ( response.ok ) {
        setSubmitted( true );
        setName( "" );
        setEmail( "" );
        setMessage( "" );
        setTimeout( () => setSubmitted( false ), 3500 );
      } else {
        alert( "Something went wrong. Please try again!" );
      }
    } catch ( error ) {
      console.error( error );
      alert( "Submission failed. Please try again!" );
    } finally {
      setLoading( false );
    }
  };

  return (
    <motion.section
      ref={ containerRef }
      className="
        relative
        w-[250px] max-sm:mx-auto
        md:absolute md:-top-25 md:right-0
        pt-3 pb-6
        rounded-2xl
        overflow-hidden
        border border-white/10
        shadow-[0_0_40px_rgba(0,0,0,0.3)]
        z-20
      "
    >
      {/* Background Gradient */ }
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-800 to-sky-500" />

      {/* Glow Effects */ }
      <div className="absolute top-0 left-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Content */ }
      <div className="relative px-4 max-sm:p-6 text-white">
        <div className="text-center mb-4">
          <p className="text-xs uppercase tracking-[0.4em] text-indigo-300">
            Get in touch
          </p>
        </div>

        <form
          onSubmit={ handleSubmit }
          className="flex flex-col gap-3 max-w-xl mx-auto"
        >
          {/* NAME */ }
          <input
            name="name"
            type="text"
            required
            value={ name }
            onChange={ ( e ) => setName( e.target.value ) }
            placeholder="Your name"
            className="
              w-full rounded-2xl border border-white/20
              bg-[#05070E]/80 px-3 py-3 text-base text-white
              placeholder:text-white/50
              focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500/30
              transition-all
            "
          />

          {/* EMAIL */ }
          <input
            name="email"
            type="email"
            required
            value={ email }
            onChange={ ( e ) => setEmail( e.target.value ) }
            placeholder="you@company.com"
            className="
              w-full rounded-2xl border border-white/20
              bg-[#05070E]/80 px-3 py-3 text-base text-white
              placeholder:text-white/50
              focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500/30
              transition-all
            "
          />

          {/* MESSAGE */ }
          <textarea
            name="message"
            required
            value={ message }
            onChange={ ( e ) => setMessage( e.target.value ) }
            placeholder="Write your message…"
            rows={ 4 }
            className="
              w-full rounded-2xl border border-white/20
              bg-[#05070E]/80 px-3 pt-3 text-base text-white
              placeholder:text-white/50 resize-none
              focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500/30
              transition-all
            "
          />

          {/* SUBMIT BUTTON */ }
          <button
            type="submit"
            disabled={ loading }
            className="
              w-full rounded-2xl bg-gradient-to-b from-[#0b1220] to-[#0a0f1a]
              px-6 py-3 text-sm font-semibold text-white
              transition-all
              hover:scale-105 hover:shadow-lg hover:shadow-white
              active:translate-y-0
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            { loading ? "Sending..." : "Send us a message" }
          </button>

          {/* SUCCESS MESSAGE */ }
          { submitted && (
            <motion.p
              initial={ { opacity: 0, y: -10 } }
              animate={ { opacity: 1, y: 0 } }
              className="mt-4 text-center text-sm text-emerald-300 font-medium"
            >
              ✓ Thanks, your message has been received!
            </motion.p>
          ) }
        </form>
      </div>
    </motion.section>
  );
}
