"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Product Strategy",
    description: "North-star roadmaps, experiment loops, and GTM launch kits tailored to SaaS, eCom, and venture-funded teams.",
    icon: "🚀",
  },
  {
    title: "Brand & Experience",
    description: "Full-stack design systems, 3D storytelling, and CRO-ready experiences crafted for premium buyers.",
    icon: "✨",
  },
  {
    title: "Growth Engineering",
    description: "AI copilots, automation, and campaign ops that sync marketing, revenue, and customer success into one pipeline.",
    icon: "🧠",
  },
];

export default function ServicesSection() {
  return (
    <section
      data-home-section="services"
      className="relative isolate overflow-hidden bg-[#04060D] px-6 py-20 sm:px-10 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(76,29,149,.5), transparent 55%), radial-gradient(circle at 85% 10%, rgba(14,165,233,.35), transparent 45%)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="relative z-10 space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-200">
            Services
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Build once, scale everywhere.
          </h2>
          <p className="text-base text-slate-200/80">
            From brand systems to AI-native products, our team ships experiences that feel cinematic, engineered, and fast. Every engagement lands inside a modular growth stack that matches the visual language of Enoves.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#0ea5e9] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            View full services catalog →
          </Link>
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#0B1220]/80 p-6 shadow-2xl shadow-black/40 backdrop-blur"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.45)" }}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-[#7c3aed]/50 to-[#0ea5e9]/40 text-xl">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-200/80">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

