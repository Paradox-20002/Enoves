"use client";

import { useEffect, useState } from "react";
import { projects } from "./portfolio_card";

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <main
      className="min-h-screen w-full py-16 px-4 md:px-8"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(105, 90, 255, 0.15), transparent 55%), #0a0a0d",
        color: "#f5f5ff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <section className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-[0.4em] text-purple-400 mb-4">
          Case Studies
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          A Portfolio Crafted for Growth
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
          Explore our latest product experiences, marketing websites, and
          digital campaigns designed to accelerate acquisition, retention, and
          brand loyalty across industries.
        </p>
      </section>

      <section className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => setActiveProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveProject(project);
                }
              }}
              className="bg-white/5 border border-purple-500/20 rounded-3xl overflow-hidden shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="self-start px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase bg-linear-to-r from-[#6b5cff] to-[#8b5cf6] text-white shadow-md shadow-purple-500/40 hover:shadow-purple-500/60 transition-all"
                >
                  View Website
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 px-4 pt-24 pb-12 md:pt-20"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-[90vw] h-[80vh] max-w-6xl bg-[#0d0d12] border border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-500/40 overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveProject(null);
              }}
              className="absolute top-4 right-4 z-[60] inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/40 bg-white/10 text-white text-2xl hover:bg-white/20 hover:cursor-pointer transition-all"
              aria-label="Close project preview"
            >
              ×
            </button>

            {/* Light gradient overlay (non-interactive) */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-linear-gradient-to-b from-purple-500/10 to-transparent" />

            <header className="relative z-10 px-8 pt-8 pb-4">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-2">
                Live Preview
              </p>
              {/* <h2 className="text-3xl font-semibold text-white">
                {activeProject.title}
              </h2> */}
            </header>

            {/* Iframe */}
            <iframe
              src={activeProject.url}
              title={activeProject.title}
              className="relative z-[1] w-full h-full border-t border-purple-500/30"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}
