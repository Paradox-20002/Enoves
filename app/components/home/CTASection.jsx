"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      data-home-section="cta"
      className="relative xl:max-w-full lg:max-w-7xl 2xl:max-w-full bg-transparent mx-6 lg:px-10 py-15"
    >

      <div className="mx-auto relative z-10 max-w-7xl 2xl:max-w-full overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#05070e] to-[#111826] p-6 lg:p-10 shadow-[0_40px_120px_rgba(5,7,14,0.85)]">
        <motion.div
          initial={ { opacity: 0, y: 30 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true, amount: 0.35 } }
          transition={ { duration: 0.7 } }
          className="space-y-6 text-center text-white"
        >
          <p className="text-lg uppercase tracking-widest text-violet-400 font-bold">
            Ready when you are
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold leading-tight md:text-3xl">
            Ship your next launch with Enoves.
          </h2>
          <p className="text-base text-white/80 md:text-lg">
            Scale product, marketing, and revenue with a single partner. We craft immersive journeys, AI-native platforms, and demand engines tailored to your category.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r
              from-[#7c3aed] via-[#9333ea] to-[#0ea5e9]
              px-6 py-3 text-sm font-semibold text-white
              transition hover:scale-110
              hover:shadow-[0_0_20px_rgba(124,58,237,0.6),0_0_35px_rgba(14,165,233,0.4)]
              "
            >
              Book a working session
            </Link>
            {/* <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              Download capabilities →
            </Link> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


