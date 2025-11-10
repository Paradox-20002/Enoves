"use client";

import Image from "next/image";
import { leadershipTeam, DevTeam, MarketingTeam, SEOteam } from "./team";

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
        <div className="flex flex-wrap justify-center gap-6">
          {leadershipTeam.map((member, index) => (
            <div
              key={index}
              tabIndex={0} // Make div focusable for mobile tap
              className="group relative h-[380px] w-[300px] overflow-hidden rounded-2xl bg-[#5f5f9d] shadow-lg transition-all duration-500 ease-out
                   hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] hover:-translate-y-2
                   focus:shadow-2xl focus:shadow-purple-500/50 focus:scale-[1.02] focus:-translate-y-2
                   active:shadow-2xl active:shadow-purple-500/50 active:scale-[1.02] active:-translate-y-2"
            >
              {/* Glowing border effect */}
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 blur-lg transition-opacity duration-500
                     group-hover:opacity-75 group-focus:opacity-75 group-active:opacity-75 -z-10 justify-around"
              />

              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={380}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out
                       group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 transition-opacity duration-500
                       group-hover:opacity-90 group-focus:opacity-90 group-active:opacity-90"
                />

                {/* Shine effect */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-700
                          group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100"
                >
                  <div
                    className="absolute inset-0 translate-x-[-100%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out
                            group-hover:translate-x-[100%] group-focus:translate-x-[100%] group-active:translate-x-[100%]"
                  />
                </div>
              </div>

              <span
                className="pointer-events-none absolute right-45 top-20 -translate-y-1/2 -rotate-90 text-5xl font-extrabold uppercase tracking-[0.4em] text-white/20 transition-all duration-700 ease-out
                     group-hover:left-6 group-hover:right-auto group-hover:top-6 group-hover:translate-y-0 group-hover:rotate-0 group-hover:text-2xl group-hover:text-white/90
                     group-focus:left-6 group-focus:right-auto group-focus:top-6 group-focus:translate-y-0 group-focus:rotate-0 group-focus:text-2xl group-focus:text-white/90
                     group-active:left-6 group-active:right-auto group-active:top-6 group-active:translate-y-0 group-active:rotate-0 group-active:text-2xl group-active:text-white/90 drop-shadow-lg"
              >
                {member.title}
              </span>

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-[#181129] via-[#181129]/98 to-[#181129]/95 px-6 pb-6 pt-8 text-white translate-y-full opacity-0 transition-all duration-500 ease-out backdrop-blur-sm
                     group-hover:translate-y-0 group-hover:opacity-100
                     group-focus:translate-y-0 group-focus:opacity-100
                     group-active:translate-y-0 group-active:opacity-100"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100" />

                <h3 className="text-lg font-semibold transform translate-y-2 transition-all duration-500 delay-100 group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0">
                  {member.name}
                </h3>

                <div className="flex items-center gap-3 opacity-0 transition-all duration-500 delay-200 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100">
                  {member.socials?.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${social.label}`}
                        className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/40 bg-purple-900/20 text-purple-200 transform translate-y-2 opacity-0 transition-all duration-500 hover:scale-110 hover:border-purple-300 hover:bg-purple-500/30 hover:text-purple-100 hover:shadow-lg hover:shadow-purple-500/50
                             group-hover:translate-y-0 group-hover:opacity-100
                             group-focus:translate-y-0 group-focus:opacity-100
                             group-active:translate-y-0 group-active:opacity-100"
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
      {/* Development Team */}
      {/* Development Team */}
      <section className="mx-auto mt-32 max-w-6xl px-4">
        <div className="relative mb-16 text-center">
          <span
            className="pointer-events-none absolute -top-12 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-purple-500/15 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="relative z-10 text-4xl font-semibold text-white mb-3">
            Development Team
          </h2>
          <p className="relative z-10 text-base text-gray-400">
            Building the future, one line of code at a time
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-6">
          {DevTeam.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1a2e]/80 to-[#14141f]/80 backdrop-blur-sm border border-purple-500/10 transition-all duration-500 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={288}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 translate-x-[-100%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[100%]" />
                </div>
              </div>

              <div className="relative p-6 space-y-1.5 bg-gradient-to-b from-transparent to-[#0a0a0d]/40 text-center">
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-200">
                  {member.name}
                </h3>
                <p className="text-sm text-purple-300/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marketing Team */}
      <section className="mx-auto mt-32 max-w-6xl px-4">
        <div className="relative mb-16 text-center">
          <span
            className="pointer-events-none absolute -top-12 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-pink-500/15 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="relative z-10 text-4xl font-semibold text-white mb-3">
            Marketing Team
          </h2>
          <p className="relative z-10 text-base text-gray-400">
            Telling stories that connect brands with people
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-6">
          {MarketingTeam.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1a2e]/80 to-[#14141f]/80 backdrop-blur-sm border border-blue-500/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={288}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 translate-x-[-100%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[100%]" />
                </div>
              </div>

              <div className="relative p-6 space-y-1.5 bg-gradient-to-b from-transparent to-[#0a0a0d]/40 text-center">
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-200">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-300/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Team */}
      <section className="mx-auto mt-32 max-w-6xl px-4 pb-32">
        <div className="relative mb-16 text-center">
          <span
            className="pointer-events-none absolute -top-12 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="relative z-10 text-4xl font-semibold text-white mb-3">
            SEO Team
          </h2>
          <p className="relative z-10 text-base text-gray-400">
            Optimizing visibility and driving organic growth
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-6">
          {SEOteam.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-[#1a1a2e]/80 to-[#14141f]/80 backdrop-blur-sm border border-blue-500/10 transition-all duration-500 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={288}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute inset-0 translate-x-[-100%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[100%]" />
                </div>
              </div>

              <div className="relative p-6 space-y-1.5 bg-gradient-to-b from-transparent to-[#0a0a0d]/40 text-center">
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-200">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-300/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
