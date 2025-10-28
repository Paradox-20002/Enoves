import Image from "next/image";
import Link from "next/link";
import "./servicesPage.css";

const serviceHighlights = [
  {
    title: "Web Development Services",
    description:
      "We engineer responsive, scalable, and performance-driven web experiences powered by automation, deep analytics, and seamless integrations.",
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development Services",
    description:
      "We craft intuitive, high-performing apps that combine human-centred design with robust engineering to thrive across every platform.",
    href: "/services/mobile-app-development",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "We unlock intelligent automation, predictive insights, and trusted AI strategies that improve decision-making while safeguarding your data.",
    href: "/services/artificial-intelligence-machine-learning",
  },
  {
    title: "Generative AI Solutions",
    description:
      "We deploy generative AI to automate workflows, enrich content, and deliver personalised customer interactions at scale.",
    href: "/services/generative-ai",
  },
  {
    title: "Custom Shopify Solutions",
    description:
      "We design commerce ecosystems that understand customer behaviour, optimise every interaction, and convert effortlessly.",
    href: "/services/custom-shopify",
  },
  {
    title: "Full-Cycle Digital Marketing",
    description:
      "We elevate your brand with full-funnel strategy across social, paid, SEO/SEM, email, and branding disciplines.",
    href: "/services/digital-marketing",
  },
  {
    title: "DevOps & Kubernetes",
    description:
      "We transform complex infrastructure into intelligent pipelines that accelerate releases and maximise reliability.",
    href: "/services/devops-kubernetes",
  },
  {
    title: "Cloud Solutions",
    description:
      "We architect scalable, secure cloud environments tailored to boost agility, performance, and time-to-market.",
    href: "/services/cloud-solutions",
  },
  {
    title: "UI/UX Design Services",
    description:
      "We merge strategy and creativity to craft user journeys that captivate audiences and drive measurable outcomes.",
    href: "/services/ui-ux-design",
  },
];

const journeySteps = [
  {
    title: "Discovery & Analysis",
    copy:
      "We align with your vision, define success metrics, and audit your current ecosystem to design the right roadmap.",
  },
  {
    title: "Design & Prototyping",
    copy:
      "We shape intuitive interfaces and interactive prototypes, iterating fast with stakeholder feedback to ensure clarity.",
  },
  {
    title: "Development & Testing",
    copy:
      "We build in agile loops, continually testing performance and quality so every release meets expectations.",
  },
  {
    title: "Launch & Ongoing Support",
    copy:
      "We orchestrate smooth launches, then stay engaged with optimisation, maintenance, and growth support.",
  },
];

const engagementModels = [
  {
    title: "Full-Cycle Development",
    bullets: [
      "Retain full control over your IP and roadmap",
      "Compress time-to-market with an end-to-end squad",
      "Eliminate vendor coordination with single-touch delivery",
    ],
  },
  {
    title: "Dedicated Team",
    bullets: [
      "Assemble specialists fast to maintain momentum",
      "Right-size the team for each delivery phase",
      "Receive transparent updates and ongoing collaboration",
    ],
  },
  {
    title: "Team Extension",
    bullets: [
      "Expand capacity with vetted talent on demand",
      "Retain ownership while we reinforce your squad",
      "Accelerate onboarding for seamless integration",
    ],
  },
  {
    title: "Consultation",
    bullets: [
      "Gain strategic insight into feasibility and ROI",
      "Optimise budgets with expert technical guidance",
      "Create a clear action plan for execution or enhancement",
    ],
  },
];

const valuePromises = [
  {
    title: "70% Cost Savings",
    copy: "Achieve enterprise-grade delivery while optimising cost structures and boosting ROI.",
  },
  {
    title: "80% Faster Delivery",
    copy: "Move from idea to impact faster with disciplined processes and automation-first execution.",
  },
  {
    title: "Unique & Tailored Solutions",
    copy: "Receive solutions custom-built for your business with complete ownership and transparency.",
  },
  {
    title: "No Hassles, Transparent Pricing",
    copy: "Stay focused on outcomes with streamlined communication and pricing that never surprises.",
  },
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-banner">
        <p>Have a cool project for us?</p>
        <Link href="/contact" className="services-banner__cta">
          Let&apos;s Talk
        </Link>
      </section>

      <section className="services-hero">
        <div className="services-hero__copy">
          <p className="services-hero__eyebrow">Revolutionizing the Way You Think Digital</p>
          <h1>Digital solutions engineered for ambitious brands</h1>
          <p className="services-hero__description">
            Enoves blends strategy, design, and emerging technology to build experiences that scale. From
            intelligent platforms and adaptive marketing to cloud-native delivery, we remove constraints so your
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
            <Image src="/Enoves.svg" alt="Enoves" width={280} height={280} priority />
          </div>
        </div>
      </section>

      <section className="services-grid">
        <header className="section-heading">
          <h2>Revolutionizing the Way You Think Digital</h2>
          <p>
            Discover a full-spectrum portfolio that connects strategy with execution. Every engagement blends
            measurable impact, modern tooling, and human-centred craft.
          </p>
        </header>
        <div className="services-grid__items">
          {serviceHighlights.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.href} className="service-card__link">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="services-journey">
        <header className="section-heading">
          <h2>4-Step Journey with Enoves</h2>
          <p>
            Structured yet flexible collaboration keeps teams aligned, mitigates risk, and sustains momentum from
            discovery through growth.
          </p>
        </header>
        <div className="journey-timeline">
          {journeySteps.map((step, index) => (
            <div key={step.title} className="journey-step">
              <span className="journey-step__index">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-engagement">
        <header className="section-heading">
          <h2>4 Ways to Get Started with Us</h2>
          <p>Choose the engagement model that fits your momentum, budget, and long-term goals.</p>
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
            We deliver high-impact outcomes anchored in transparency, velocity, and proven digital craftsmanship.
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
            Whether you need a dedicated product squad, expertise on demand, or guidance for your next big idea, we
            are ready to accelerate your journey.
          </p>
        </div>
        <Link href="/contact" className="btn btn--primary">
          Let&apos;s build together
        </Link>
      </section>
    </main>
  );
}
