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
import './servicesPage.css'

export default function ServicesPage() {
  return (
    <main className="flex flex-col gap-24 px-6 lg:px-0 py-30 pb-24 bg-[#0a0a0d] text-[#f7f8ff]" style={{ background: 'radial-gradient(circle at top right, rgba(105, 97, 255, 0.12), transparent 55%), #0a0a0d' }}>
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
          <h1 className="my-4 text-3xl lg:text-5xl font-bold leading-tight">Digital Solutions Engineered For Ambitious Brands</h1>
          <p className="text-lg sm:text-xl text-[#d7d8f8] max-w-[620px] text-justify">
            Enoves blends strategy, design, and emerging technology to build
            experiences that scale. From intelligent platforms and adaptive
            marketing to cloud-native delivery, we remove constraints so your
            teams can innovate faster.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-[50px] font-semibold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 shadow-[0_12px_30px_rgba(102,92,255,0.35)] hover:shadow-[0_18px_42px_rgba(102,92,255,0.28)]" style={{ background: 'linear-gradient(90deg, #6b5cff, #9260ff)' }}>
              Start your journey
            </Link>
            <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 rounded-[50px] font-semibold tracking-wide text-[#d7d8f8] border border-[rgba(182,182,255,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgba(182,182,255,0.08)] hover:border-[rgba(182,182,255,0.6)] hover:shadow-[0_18px_42px_rgba(102,92,255,0.28)]">
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

      <section className="mx-6 lg:mx-18">
        <header className="max-w-[740px] flex flex-col gap-4">
          <h2 className="text-2xl lg:text-4xl font-bold">Revolutionizing the Way You Think Digital</h2>
          <p className="text-[#c6c8f4] text-base sm:text-lg">
            Discover a full-spectrum portfolio that connects strategy with
            execution. Every engagement blends measurable impact, modern
            tooling, and human-centred craft.
          </p>
        </header>
        <div className="mt-12 flex flex-wrap gap-6">
          {serviceHighlights.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex-1 min-w-[240px] basis-[calc(33.333%-1rem)] sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] p-7 rounded-3xl border border-[rgba(104,97,255,0.16)] flex flex-col gap-4 min-h-[230px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(104,97,255,0.32)] relative overflow-hidden before:content-[''] before:absolute before:-top-1/2 before:-right-1/2 before:w-[200%] before:h-[200%] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(89, 86, 233, 0.15) 0%, rgba(20, 20, 34, 0.78) 50%, rgba(105, 97, 255, 0.08) 100%), radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent 70%)',
              }}
            >
              {service.icon && (
                <i className={`${service.icon} text-4xl text-[#8b5cf6] mb-2`} />
              )}
              <h3 className="m-0 text-xl">{service.title}</h3>
              <p className="text-[#c6c8f4] flex-1">{service.description}</p>
              <span className="font-semibold text-[#9a95ff] after:content-['_→'] after:inline-block after:transition-transform after:duration-200 group-hover:after:translate-x-1">Read more</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="services-engagement mx-6 lg:mx-18">
        <header className="section-heading max-w-[770px] flex flex-col gap-4">
          <h2 className="text-2xl lg:text-4xl font-bold">4 Ways to Get Started with Us</h2>
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

      <section>
        <CTASection />
      </section>

      {/* <section className="px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 rounded-[32px] flex flex-col gap-6 items-start" style={{background: 'linear-gradient(120deg, rgba(105, 97, 255, 0.28), rgba(145, 93, 255, 0.15))'}}>
        <div>
          <h2 className="m-0 text-3xl sm:text-4xl lg:text-5xl">Transform your next initiative with Enoves</h2>
          <p className="m-0 text-[#d0d1fb]">
            Whether you need a dedicated product squad, expertise on demand, or
            guidance for your next big idea, we are ready to accelerate your
            journey.
          </p>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-[50px] font-semibold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 shadow-[0_12px_30px_rgba(102,92,255,0.35)] hover:shadow-[0_18px_42px_rgba(102,92,255,0.28)]" style={{background: 'linear-gradient(90deg, #6b5cff, #9260ff)'}}>
          Let&apos;s build together
        </Link>
      </section> */}

      <FaqSection faqs={faqs} />
    </main>
  );
}

