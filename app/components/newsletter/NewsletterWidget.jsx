"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterWidget() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3500);
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full overflow-hidden py-20 px-4"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070E] via-[#0B0F1A] to-[#05070E]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#0B1220]/90 via-[#0B0F1A]/90 to-[#05070E]/90 p-12 text-white shadow-2xl shadow-purple-500/20 backdrop-blur-xl max-sm:p-8">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.4em] text-indigo-300 mb-4">
              Newsletter
            </p>
            <h2 className="text-4xl font-bold leading-tight bg-gradient-to-r from-white via-indigo-200 to-blue-200 bg-clip-text text-transparent max-sm:text-3xl">
              Stay in sync with launches, playbooks, and growth labs.
            </h2>
            <p className="mt-4 text-lg text-slate-300/90 max-w-2xl mx-auto">
              Two emails per month. Zero spam. Only the experiments that move the KPIs.
            </p>
          </div>
          
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto"
            aria-label="Subscribe to newsletter"
          >
            <label htmlFor="floating-email" className="sr-only">
              Email address
            </label>
            <div className="flex gap-3 max-sm:flex-col">
              <input
                id="floating-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 rounded-2xl border border-white/20 bg-[#05070E]/80 px-6 py-4 text-base text-white placeholder:text-white/50 focus:border-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all"
              />
              <button
                type="submit"
                className="rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#0ea5e9] px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/50 active:translate-y-0 max-sm:w-full"
              >
                Subscribe
              </button>
            </div>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-sm text-emerald-300 font-medium"
                role="status"
              >
                ✓ Thanks, you&apos;re on the list!
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
}
