"use client";
import Link from "next/link";

export default function AboutPage() {
  const coreValues = [
    {
      icon: "fa-solid fa-lightbulb",
      title: "Innovation",
      description:
        "We embrace innovation and creativity to deliver cutting-edge solutions that push boundaries and drive growth.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Partnership",
      description:
        "We believe in building long-term relationships with our clients and partners to deliver value and drive success.",
    },
    {
      icon: "fa-solid fa-star",
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, delivering high-quality results that exceed expectations.",
    },
    {
      icon: "fa-solid fa-shield",
      title: "Integrity",
      description:
        "We uphold integrity and ethical standards in all our interactions, ensuring transparency and trust.",
    },
  ];
  const mission_vision = [
    {
      title: "Our Mission",
      description:
        "To empower businesses by delivering innovative digital solutions that drive growth, enhance customer experiences, and unlock new opportunities in the digital economy",
    },
    {
      title: "Our Vision",
      description:
        "To be the trusted partner for organizations seeking to transform their digital presence and achieve sustainable competitive advantage through technology and human-centered design",
    },
  ];
  const choose_us = [
    {
      title: "Proven Expertise",
      description:
        "With years of experience across diverse industries, we bring deep knowledge and best practices to every engagement.",
    },
    {
      title: "Full-Spectrum Services",
      description:
        "From strategy and design to development and deployment, we handle every aspect of your digital transformation.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your success is our success. We prioritize understanding your unique challenges and goals to deliver tailored solutions.",
    },
    {
      title: "Agile & Flexible",
      description:
        "We adapt to your needs, working in sprints and maintaining transparency throughout the project lifecycle.",
    },
    {
      title: "Continuous Innovation",
      description:
        "We stay ahead of trends and emerging technologies, ensuring your solutions remain relevant and competitive.",
    },
    {
      title: "Dedicated Support",
      description:
        "We provide ongoing support, including maintenance, updates, and training to ensure your digital solutions continue to deliver value.",
    },
  ];
  return (
    <main
      className="min-h-screen flex flex-col gap-12 py-12 px-4 md:px-8"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(105, 97, 255, 0.12), transparent 55%), #0a0a0d",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Banner Section */}
      <section
        className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 py-6 mx-auto max-w-6xl w-full rounded-full hover:border-purple-500/60 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-purple-500/20"
        style={{ background: "linear-gradient(90deg, #6961ff4d, #915dff1f)" }}
      >
        <p className="text-white font-medium text-lg text-center md:text-left">
          Have a cool project for us?
        </p>
        <Link href="/contact">
          <button
            className="px-7 py-2 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase text-sm tracking-wider"
            style={{ background: "linear-gradient(90deg, #6b5cff, #9260ff)" }}
          >
            Lets Talk
          </button>
        </Link>
      </section>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto w-full">
        <h3
          className="font-extrabold text-sm md:text-base uppercase tracking-widest mb-4"
          style={{ color: "#695aff" }}
        >
          Who We Are
        </h3>
        <h1 className="text-3xl md:text-5xl text-white font-extrabold mb-6 leading-tight">
          Enoves: Engineering Digital Excellence
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
          Enoves is a leading digital agency that specializes in delivering
          innovative and scalable solutions for businesses of all sizes. Our
          team of experts combines technical expertise with creative thinking to
          deliver results that drive growth and success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="px-8 py-3 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase text-sm tracking-wider hover:shadow-purple-500/30 hover:border"
            style={{ background: "linear-gradient(90deg, #6b5cff, #9260ff)" }}
          >
            Explore Our Services
          </button>
          <button className="px-8 py-3 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 uppercase text-sm tracking-wider border border-purple-500/50 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 hover:bg-purple-500/10">
            View Our Work
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl text-white font-extrabold mt-16 mb-12">
          Our Mission & Vision
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-12 max-w-2xl">
          We believe in the power of technology to solve real-world problems and
          create meaningful change.
        </p>
        <div className="flex flex-col md:flex-row gap-4 ">
          {mission_vision.map((value, index) => {
            return (
              <div
                key={index}
                className="border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/30 hover:pointer-none hover:translate-y-3"
              >
                <h2
                  className="text-2xl font-semibold mb-2"
                  style={{ color: "#695aff" }}
                >
                  {value.title}
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-12 max-w-2xl">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl text-white font-extrabold mt-16 mb-12">
          Our Core Values
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-12 max-w-2xl">
          These principles guide everything we do and how we work with our
          clients and team members.
        </p>
        <div className="flex flex-wrap gap-6 text-center">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="flex-1 min-w-[250px] rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-purple-500/60 group  hover:shadow-purple-500/30 "
              style={{ background: "rgba(105, 90, 255, 0.15)" }}
            >
              <div className="mb-4 text-3xl" style={{ color: "#695aff" }}>
                <i className={value.icon}></i>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {value.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto w-full">
        <h1 className="text-3xl md:text-5xl text-white font-extrabold mt-16 mb-12">
          Why Choose Enoves
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-12 max-w-2xl">
          We combine technical expertise, creative excellence, and strategic
          thinking to deliver transformative results for our clients.
        </p>
        <div className="flex flex-wrap gap-8">
          {choose_us.map((value, index) => {
            return (
              <div
                key={index}
                className="flex-1 min-w-[calc(50%-1rem)] lg:min-w-[calc(25%-1.5rem)] hover:border-purple-500/60 transition-all duration-300 rounded-2xl p-6 hover:shadow-lg hover:shadow-purple-500/30 hover:pointer-none hover:scale-105"
                style={{ background: "rgba(105, 90, 255, 0.15)" }}
              >
                <h2
                  className="text-2xl font-semibold mb-2"
                  style={{ color: "#695aff" }}
                >
                  {value.title}
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-12 max-w-2xl">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section
        className="md:flex-row justify-between items-center gap-6 px-6 py-6 mx-auto mt-20 max-w-6xl w-full rounded-[40px] hover:border-purple-500/60 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-purple-500/20"
        style={{ background: "linear-gradient(90deg, #6961ff4d, #915dff1f)" }}
      >
        <h1 className="text-2xl md:text-3xl text-white font-extrabold">
          Ready To Transform Your Digital Future?
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-12 max-w-2xl mt-4">
          We combine technical expertise, creative excellence, and strategic
          thinking to deliver transformative results for our clients.
        </p>
        <button
          className="px-8 py-5 text-[16px] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 uppercase tracking-wider hover:shadow-lg hover:shadow-purple-500/30 hover:bg-purple-500/10"
          style={{ background: "linear-gradient(90deg, #6b5cff, #9260ff)" }}
        >
          Start Your Journey
        </button>
      </section>
    </main>
  );
}
