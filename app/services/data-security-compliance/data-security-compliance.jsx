"use client";

import Link from "next/link";
import { Mail, Search, Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { dataSecurityFaqs } from "./data-security-content";
import FaqSection from "../../components/faq/faq";
import Image from "next/image";
import CTASection from "../../components/home/CTASection";

export default function DataSecurityCompliance() {
  const featureSections = [
    {
      title: "Security Architecture",
      description:
        "Strengthen your SaaS stack with layered safeguards. We map assets, assess risk, and design controls that protect data while supporting product velocity.",
      highlights: [
        { label: "Risk Assessments", color: "bg-red-400" },
        { label: "Access Governance", color: "bg-rose-400", delay: "0.3s" },
        { label: "Cloud Hardening", color: "bg-pink-400", delay: "0.6s" },
      ],
      image: {
        src: "/images/data-security_images/data-security1.webp",
        alt: "Security architecture planning",
      },
      articleClassName: "md:max-w-[48%] md:pr-10",
    },
    {
      title: "Compliance Readiness",
      description:
        "Accelerate audits and customer reviews with clear documentation. We align controls to SOC 2, ISO 27001, GDPR, and buyer questionnaires so trust is provable on demand.",
      highlights: [
        { label: "Control Catalogues", color: "bg-purple-400" },
        { label: "Evidence Workflows", color: "bg-violet-400", delay: "0.3s" },
        { label: "Audit Coaching", color: "bg-indigo-400", delay: "0.6s" },
      ],
      image: {
        src: "/images/data-security_images/data-security2.jpeg",
        alt: "Compliance documentation session",
      },
      articleClassName: "md:ml-auto md:mt-auto md:max-w-[48%] md:pl-10",
    },
  ];

  const exploreServices = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "SaaS Product Development",
      href: "/services/saas",
      description: "Blend secure architectures with shipping velocity from day one.",
      accent: "from-purple-400/60 via-fuchsia-500/30 to-transparent",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Pre & Post Support",
      href: "/services/pre-post-support",
      description: "Equip success teams to translate security into customer confidence.",
      accent: "from-purple-400/60 via-fuchsia-500/30 to-transparent",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Product Hunt Support",
      href: "/services/product-hunt-support",
      description: "Showcase compliance readiness during market-launch moments.",
      accent: "from-purple-400/60 via-fuchsia-500/30 to-transparent",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Marketing Strategy",
      href: "/services/marketing-strategy",
      description: "Align security messaging with demand generation narratives.",
      accent: "from-purple-400/60 via-fuchsia-500/30 to-transparent",
    },
  ];

  return (
    <main
      className="min-h-screen flex flex-col gap-16 pb-16 px-4 lg:px-2 md:px-8"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background:
          "radial-gradient(circle at top right, rgba(126,108,255,0.18), transparent 60%), radial-gradient(circle at bottom left, rgba(51,183,255,0.12), transparent 55%), #0a0a0d",
      }}
    >
      {/* HERO */}
      <section className="relative h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[90vh] text-white overflow-hidden flex flex-col justify-center gap-8 rounded-b-[48px] md:rounded-b-[72px]">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-b-[48px] md:rounded-b-[72px]">
          <Image
            src="/images/data-security_images/data-security3.jpg"
            alt="Security operations dashboard"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10 rounded-b-[48px] md:rounded-b-[72px] bg-gradient-to-br from-[#0a0a0d]/70 via-[#120d2b]/55 to-[#0a0a0d]/80" />
        <div
          className="absolute inset-0 z-20 rounded-b-[48px] md:rounded-b-[72px] blur-3xl opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px 240px at 20% 10%, rgba(99,102,241,0.25), transparent 60%)",
          }}
        />
        <div className="relative z-30 max-w-3xl">
          <motion.h1
            className="text-3xl md:text-[2.75rem] lg:text-5xl font-bold mb-2 text-center lg:text-left mt-12 lg:mt-10 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent digital-hero-title lg:pl-18"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Prove Your Security Posture And Keep Customer Data Protected
          </motion.h1>
          <motion.p
            className="max-w-xl md:max-w-lg lg:max-w-2xl px-5 lg:pl-18 text-sm md:text-[15px] lg:text-base text-gray-200 pr-0 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Enoves embeds security strategists and compliance specialists who
            harden your SaaS stack, streamline audits, and arm GTM teams with
            credibility.
          </motion.p>
          <div className="flex flex-row lg:pl-18 items-center gap-4 mt-10 justify-center lg:justify-start">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/60"
              >
                Contact us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <div className="relative mx-auto lg:mx-16 max-w-full px-2 lg:px-0">
        <div className="relative flex flex-col gap-12 md:h-[720px]">
          {featureSections.map((feature, index) => (
            <article
              key={feature.title}
              className={`relative z-10 flex flex-col gap-5 text-white ${feature.articleClassName}`}
            >
              <h2 className="text-3xl md:text-[2.5rem] lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {feature.title}
              </h2>
              <p className="text-gray-300 text-base md:text-[15px] lg:text-lg leading-relaxed">{feature.description}</p>

              {index === 0 && (
                <div className="mt-4 flex flex-col gap-4 text-sm text-gray-400">
                  {feature.highlights.map(({ label, color, delay }) => (
                    <motion.div key={label} className="flex items-center gap-2" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                      <div className={`h-2 w-2 rounded-full ${color} animate-ping`} style={delay ? { animationDelay: delay } : undefined}></div>
                      <span className="relative inline-flex items-center"><span className="mr-2">{label}</span></span>
                    </motion.div>
                  ))}
                </div>
              )}

              {index === 1 && (
                <div className="mt-6 flex flex-row items-center gap-3 flex-nowrap">
                  <Link href="/services/digital-marketing/learn-more" className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-6 py-3 text-[9px] lg:text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/60">
                    Learn more
                  </Link>
                  <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-white/20 px-9 py-3 text-[9px] lg:text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-purple-400/60 hover:bg-white/10">
                    About us
                  </Link>
                </div>
              )}

              <div className="overflow-hidden rounded-3xl shadow-2xl md:hidden h-40 w-full sm:h-48">
                <Image className="h-full w-full object-cover" src={feature.image.src} alt={feature.image.alt} width={700} height={460} />
              </div>
            </article>
          ))}

          {featureSections.length >= 2 && (
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <div className="absolute top-0 right-0 h-[360px] rounded-2xl w-1/2 overflow-hidden shadow-2xl">
                <Image className="h-full w-full object-cover" src={featureSections[0].image.src} alt={featureSections[0].image.alt} width={400} height={760} priority />
              </div>
              <div className="absolute bottom-0 left-0 h-[360px] rounded-2xl w-1/2 overflow-hidden shadow-2xl">
                <Image className="h-full w-full object-cover" src={featureSections[1].image.src} alt={featureSections[1].image.alt} width={400} height={760} priority />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <section><CTASection /></section>

      {/* EXPLORE SERVICES */}
      <section className="relative mx-auto max-w-full px-3 lg:px-0 lg:mx-16">
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/6 via-purple-500/5 to-transparent blur-3xl opacity-60" />
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-purple-200/80">
                Discover
              </span>
              <h2 className="mt-4 text-white text-2xl md:text-3xl font-bold">Explore more services</h2>
              <p className="mt-2 max-w-2xl text-sm md:text-base text-gray-300">
                Extend your growth engine with partner teams across strategy, creative, lifecycle, and brand.
              </p>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {exploreServices.map(({ icon, title, href, description, accent }, index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4, delay: index * 0.08 }} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-[1px]">
                <div className={`absolute inset-0 scale-125 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${accent}`} />
                <Link href={href} className="relative flex h-full flex-col justify-between gap-6 rounded-[calc(1.5rem-2px)] bg-[#0f0f19]/90 px-6 py-7 transition-colors duration-300 group-hover:bg-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium uppercase tracking-[0.22em] text-purple-200/70">{icon}</span>
                    <motion.span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" whileTap={{ scale: 0.94 }}>→</motion.span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="text-sm text-gray-300/90">{description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={dataSecurityFaqs} />
    </main>
  );
}
