import Link from "next/link";
import "./aboutPage.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-banner">
        <p>Learn about our story</p>
        <Link href="/contact" className="about-banner__cta">
          Get in Touch
        </Link>
      </section>

      <section className="about-hero">
        <div className="about-hero__copy">
          <p className="about-hero__eyebrow">Who We Are</p>
          <h1>Enoves: Engineering Digital Excellence</h1>
          <p className="about-hero__description">
            Enoves is a forward-thinking digital agency dedicated to transforming ambitious ideas into
            scalable, impactful solutions. We blend strategy, design, and cutting-edge technology to help
            businesses thrive in an ever-evolving digital landscape.
          </p>
          <div className="about-hero__actions">
            <Link href="/services" className="btn btn--primary">
              Explore Our Services
            </Link>
            <Link href="/portfolio" className="btn btn--ghost">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <header className="section-heading">
          <h2>Our Mission & Vision</h2>
          <p>
            We believe in the power of technology to solve real-world problems and create meaningful change.
          </p>
        </header>
        <div className="mission-grid">
          <article className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To empower businesses by delivering innovative digital solutions that drive growth, enhance
              customer experiences, and unlock new opportunities in the digital economy.
            </p>
          </article>
          <article className="mission-card">
            <h3>Our Vision</h3>
            <p>
              To be the trusted partner for organizations seeking to transform their digital presence and
              achieve sustainable competitive advantage through technology and human-centered design.
            </p>
          </article>
        </div>
      </section>

      <section className="about-values">
        <header className="section-heading">
          <h2>Our Core Values</h2>
          <p>
            These principles guide everything we do and how we work with our clients and team members.
          </p>
        </header>
        <div className="values-grid">
          <article className="value-item">
            <span className="value-icon">
              <i className="fa-solid fa-lightbulb" />
            </span>
            <h3>Innovation</h3>
            <p>We embrace emerging technologies and creative thinking to deliver cutting-edge solutions.</p>
          </article>
          <article className="value-item">
            <span className="value-icon">
              <i className="fa-solid fa-handshake" />
            </span>
            <h3>Partnership</h3>
            <p>We work closely with our clients as true partners, invested in their success and growth.</p>
          </article>
          <article className="value-item">
            <span className="value-icon">
              <i className="fa-solid fa-chart-line" />
            </span>
            <h3>Excellence</h3>
            <p>We maintain the highest standards in every project, delivering quality that exceeds expectations.</p>
          </article>
          <article className="value-item">
            <span className="value-icon">
              <i className="fa-solid fa-shield" />
            </span>
            <h3>Integrity</h3>
            <p>We operate with transparency, honesty, and accountability in all our interactions.</p>
          </article>
        </div>
      </section>

      <section className="about-team">
        <header className="section-heading">
          <h2>Why Choose Enoves</h2>
          <p>
            We combine technical expertise, creative excellence, and strategic thinking to deliver
            transformative results for our clients.
          </p>
        </header>
        <div className="reasons-grid">
          <article className="reason-card">
            <h3>Proven Expertise</h3>
            <p>
              With years of experience across diverse industries, we bring deep knowledge and best practices
              to every engagement.
            </p>
          </article>
          <article className="reason-card">
            <h3>Full-Spectrum Services</h3>
            <p>
              From strategy and design to development and deployment, we handle every aspect of your digital
              transformation.
            </p>
          </article>
          <article className="reason-card">
            <h3>Client-Centric Approach</h3>
            <p>
              Your success is our success. We prioritize understanding your unique challenges and goals to
              deliver tailored solutions.
            </p>
          </article>
          <article className="reason-card">
            <h3>Agile & Flexible</h3>
            <p>
              We adapt to your needs, working in sprints and maintaining transparency throughout the project
              lifecycle.
            </p>
          </article>
          <article className="reason-card">
            <h3>Continuous Innovation</h3>
            <p>
              We stay ahead of industry trends and invest in emerging technologies to keep your solutions
              future-proof.
            </p>
          </article>
          <article className="reason-card">
            <h3>Dedicated Support</h3>
            <p>
              Our partnership doesn't end at launch. We provide ongoing support, optimization, and growth
              initiatives.
            </p>
          </article>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__content">
          <h2>Ready to Transform Your Digital Future?</h2>
          <p>
            Let's collaborate to turn your vision into reality. Connect with our team to discuss your next
            project.
          </p>
          <Link href="/contact" className="btn btn--primary">
            Start Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
}
