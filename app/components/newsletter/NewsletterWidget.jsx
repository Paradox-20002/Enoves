"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterWidget() {
  const [ name, setName ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
  const [ submitted, setSubmitted ] = useState( false );

  function handleSubmit( e ) {
    e.preventDefault();
    if ( !email || !name ) return;
    setSubmitted( true );
    setEmail( "" );
    setName( "" );
    setTimeout( () => setSubmitted( false ), 3500 );
  }

  return (
    <motion.section
      className="
        absolute
        w-[30vw]
        max-lg:w-3/5
        max-md:w-full
        right-0
        ml-auto
        -mt-55
        max-md:mt-0
        z-20
        overflow-hidden
        rounded-3xl
      "
    >
      {/* Dark background gradient (restored) */ }
      <div className="absolute  inset-0 bg-gradient-to-b from-[#05070E] via-[#0B0F1A] to-[#05070E]" />

      {/* Decorative blurred circles */ }
      <div className="absolute top-0 left-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Foreground card */ }
      <div className="relative p-10 max-sm:p-7 text-white">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.4em] text-indigo-300 mb-4">
            Newsletter
          </p>
          <h2 className="text-3xl font-bold leading-tight bg-gradient-to-r from-white via-indigo-200 to-blue-200 bg-clip-text text-transparent max-sm:text-2xl">
            Stay in sync with launches and insights.
          </h2>
          <p className="mt-4 text-base text-slate-300/90 max-w-lg mx-auto">
            Two emails per month. Zero spam.
          </p>
        </div>

        <form
          onSubmit={ handleSubmit }
          className="max-w-xl mx-auto"
        >
          {/* NAME FIELD */ }
          <input
            type="text"
            required
            value={ name }
            onChange={ ( e ) => setName( e.target.value ) }
            placeholder="Your name"
            className="mb-4 w-full rounded-2xl border border-white/20 bg-[#05070E]/80 px-6 py-4 text-base text-white placeholder:text-white/50 focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all"
          />

          {/* EMAIL FIELD */ }
          <input
            type="email"
            required
            value={ email }
            onChange={ ( e ) => setEmail( e.target.value ) }
            placeholder="you@company.com"
            className="mb-4 w-full rounded-2xl border border-white/20 bg-[#05070E]/80 px-6 py-4 text-base text-white placeholder:text-white/50 focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#0ea5e9] px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/50 active:translate-y-0"
          >
            Subscribe
          </button>

          { submitted && (
            <motion.p
              initial={ { opacity: 0, y: -10 } }
              animate={ { opacity: 1, y: 0 } }
              className="mt-4 text-center text-sm text-emerald-300 font-medium"
            >
              ✓ Thanks, you're on the list!
            </motion.p>
          ) }
        </form>
      </div>
    </motion.section>
  );
}
