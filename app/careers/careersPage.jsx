"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Rocket,
  Heart,
  Calendar,
  Trophy,
  CheckCircle2,
  Upload,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({ ...formData, resume: e.dataTransfer.files[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", resume: null, message: "" });
    }, 3000);
  };

  const hiringSteps = [
    {
      title: "Initial Call",
      description:
        "A friendly conversation to understand your background, skills, and aspirations.",
      icon: Users,
      duration: "30 mins",
    },
    {
      title: "Technical Assessment",
      description:
        "Complete a real-world challenge that showcases your problem-solving abilities.",
      icon: Trophy,
      duration: "1-2 days",
    },
    {
      title: "Team Interview",
      description:
        "Meet your potential teammates and dive deeper into your expertise.",
      icon: Briefcase,
      duration: "1-2 hours",
    },
    {
      title: "Offer & Onboarding",
      description:
        "Welcome aboard! We'll help you hit the ground running from day one.",
      icon: Rocket,
      duration: "1 week",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Flexible Culture",
      description:
        "Work from anywhere with flexible hours that fit your lifestyle.",
    },
    {
      icon: Sparkles,
      title: "Growth & Learning",
      description:
        "Annual learning budget and access to courses, conferences, and workshops.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance and mental wellness support.",
    },
    {
      icon: Calendar,
      title: "Unlimited PTO",
      description:
        "Take the time you need to recharge and maintain work-life balance.",
    },
    {
      icon: Trophy,
      title: "Team Events",
      description:
        "Regular hackathons, offsites, and virtual social activities.",
    },
    {
      icon: Rocket,
      title: "Impact & Ownership",
      description:
        "Work on meaningful projects where your contributions truly matter.",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-black via-zinc-950 to-black text-white min-h-screen relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-violet-600/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-indigo-600/15 blur-[140px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-5 py-2 mb-8"
          >
            <Briefcase className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">
              We're Hiring
            </span>
          </motion.div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
              Build the Future
            </span>
            <br />
            <span className="text-gray-400 text-2xl md:text-3xl lg:text-4xl">
              with Enoves
            </span>
          </h1>

          <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Join a team of 20+ passionate innovators who blend strategy, design,
            and technology to craft world-class digital experiences. Grow,
            innovate, and make an impact that matters.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#apply"
              className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full font-semibold inline-flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#process"
              className="px-8 py-4 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-full font-semibold hover:border-violet-500/50 transition-all duration-300"
            >
              Learn About Our Process
            </a>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl py-1 font-bold mb-4 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
              Why Join Enoves?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We believe in creating an environment where talent thrives and
              innovation flourishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

                  <div className="relative h-full bg-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700/50 transition-all duration-300">
                    <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 mb-5">
                      <Icon
                        className="w-6 h-6 text-violet-400"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Hiring Process */}
      <section id="process" className="py-20 px-6 lg:px-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto relative"
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 py-1 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
              Our Hiring Journey
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A transparent, respectful process designed to help us get to know
              each other
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Connector line */}
                  {index < hiringSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-violet-600/50 to-transparent -z-10" />
                  )}

                  <div className="relative h-full bg-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-6 hover:border-violet-500/50 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600">
                        <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-xs font-semibold text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>

                    <div className="mb-3">
                      <span className="text-xs font-bold text-gray-500">
                        STEP {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-1">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />

            <div className="relative bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800/50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                  Ready to Join Us?
                </h2>
                <p className="text-gray-400 text-lg">
                  Take the first step towards an exciting career journey
                </p>
              </div>

              <form
                action="https://getform.io/f/amdjppjb" // replace with your Formspree endpoint
                method="POST"
                encType="multipart/form-data"
                className="space-y-6"
              >
                {/* Name */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl pl-4 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl pl-4 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Resume / CV *
                  </label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full text-gray-400 file:bg-violet-600 file:text-white file:rounded-full file:px-4 file:py-2 file:border-0 file:mr-4 file:cursor-pointer file:transition-all file:hover:scale-[1.05] file:hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about yourself
                  </label>
                  <textarea
                    name="message"
                    placeholder="What excites you about joining Enoves? What are you passionate about?"
                    rows={5}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl pl-4 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl px-6 py-4 font-semibold text-white hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting, you agree to our privacy policy and terms of
                  service
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
