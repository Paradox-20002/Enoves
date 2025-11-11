import Link from "next/link";
import "./digital.css";

const DIGITAL_SECTIONS = [
  {
    id: "strategy",
    tone: "purple",
    icon: "fa-compass-drafting",
    label: "Growth Intelligence & Strategy",
    summary:
      "We translate category signals, audience intent, and competitive shifts into an adaptive roadmap that keeps every channel accountable to revenue.",
    bullets: [
      "Audience, persona, and journey mapping tightened around growth targets",
      "Channel mix blueprints with agile experimentation cadences",
      "North-star KPIs, budget modelling, and measurement architecture",
    ],
  },
  {
    id: "activation",
    tone: "magenta",
    icon: "fa-bullhorn",
    label: "Performance Media Activation",
    summary:
      "Paid social, search, and programmatic squads collaborate daily to launch, learn, and scale creative that earns attention across the funnel.",
    bullets: [
      "Creative pods shipping thumb-stopping assets for every network",
      "Budget pacing, bid strategies, and feed optimisation in real time",
      "Incrementality testing and lift studies to prove contribution",
    ],
  },
  {
    id: "content",
    tone: "blue",
    icon: "fa-pen-nib",
    label: "SEO & Narrative Systems",
    summary:
      "We combine technical SEO, editorial operations, and brand storytelling to grow discoverability, authority, and on-page engagement.",
    bullets: [
      "Technical audits, schema, and core web vitals hardening",
      "Editorial calendars fuelled by search intent and topical authority",
      "On-page experimentation to elevate conversion velocity",
    ],
  },
  {
    id: "automation",
    tone: "teal",
    icon: "fa-envelope-open-text",
    label: "Lifecycle & Marketing Automation",
    summary:
      "Trigger-based nurturing, CRM hygiene, and revenue operations disciplines create cohesive journeys from first touch to advocacy.",
    bullets: [
      "Omnichannel journeys across email, SMS, and in-product surfaces",
      "Lifecycle dashboards, lead scoring, and attribution alignment",
      "CRM governance, data enrichment, and playbook automation",
    ],
  },
  {
    id: "analytics",
    tone: "amber",
    icon: "fa-chart-line",
    label: "Intelligence, CRO & Analytics",
    summary:
      "Granular analytics pipelines, experimentation, and CRO engineering unlock confident decisions and compounding performance gains.",
    bullets: [
      "Unified dashboards surfacing channel, cohort, and LTV insights",
      "A/B, multivariate, and journey experiments managed end-to-end",
      "Data governance, tagging, and privacy-safe tracking frameworks",
    ],
  },
];

export default function Digital() {
  return (
    <main className="digital-page">
      <header className="digital-header">
        <span className="digital-header__eyebrow">Digital Marketing Services</span>
        <h1>Make every channel accountable to measurable growth</h1>
        <p>
          Enoves orchestrates full-funnel experiences that compound momentum. From
          strategic intelligence through lifecycle engineering, our integrated
          squads deploy, optimise, and scale campaigns that convert intent into
          predictable revenue.
        </p>
        <div className="digital-header__cta">
          <Link href="/contact" className="digital-button digital-button--primary">
            Partner with us
          </Link>
          <Link href="/services" className="digital-button digital-button--ghost">
            Explore all services
          </Link>
        </div>
      </header>

      <div className="digital-sections">
        {DIGITAL_SECTIONS.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            data-tone={section.tone}
            className="digital-section"
          >
            <div className="digital-section__top">
              <span className="digital-section__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="digital-section__icon" aria-hidden="true">
                <i className={`fa-solid ${section.icon}`} />
              </span>
            </div>
            <h2 className="digital-section__title">{section.label}</h2>
            <p className="digital-section__summary">{section.summary}</p>
            <ul className="digital-section__list">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <footer className="digital-footer">
        <div className="digital-footer__copy">
          <h2>Let's build momentum across every touchpoint</h2>
          <p>
            Book a working session with our senior strategists to uncover where
            the next breakthroughs sit within your funnel. We will bring the
            roadmap, frameworks, and playbooks.
          </p>
        </div>
        <Link href="/contact" className="digital-button digital-button--primary">
          Book a strategy call
        </Link>
      </footer>
    </main>
  );
}
