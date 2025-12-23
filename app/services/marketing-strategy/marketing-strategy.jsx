"use client";
import Link from "next/link";
import { Mail, Search, Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { marketingStrategyFaqs } from "./marketing-strategy-content";
import FaqSection from "../../components/faq/faq";
import Image from "next/image";
import CTASection from "../../components/home/CTASection";

export default function MarketingStrategy() {
  const featureSections = [
    {
      title: "Go-To-Market Blueprints",
      description:
        "Translate business goals into integrated plays that align teams. We define positioning, messaging, and campaign architecture so every stakeholder knows the path to impact.",
      highlights: [
        { label: "Positioning Frameworks", color: "bg-emerald-400" },
        { label: "ICP Prioritisation", color: "bg-teal-400", delay: "0.3s" },
        { label: "Campaign Themes", color: "bg-green-400", delay: "0.6s" },
      ],
      image: {
        src: "/images/marketing-strategy_images/marketing1.jpg",
        alt: "Marketing strategy workshop",
      },
      articleClassName: "md:max-w-[48%] md:pr-10",
    },
    {
      title: "Revenue Alignment",
      description:
        "Hold marketing, sales, and success accountable to shared metrics. We facilitate rituals, reporting, and enablement that keep initiatives coordinated through each quarter.",
      highlights: [
        { label: "Pipeline Scorecards", color: "bg-purple-400" },
        { label: "Enablement Cadences", color: "bg-violet-400", delay: "0.3s" },
        { label: "Iteration Sprints", color: "bg-indigo-400", delay: "0.6s" },
      ],
      image: {
        src: "/images/marketing-strategy_images/marketing2.jpg",
        alt: "Revenue alignment session",
      },
      articleClassName: "md:ml-auto md:mt-auto md:max-w-[48%] md:pl-10",
    },
  ];

  const exploreServices = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Analytics Outreach",
      href: "/services/analytics-outreach",
      description:
        "Layer attribution and insight loops onto every campaign motion.",
      accent: "from-purple-400/60 via-fuchsia-500/30 to-transparent",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Marketing",
      href: "/services/email-marketing",
      description:
        "Operationalise strategy through lifecycle journeys that convert.",
      accent: "from-purple-400/60 via-fuchsia-500/30 to-transparent",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Paid Media",
      href: "/services/paid-media",
      description:
        "Amplify priority campaigns with performance-driven distribution.",
      accent: "from-purple-400/60 via-fuchsia-500/30 to-transparent",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Branding",
      href: "/services/branding",
      description:
        "Ensure every initiative expresses a cohesive, memorable narrative.",
      accent: "from-purple-400/60 via-fuchsia-500/30 to-transparent",
    },
  ];

  return (
    <main
      className="min-h-screen flex flex-col gap-16 pb-16 px-4 md:px-8"
      style={ {
        fontFamily: "Arial, Helvetica, sans-serif",
        background:
          "radial-gradient(circle at top right, rgba(126,108,255,0.18), transparent 60%), radial-gradient(circle at bottom left, rgba(51,183,255,0.12), transparent 55%), #0a0a0d",
      } }
    >
      <section
        className="relative 
              h-[45vh]               
              sm:h-[50vh]            
              md:h-[60vh]              
              lg:h-[70vh]
              -mx-4 md:-mx-8 
              px-4 md:px-8 
              text-white 
              overflow-hidden 
              flex flex-col 
              justify-center 
              gap-8 
              rounded-b-[48px] 
              md:rounded-b-[72px]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden rounded-b-[48px] md:rounded-b-[72px]">
          <Image
            src="/images/marketing-strategy_images/marketing3.jpeg"
            alt="Strategic planning board"
            fill
            priority
            className="object-cover"
            sizes="100vh"
          />
        </div>
        <div className="absolute inset-0 z-10 rounded-b-[48px] md:rounded-b-[72px] bg-gradient-to-br from-[#0a0a0d]/70 via-[#120d2b]/55 to-[#0a0a0d]/80" />
        <div
          className="absolute inset-0 z-20 rounded-b-[48px] md:rounded-b-[72px] blur-3xl opacity-30 pointer-events-none"
          style={ {
            background:
              "radial-gradient(600px 240px at 20% 10%, rgba(99,102,241,0.25), transparent 60%)",
          } }
        />
        <div className="relative z-30 max-w-4xl pb-16">
          <motion.h1
            className="text-4xl text-center lg:text-left lg:pl-32 mb-2 mt-12 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent digital-hero-title lg:mt-10 lg:pr-[300px]"
            initial={ { opacity: 0, y: 10 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.6 } }
          >
            Steer growth with strategies everyone can execute
          </motion.h1>

          <motion.p
            className="max-w-2xl lg:pl-32 text-gray-200 pr-0 text-center  lg:text-left lg:pr-20"
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 0.6, delay: 0.1 } }
          >
            Enoves embeds strategists who align leadership, revenue teams, and
            creators around roadmaps that drive pipeline, retention, and brand
            equity in tandem.
          </motion.p>
          <div className="flex flex-row items-center gap-4 mt-10 justify-center lg:justify-start lg:pl-32">
            <motion.div whileHover={ { scale: 1.04 } } whileTap={ { scale: 0.98 } }>
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

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative flex flex-col gap-12 md:h-[720px]">
          { featureSections.map( ( feature, index ) => (
            <article
              key={ feature.title }
              className={ `relative z-10 flex flex-col gap-5 text-white ${ feature.articleClassName }` }
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                { feature.title }
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                { feature.description }
              </p>
              { index === 0 && (
                <div className="mt-4 flex flex-col gap-4 text-sm text-gray-400">
                  { feature.highlights.map( ( { label, color, delay } ) => (
                    <motion.div
                      key={ label }
                      className="flex items-center gap-2"
                      initial={ { opacity: 0, y: 6 } }
                      whileInView={ { opacity: 1, y: 0 } }
                      viewport={ { once: true } }
                      transition={ { duration: 0.4 } }
                    >
                      <div
                        className={ `h-2 w-2 rounded-full ${ color } animate-ping` }
                        style={ delay ? { animationDelay: delay } : undefined }
                      ></div>
                      <span className="relative inline-flex items-center">
                        <span className="mr-2">{ label }</span>
                      </span>
                    </motion.div>
                  ) ) }
                </div>
              ) }
              { index === 1 && (
                <div className="mt-6 flex flex-row items-center gap-3 flex-nowrap">
                  <Link
                    href="/services/digital-marketing/learn-more"
                    className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-6 py-3 text-[9px] lg:text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/60"
                  >
                    Learn more
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-9 py-3 text-[9px] lg:text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-purple-400/60 hover:bg-white/10"
                  >
                    About us
                  </Link>
                </div>
              ) }
              <div className="overflow-hidden rounded-3xl shadow-2xl md:hidden h-40 w-full sm:h-48">
                <Image
                  className="h-full w-full object-cover"
                  src={ feature.image.src }
                  alt={ feature.image.alt }
                  width={ 700 }
                  height={ 460 }
                />
              </div>
            </article>
          ) ) }

          { featureSections.length >= 2 && (
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <div className="absolute top-0 right-0 h-[360px] rounded-2xl w-1/2 overflow-hidden shadow-2xl">
                <Image
                  className="h-full w-full object-cover"
                  src={ featureSections[ 0 ].image.src }
                  alt={ featureSections[ 0 ].image.alt }
                  width={ 400 }
                  height={ 760 }
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 h-[360px] rounded-2xl w-1/2 overflow-hidden shadow-2xl">
                <Image
                  className="h-full w-full object-cover"
                  src={ featureSections[ 1 ].image.src }
                  alt={ featureSections[ 1 ].image.alt }
                  width={ 400 }
                  height={ 760 }
                  priority
                />
              </div>
            </div>
          ) }
        </div>
      </div>
          <section>
                    <CTASection/>
                </section>
      {/* <section
        className="md:flex-row justify-between items-center gap-6 px-6 py-6 mx-auto max-w-6xl w-full transition-all duration-300 backdrop-blur-md shadow-lg rounded-[40px]"
        style={ { background: "linear-gradient(90deg, #6961ff4d, #915dff1f)" } }
      >
        <h1 className="text-2xl md:text-3xl text-white font-extrabold">
          Let's build momentum across every touchpoint
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-12 max-w-2xl mt-4">
          Book a working session with our senior strategists to uncover where
          the next breakthroughs sit within your funnel. We will bring the
          roadmap, frameworks, and playbooks.
        </p>
        <Link href="/contact">
          <motion.button
            className="px-8 py-5 text-[16px] text-white font-semibold rounded-full transition-all duration-300 uppercase tracking-wider hover:shadow-lg hover:shadow-purple-500/30 hover:bg-purple-500/10"
            style={ { background: "linear-gradient(90deg, #6b5cff, #9260ff)" } }
            whileHover={ { scale: 1.04 } }
            whileTap={ { scale: 0.98 } }
          >
            Book a strategy call
          </motion.button>
        </Link>
      </section> */}
      <section className="relative mx-auto max-w-6xl w/full px-6">
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/6 via-purple-500/5 to-transparent blur-3xl opacity-60" />
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-purple-200/80">
                Discover
              </span>
              <h2 className="mt-4 text-white text-2xl md:text-3xl font-bold">
                Explore more services
              </h2>
              <p className="mt-2 max-w-2xl text-sm md:text-base text-gray-300">
                Extend your growth engine with partner teams across strategy,
                creative, lifecycle, and brand.
              </p>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            { exploreServices.map(
              ( { icon, title, href, description, accent }, index ) => (
                <motion.div
                  key={ title }
                  initial={ { opacity: 0, y: 18 } }
                  whileInView={ { opacity: 1, y: 0 } }
                  viewport={ { once: true, amount: 0.4 } }
                  transition={ { duration: 0.4, delay: index * 0.08 } }
                  whileHover={ { y: -6 } }
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-[1px]"
                >
                  <div
                    className={ `absolute inset-0 scale-125 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${ accent }` }
                  />
                  <Link
                    href={ href }
                    className="relative flex h-full flex-col justify-between gap-6 rounded-[calc(1.5rem-2px)] bg-[#0f0f19]/90 px-6 py-7 transition-colors duration-300 group-hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium uppercase tracking-[0.22em] text-purple-200/70">
                        { icon }
                      </span>
                      <motion.span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        whileTap={ { scale: 0.94 } }
                      >
                        →
                      </motion.span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold text-white">
                        { title }
                      </h3>
                      <p className="text-sm text-gray-300/90">{ description }</p>
                    </div>
                  </Link>
                </motion.div>
              )
            ) }
          </div>
        </div>
      </section>
      <FaqSection faqs={ marketingStrategyFaqs } />
    </main>
  );
}
