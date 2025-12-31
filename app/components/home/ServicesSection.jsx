"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Product Strategy",
    description:
      "North-star roadmaps, experiment loops, and GTM launch kits tailored to SaaS, eCom, and venture-funded teams.",
    icon: "🚀",
  },
  {
    title: "Brand & Experience",
    description:
      "Full-stack design systems, 3D storytelling, and CRO-ready experiences crafted for premium buyers.",
    icon: "✨",
  },
  {
    title: "Digital Marketing",
    description:
      "AI copilots, automation, and campaign ops that sync marketing, revenue, and customer success into one pipeline.",
    icon: "🧠",
  },
  {
    title: "Growth Engineering",
    description:
      "AI copilots, automation, and campaign ops that sync marketing, revenue, and customer success into one pipeline.",
    icon: "💻",
  },
];

const directions = ["left", "right", "up", "down"];

const getDirectionVariants = (direction) => {
  switch (direction) {
    case "left":
      return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
    case "up":
      return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
    case "down":
      return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
    default:
      return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  }
};

export default function ServicesSection() {
  return (
    <section
      data-home-section="services"
      className="relative overflow-hidden bg-transparent max-w-6xl xl:max-w-full px-6 py-15 lg:py-15 sm:px-10 lg:px-12"
    >
      <div className="mx-auto relative z-10 grid gap-14 lg:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] xl:max-w-full 2xl:max-w-[94%]">

        {/* Left Column */}
        <motion.div
          className="flex flex-col justify-between space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Top Section */}
          <motion.div variants={getDirectionVariants("left")} className="space-y-3">
            <p className="text-lg font-bold uppercase tracking-widest text-violet-400">Services</p>
            <h2 className="text-2xl lg:text-4xl font-bold leading-tight text-white md:text-4xl">
              Build Once, Scale Everywhere.
            </h2>
            <p className="text-base text-slate-200/80">
              From brand systems to AI-native products, our team ships experiences that feel cinematic, engineered, and fast. Every engagement lands inside a modular growth stack that matches the visual language of Enoves.
            </p>
          </motion.div>

          {/* Middle Section */}
          <motion.div
            variants={getDirectionVariants("up")}
            className="relative flex flex-col justify-center p-6 rounded-3xl bg-gradient-to-tr from-[#1f1f2b]/90 via-[#0b1220]/70 to-[#1f1f2b]/80 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden hover:scale-[1.02] transition-transform duration-500"
          >
            {/* Decorative Floating Shapes */}
            <span className="absolute top-[-25%] left-[-15%] w-40 h-40 rounded-full bg-purple-600/20 blur-3xl animate-[float_8s_ease-in-out_infinite]"></span>
            <span className="absolute bottom-[-20%] right-[-10%] w-52 h-52 rounded-full bg-cyan-400/20 blur-3xl animate-[float2_10s_ease-in-out_infinite]"></span>

            {/* Content */}
            <h3 className="text-xl font-bold text-white tracking-wide z-10">Why Enoves?</h3>
            <p className="mt-2 text-sm text-slate-200/80 leading-relaxed z-10">
              We combine modern design systems, AI-driven workflows, and growth-focused engineering to deliver scalable, high-performance solutions that match your business needs.
            </p>
            <ul className="mt-3 list-disc pl-5 text-slate-200/70 space-y-1 text-sm z-10">
              <li>Scalable architecture</li>
              <li>Cutting-edge tools</li>
              <li>Modular growth stack</li>
            </ul>
          </motion.div>

          {/* Button */}
          <motion.div variants={getDirectionVariants("down")}>
            <Link
              href="/services"
              className="group inline-flex items-center rounded-full bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#0ea5e9] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.6),0_0_35px_rgba(14,165,233,0.4)]"
            >
              View full services catalog <span className="ml-2 transition group-hover:translate-x-2">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column (Service Cards) */}
        <div className="flex flex-wrap gap-6 md:gap-6">
  {services.map((service, index) => {
    const direction = directions[index % directions.length];
    return (
      <motion.article
        key={service.title}
        className="flex flex-col rounded-3xl border border-white/10 bg-[#0B1220]/80 p-6 shadow-2xl shadow-black/40 backdrop-blur
                   flex-[1_1_100%] md:flex-[1_1_calc(50%-1.5rem)] hover:scale-[1.02] transition-transform duration-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={getDirectionVariants(direction)}
        transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.45)" }}
      >
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-[#7c3aed]/50 to-[#0ea5e9]/40 text-xl">
          {service.icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
        <p className="mt-2 text-sm text-slate-200/80">{service.description}</p>
      </motion.article>
    );
  })}
</div>

      </div>

      {/* Floating animation keyframes (Tailwind plugin or global CSS) */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(15px); }
        }
        .animate-[float_8s_ease-in-out_infinite] { animation: float 8s ease-in-out infinite; }
        .animate-[float2_10s_ease-in-out_infinite] { animation: float2 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
