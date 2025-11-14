"use client";
import Link from "next/link";
import { digitalContent } from "./digitalContent";
import FaqSection from "../../components/faq/faq";
import Image from "next/image";

export default function Digital() {
  const featureSections = [
    {
      title: "Creative Execution",
      description:
        "Transform strategy into stunning reality. Our creative team crafts compelling narratives and visually striking campaigns that resonate with your audience, drive engagement, and convert prospects into loyal customers across every touchpoint.",
      highlights: [
        { label: "Brand Storytelling", color: "bg-green-400" },
        { label: "Visual Design", color: "bg-teal-400", delay: "0.3s" },
        { label: "Content Creation", color: "bg-emerald-400", delay: "0.6s" },
      ],
      image: { src: "/images/digital6.webp", alt: "Creative Execution" },
      articleClassName: "md:max-w-[48%] md:pr-10",
    },
    {
      title: "Strategic Planning",
      description:
        "We begin with an in-depth analysis of your business ecosystem, competitive landscape, and target audience behavior. Our data-driven approach ensures every decision is backed by insights, positioning you not just to compete, but to dominate your market.",
      highlights: [
        { label: "Market Analysis", color: "bg-blue-400" },
        { label: "Competitive Intel", color: "bg-purple-400", delay: "0.3s" },
        { label: "Audience Insights", color: "bg-indigo-400", delay: "0.6s" },
      ],
      image: { src: "/images/digital5.png", alt: "Strategic Planning" },
      articleClassName: "md:ml-auto md:mt-auto md:max-w-[48%] md:pl-10",
    },
  ];

  return (
    <main
      className="min-h-screen flex flex-col gap-16 py-16 px-4 md:px-8"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        background:
          "radial-gradient(circle at top right, rgba(126,108,255,0.18), transparent 60%), radial-gradient(circle at bottom left, rgba(51,183,255,0.12), transparent 55%), #0a0a0d",
      }}
    >
      <section className="text-white mt-10 mx-6">
        <h3 className="text-2xl text-purple-500/50 my-2.5">
          Digital Marketing Services
        </h3>
        <h1 className="text-6xl mb-5 pr-120">
          Make every channel accountable to measurable growth
        </h1>
        <p className="max-w-2xl ">
          Enoves orchestrates full-funnel experiences that compound momentum.
          From strategic intelligence through lifecycle engineering, our
          integrated squads deploy, optimise, and scale campaigns that convert
          intent into predictable revenue.
        </p>
        <div className="flex flex-wrap items-center gap-4 my-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/60"
          >
            Partner with us
          </Link>
          {/* <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-purple-400/60 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-purple-200 transition-all duration-300 hover:border-purple-300 hover:bg-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
          >
            Explore all services
          </Link> */}
        </div>
      </section>

      <div className="relative mx-auto mt-16 max-w-6xl px-6">
        <div className="relative flex flex-col gap-12 md:h-[720px]">
          {featureSections.map((feature) => (
            <article
              key={feature.title}
              className={`relative z-10 flex flex-col gap-5 text-white ${feature.articleClassName}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {feature.title}
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 flex flex-col gap-4 text-sm text-gray-400">
                {feature.highlights.map(({ label, color, delay }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${color} animate-ping`}
                      style={delay ? { animationDelay: delay } : undefined}
                    ></div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-3xl shadow-2xl md:hidden">
                <Image
                  className="h-full w-full object-cover"
                  src={feature.image.src}
                  alt={feature.image.alt}
                  width={700}
                  height={460}
                />
              </div>
            </article>
          ))}

          {featureSections.length >= 2 && (
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <div className="absolute top-0 right-0 h-[360px] rounded-2xl w-1/2 overflow-hidden shadow-2xl">
                <Image
                  className="h-full w-full object-cover"
                  src={featureSections[0].image.src}
                  alt={featureSections[0].image.alt}
                  width={400}
                  height={760}
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 h-[360px] rounded-2xl w-1/2 overflow-hidden shadow-2xl">
                <Image
                  className="h-full w-full object-cover"
                  src={featureSections[1].image.src}
                  alt={featureSections[1].image.alt}
                  width={400}
                  height={760}
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <section
        className="md:flex-row justify-between items-center gap-6 px-6 py-6 mx-auto mt-20 max-w-6xl w-full transition-all duration-300 backdrop-blur-md shadow-lg rounded-[40px]"
        style={{ background: "linear-gradient(90deg, #6961ff4d, #915dff1f)" }}
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
          <button
            className="px-8 py-5 text-[16px] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 uppercase tracking-wider hover:shadow-lg hover:shadow-purple-500/30 hover:bg-purple-500/10"
            style={{ background: "linear-gradient(90deg, #6b5cff, #9260ff)" }}
          >
            Book a strategy call
          </button>
        </Link>
      </section>
      <FaqSection faqs={digitalContent} />
    </main>
  );
}
