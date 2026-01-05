"use client";
import Image from "next/image";
import Link from "next/link";
import {
  serviceHighlights,
  faqs,
  engagementModels,
  valuePromises,
} from "./content";
import FaqSection from "../components/faq/faq";
import CTASection from "../components/home/CTASection";
import "./servicesPage.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <main
      className="flex flex-col gap-24 px-0 lg:px-0 py-30 pb-24 bg-[#0a0a0d] text-[#f7f8ff]"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(105, 97, 255, 0.12), transparent 55%), #0a0a0d",
      }}
    >
      {/* <section className="flex flex-col sm:flex-row justify-between items-center gap-6 px-6 py-5 rounded-full text-[#e1e2ff] text-base sm:text-xl backdrop-blur-xl" style={{background: 'linear-gradient(90deg, rgba(105, 97, 255, 0.3), rgba(145, 93, 255, 0.12))'}}>
        <p>Have a cool project for us?</p>
        <Link href="/contact" className="px-7 py-3 rounded-full bg-[#695aff] text-white font-semibold uppercase tracking-wider">
          Let's Talk
        </Link>
      </section> */}

      <section className="grid gap-12 mx-6 lg:mx-18 grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <p className="font-semibold text-[#8e89ff] uppercase tracking-[0.14em]">
            Revolutionizing the Way You Think Digital
          </p>
          <h1 className="my-4 text-3xl lg:text-5xl font-bold leading-tight">
            Digital Solutions Engineered For Ambitious Brands
          </h1>
          <p className="text-lg sm:text-xl text-[#d7d8f8] max-w-[620px] text-justify">
            Enoves blends strategy, design, and emerging technology to build
            experiences that scale. From intelligent platforms and adaptive
            marketing to cloud-native delivery, we remove constraints so your
            teams can innovate faster.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[50px] font-semibold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 shadow-[0_12px_30px_rgba(102,92,255,0.35)] hover:shadow-[0_18px_42px_rgba(102,92,255,0.28)]"
              style={{ background: "linear-gradient(90deg, #6b5cff, #9260ff)" }}
            >
              Start your journey
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[50px] font-semibold tracking-wide text-[#d7d8f8] border border-[rgba(182,182,255,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgba(182,182,255,0.08)] hover:border-[rgba(182,182,255,0.6)] hover:shadow-[0_18px_42px_rgba(102,92,255,0.28)]"
            >
              Explore our work
            </Link>
          </div>
        </div>
        <div className="flex justify-start sm:justify-center">
          {/* OUTER WRAPPER = padding + alignment */}
          <div className="pl-0 lg:pl-4">
            {/* CARD */}
            <div
              className="w-60 sm:w-72 lg:w-80 aspect-square rounded-[36px] flex items-center justify-center shadow-[0_30px_60px_rgba(19,15,64,0.45)]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(105,97,255,0.08))",
              }}
            >
              {/* IMAGE WRAPPER (controls breathing room) */}
              <div className="w-full h-full p-6 sm:p-8 flex items-center justify-center">
                <Image
                  src="/Enoves.svg"
                  alt="Enoves"
                  width={280}
                  height={280}
                  priority
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 lg:px-20 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-full mx-auto">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-lg font-semibold text-violet-400 uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent leading-tight">
              Revolutionizing the Way You Think Digital
            </h2>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed">
              Discover a full-spectrum portfolio that connects strategy with
              execution. Every engagement blends measurable impact, modern
              tooling, and human-centred craft.
            </p>
          </motion.header>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500`}
                    />

                    {/* Card */}
                    <div className="relative h-full bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 transition-all duration-300 group-hover:border-transparent group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden cursor-pointer">
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />

                      {/* Icon */}
                      <motion.div
                        className="relative mb-6"
                        whileHover={{ scale: 1.1, rotate: 8 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <div
                          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-100 border border-white/10 group-hover:border-white/20 transition-all duration-300`}
                        >
                          <Icon
                            className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110"
                            strokeWidth={1.5}
                          />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <h3 className="relative text-2xl font-semibold mb-4 text-white transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="relative text-gray-400 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Link */}
                      <div className="relative flex items-center gap-2 text-violet-400 group-hover:text-violet-300 font-medium group-hover:gap-4 transition-all duration-300">
                        <span className="text-sm">Explore service</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-engagement mx-6 lg:mx-18">
        <header className="section-heading max-w-[770px] flex flex-col gap-4">
          <h2 className="text-2xl lg:text-4xl font-bold">
            4 Ways to Get Started with Us
          </h2>
          <p>
            Choose the engagement model that fits your momentum, budget, and
            long-term goals.
          </p>
        </header>
        <div className="engagement-grid">
          {engagementModels.map((model) => (
            <article key={model.title} className="engagement-card">
              <h3>{model.title}</h3>
              <ul>
                {model.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-6 lg:mx-18">
        <header className="max-w-[670px] flex flex-col gap-4">
          <h2 className="text-2xl font-bold lg:text-4xl m-0">Why Enoves</h2>
          <p className="text-[#c6c8f4] text-base sm:text-lg">
            We deliver high-impact outcomes anchored in transparency, velocity,
            and proven digital craftsmanship.
          </p>
        </header>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {valuePromises.map((promise) => (
            <article
              key={promise.title}
              className="relative bg-[rgba(15,15,24,0.9)] rounded-[20px] p-6 border border-[rgba(104,97,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(104,97,255,0.32)] hover:bg-[rgba(15,15,24,0.95)] overflow-hidden before:content-[''] before:absolute before:-top-1/2 before:-right-1/2 before:w-[200%] before:h-[200%] before:bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] before:pointer-events-none before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
            >
              <h3 className="mt-0 text-lg text-[#9a95ff]">{promise.title}</h3>
              <p className="text-[#c8c9f5] mb-0">{promise.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-0 lg:mx-2">
        <CTASection />
      </section>

      <FaqSection faqs={faqs} />
    </main>
  );
}
