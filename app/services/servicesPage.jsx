"use client";
import Image from "next/image";
import Link from "next/link";
import "./servicesPage.css";
import {
  serviceHighlights,
  faqs,
  engagementModels,
  valuePromises,
} from "./content";
import FaqSection from "../components/faq/faq";
export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-banner">
        <p>Have a cool project for us?</p>
        <Link href="/contact" className="services-banner__cta">
          Let's Talk
        </Link>
      </section>

      <section className="services-hero">
        <div className="services-hero__copy">
          <p className="services-hero__eyebrow">
            Revolutionizing the Way You Think Digital
          </p>
          <h1>Digital solutions engineered for ambitious brands</h1>
          <p className="services-hero__description">
            Enoves blends strategy, design, and emerging technology to build
            experiences that scale. From intelligent platforms and adaptive
            marketing to cloud-native delivery, we remove constraints so your
            teams can innovate faster.
          </p>
          <div className="services-hero__actions">
            <Link href="/contact" className="btn btn--primary">
              Start your journey
            </Link>
            <Link href="/portfolio" className="btn btn--ghost">
              Explore our work
            </Link>
          </div>
        </div>
        <div className="services-hero__visual">
          <div className="logo-card">
            <Image
              src="/Enoves.svg"
              alt="Enoves"
              width={280}
              height={280}
              priority
            />
          </div>
        </div>
      </section>

      <section className="services-grid">
        <header className="section-heading">
          <h2>Revolutionizing the Way You Think Digital</h2>
          <p>
            Discover a full-spectrum portfolio that connects strategy with
            execution. Every engagement blends measurable impact, modern
            tooling, and human-centred craft.
          </p>
        </header>
        <div className="services-grid__items">
          {serviceHighlights.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="service-card"
            >
              {service.icon && (
                <i className={`service-card__icon ${service.icon}`} />
              )}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-card__link">Read more</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="services-engagement">
        <header className="section-heading">
          <h2>4 Ways to Get Started with Us</h2>
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

      <section className="services-value">
        <header className="section-heading">
          <h2>Why Enoves</h2>
          <p>
            We deliver high-impact outcomes anchored in transparency, velocity,
            and proven digital craftsmanship.
          </p>
        </header>
        <div className="value-grid">
          {valuePromises.map((promise) => (
            <article key={promise.title} className="value-card">
              <h3>{promise.title}</h3>
              <p>{promise.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta__content">
          <h2>Transform your next initiative with Enoves</h2>
          <p>
            Whether you need a dedicated product squad, expertise on demand, or
            guidance for your next big idea, we are ready to accelerate your
            journey.
          </p>
        </div>
        <Link href="/contact" className="btn btn--primary">
          Let&apos;s build together
        </Link>
      </section>
      <FaqSection faqs={faqs} />
    </main>
  );
}
