"use client";

import Image from "next/image";

import { leadershipTeam } from "./team";

export default function TeamPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0d] py-20 text-[#f5f5ff]">
      <section className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center">
        <span
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/25 blur-3xl"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-purple-400/15 blur-3xl"
          aria-hidden="true"
        />
        <p className="z-10 inline-flex rounded-full border border-purple-400/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-purple-200">
          The Enoves Crew
        </p>
        <h1 className="z-10 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          We build momentum with crafted teams
        </h1>
        <p className="z-10 max-w-3xl text-base text-gray-300 sm:text-lg">
          Strategists, makers, analysts and storytellers partnered around rapid
          experimentation and high-touch collaboration. Meet the people behind
          the growth stories.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="flex flex-wrap justify-between gap-6">
          {leadershipTeam.map((member, index) => (
            <div
              key={index}
              className="group relative h-[380px] w-[300px] overflow-hidden rounded-2xl bg-[#5f5f9d] shadow-lg transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] hover:-translate-y-2"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-75 -z-10" />

              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={380}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 translate-x-[-100%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[100%]" />
                </div>
              </div>

              <span className="pointer-events-none absolute right-45 top-20 -translate-y-1/2 -rotate-90 text-5xl font-extrabold uppercase tracking-[0.4em] text-white/20 transition-all duration-700 ease-out group-hover:left-6 group-hover:right-auto group-hover:top-6 group-hover:translate-y-0 group-hover:rotate-0 group-hover:text-2xl group-hover:text-white/90 drop-shadow-lg">
                {member.title}
              </span>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-[#181129] via-[#181129]/98 to-[#181129]/95 px-6 pb-6 pt-8 text-white translate-y-full opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 backdrop-blur-sm">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100" />

                <h3 className="text-lg font-semibold transform translate-y-2 transition-all duration-500 delay-100 group-hover:translate-y-0">
                  {member.name}
                </h3>

                <div className="flex items-center gap-3 opacity-0 transition-all duration-500 delay-200 group-hover:opacity-100">
                  {member.socials?.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${social.label}`}
                        className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/40 bg-purple-900/20 text-purple-200 transform translate-y-2 opacity-0 transition-all duration-500 hover:scale-110 hover:border-purple-300 hover:bg-purple-500/30 hover:text-purple-100 hover:shadow-lg hover:shadow-purple-500/50 group-hover:translate-y-0 group-hover:opacity-100"
                        style={{ transitionDelay: `${250 + idx * 75}ms` }}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="mx-auto mt-24 max-w-6xl px-4">
        <div className="flex flex-col gap-8 rounded-3xl border border-purple-500/25 bg-white/5 p-10 shadow-lg shadow-purple-500/10 md:flex-row md:items-start md:justify-between">
          <header className="md:w-1/3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              A culture designed for clarity and experimentation
            </h2>
          </header>
          <div className="grid flex-1 gap-6 sm:grid-cols-2">
            {cultureHighlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-2xl border border-purple-500/20 bg-[#11111d]/80 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm text-gray-300">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="mx-auto mt-20 max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-10 text-center shadow-lg shadow-purple-500/10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
            Join the team
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            We're assembling new pods for 2026 initiatives
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
            We're always looking for curious builders. Share your reel,
            portfolio, or growth wins and tell us how you unlock momentum.
          </p>

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-purple-500/20 bg-[#11111d]/80 p-5 text-sm text-gray-200"
              >
                <p className="text-white">{role.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-purple-200">
                  {role.location}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-purple-400/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200 transition hover:border-purple-300 hover:text-purple-100"
          >
            Submit your profile
          </button>
        </div>
      </section> */}
    </main>
  );
}
