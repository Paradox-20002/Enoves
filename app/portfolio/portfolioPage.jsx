"use client";

import { useEffect, useState } from "react";
import { projects } from "./portfolio_card";
import Link from "next/link";

const highlightStats = [
  {
    value: "48%",
    label: "Avg. conversion lift",
    sublabel: "After our 90-day growth sprints",
  },
  {
    value: "24",
    label: "Markets launched",
    sublabel: "Across SaaS, fintech & retail",
  },
  {
    value: "12x",
    label: "Return on spend",
    sublabel: "Highest performing paid media play",
  },
  {
    value: "2.4M",
    label: "Monthly impressions",
    sublabel: "Driven by our integrated campaigns",
  },
];

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0d] py-20 text-[#f5f5ff]">
      <section className="relative mx-auto mb-20 flex max-w-6xl flex-col items-center gap-5 px-4 text-center">
        <span
          className="pointer-events-none absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-24 right-10 h-48 w-48 rounded-full bg-purple-400/20 blur-3xl"
          aria-hidden="true"
        />
        <p className="z-10 inline-flex rounded-full border border-purple-400/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-purple-200">
          Case Studies
        </p>
        <h1 className="z-10 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Experiences Engineered for Momentum
        </h1>
        <p className="z-10 max-w-3xl text-base text-gray-300 sm:text-lg">
          Explore conversion-first websites, product launches and campaign
          ecosystems designed to attract, nurture and retain modern buyers in
          high-velocity markets.
        </p>
        <div className="z-10 mt-8 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.32em] text-purple-200/80">
          {[
            "SaaS Momentum",
            "Demand Generation",
            "Product Launches",
            "Brand Systems",
          ].map((tag) => (
            <span
              key={tag}
              className="inline-flex rounded-full border border-purple-400/40 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.32em] text-purple-200 transition hover:border-purple-300 hover:text-purple-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-16 max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {highlightStats.map((stat) => (
            <article
              key={stat.label}
              className="flex flex-col gap-3 rounded-2xl border border-purple-500/20 bg-white/5 p-6 shadow-lg shadow-purple-500/10 transition hover:border-purple-400/40 hover:shadow-purple-500/20"
            >
              <span className="text-3xl font-semibold text-white">
                {stat.value}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
                {stat.label}
              </p>
              <p className="text-sm text-gray-400">{stat.sublabel}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col gap-6 text-center md:text-left md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-3">
              Work Gallery
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured launches & experiences
            </h2>
          </div>
          <p className="text-gray-300 md:max-w-lg">
            Tap into a selection of product stories, campaign hubs and digital
            ecosystems that delivered measurable growth.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              role="button"
              tabIndex={0}
              onClick={() => setActiveProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveProject(project);
                }
              }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-purple-500/25 bg-white/5 shadow-lg shadow-purple-500/10 transition hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-purple-500/30"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-6 py-8">
                <h3 className="text-2xl font-semibold text-white transition group-hover:text-purple-200">
                  {project.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-300">
                  {project.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="flex w-fit items-center gap-2 rounded-full border border-purple-400/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200 transition hover:border-purple-300 hover:text-purple-100"
                >
                  View Website
                  <span className="translate-y-1px transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-purple-500/20 bg-white/5 p-10 text-center shadow-lg shadow-purple-500/10 md:flex-row md:text-left">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
              Let's Collaborate
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl text-white">
              Have a launch in mind? Let's explore it together.
            </h2>
            <p className="text-sm text-gray-300 md:max-w-xl">
              We partner with founders and marketing teams to plan, design, and
              ship the next wave of customer touchpoints.
            </p>
          </div>
          <Link href="/contact">
            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center rounded-full font-bold border hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 border-purple-400/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-purple-200 transition hover:border-purple-300 hover:text-purple-100"
              style={{
                background: "linear-gradient(90deg, #6b5cff, #9260ff)",
              }}
            >
              Contact us
            </button>
          </Link>
        </div>
      </section>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 px-4 py-20"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-purple-500/30 bg-[#0f0f13] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/40 bg-white text-black text-2xl hover:bg-black hover:text-white transition z-60"
              aria-label="Close project preview"
            >
              ×
            </button>

            <iframe
              src={activeProject.url}
              title={activeProject.title}
              className="h-full w-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}
