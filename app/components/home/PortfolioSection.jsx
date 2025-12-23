"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../../portfolio/portfolio_card";

export default function PortfolioSection() {
  const featured = projects.slice( 0, 3 );

  return (
    <section
      data-home-section="portfolio"
      className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-12"
    >

      <div className="mx-auto relative z-10 max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-bold uppercase tracking-[0.4em] text-violet-400">Portfolio</p>
            <h2 className="text-4xl font-semibold text-violet-950 md:text-5xl">Case studies that convert.</h2>
            <p className="mt-4 max-w-2xl text-base text-violet-950">
              We launch brands and marketplaces that feel cinematic, measurable, and built-to-scale. Here are a few recent shipping logs.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center rounded-full bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:scale-105"
          >
            Browse full portfolio
            <span className="ml-2 transition group-hover:translate-x-2">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          { featured.map( ( project, index ) => (
            <motion.article
              key={ project.title }
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0B1220]/80 shadow-2xl shadow-black/50"
              initial={ { opacity: 0, y: 30 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true, amount: 0.25 } }
              transition={ { delay: index * 0.12, duration: 0.6 } }
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={ project.image }
                  alt={ project.title }
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 320px"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
              </div>
              <div className="space-y-3 p-6">
                <div className="text-xs uppercase tracking-[0.35em] text-indigo-300">Digital</div>
                <h3 className="text-xl font-semibold text-white">{ project.title }</h3>
                <p className="text-sm text-slate-200/80">{ project.description }</p>
                <Link
                  href={ project.url }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-indigo-200 transition hover:text-white"
                >
                  Visit project ↗
                </Link>
              </div>
            </motion.article>
          ) ) }
        </div>
      </div>
    </section>
  );
}
