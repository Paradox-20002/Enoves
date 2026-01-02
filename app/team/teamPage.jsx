"use client";

import Image from "next/image";
import {
  leadershipTeam,
  DevTeam,
  MarketingTeam,
  SEOteam,
  MoreLeaders,
} from "./team";
// 1. Framer Motion Import
import { motion } from "framer-motion";
import TypingEffect from "./typingeffect";
import { useEffect, useState } from "react";

// 2. Placeholder/Mock for Social Icons (You must define/import these in your actual project)
const MockLinkedInIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 17h4v4H4v-4zM6 4a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);
const MockTwitterIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.254 5.601a8.913 8.913 0 01-2.433.663c-.88.455-1.896.7-3.048.7-2.32 0-3.951-1.282-4.225-3.085-1.787 1.581-3.692 2.766-5.83 3.518-.328 1.455-.705 3.024-.705 3.024s.005.155.005.17c0 3.824 2.809 7.42 7.085 8.167.33.059.664.088 1.002.088 1.83 0 3.298-.823 4.29-2.079 1.161-1.464 1.844-3.414 1.844-5.617 0-.31-.02-.619-.06-.924.646-.467 1.213-1.01 1.697-1.636z" />
  </svg>
);

export default function TeamPage() {
  const [typing, setTyping] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTyping(true);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);
  // Use the first member of leadershipTeam as the CEO for the large section
  const ceo = leadershipTeam[0] || {
    name: "Jane Doe",
    title: "Chief Executive Officer",
    image: "/ceo-placeholder.jpg", // REPLACE with actual CEO image path
    socials: [
      {
        label: "LinkedIn",
        href: "#",
        icon: MockLinkedInIcon,
      },
      {
        label: "Twitter",
        href: "#",
        icon: MockTwitterIcon,
      },
    ],
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
      boxShadow: "0 10px 30px rgba(139, 92, 246, 0.5)",
    },
  };

  return (
    <main className="relative min-h-screen max-w-full overflow-hidden bg-[#0a0a0d] py-20 text-[#f5f5ff]">
      {/* --------------------------------------------- */}
      {/* SECTION 1: HERO & HEADING (KEEP AS IS) */}
      {/* --------------------------------------------- */}
      <section className="relative mx-auto flex max-w-full flex-col items-center gap-6 px-10 text-center">
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
        <h1 className="z-10 text-3xl lg:text-5xl font-bold leading-tight sm:text-5xl md:text-6xl">
          We Build Momentum With Crafted Teams
        </h1>
        <p className="z-10 max-w-3xl text-base text-gray-300 sm:text-lg">
          Strategists, makers, analysts and storytellers partnered around rapid
          experimentation and high-touch collaboration. Meet the people behind
          the growth stories.
        </p>
      </section>

      {/* --------------------------------------------- */}
      {/* SECTION 2: CEO VISION (NEW) */}
      {/* --------------------------------------------- */}
      <section className="mx-8 lg:mx-20 mt-24 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: CEO Image Card (Animated) */}
          <motion.div
            className="w-full h-[500px] lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/40"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            <Image
              src={ceo.image}
              alt={ceo.name}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform h-300 duration-500 hover:scale-105"
            />
            {/* Dark Overlay with CEO Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d]/90 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-1">{ceo.name}</h3>
              <p className="text-xl font-medium text-purple-300 mb-4">
                {ceo.title}
              </p>
              {/* Social Icons (Only for CEO) */}
              <div className="flex gap-3">
                {ceo.socials?.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/40 bg-purple-900/20 text-purple-200 transition-all duration-300 hover:scale-110 hover:border-purple-300 hover:bg-purple-500/30 hover:text-purple-100"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CEO Vision Text (Typing Effect) */}
          <div className="flex flex-col justify-center">
            <motion.p
              className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* CEO Vision */}
            </motion.p>
            <motion.h2
              className="text-2xl lg:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Our CEO's Vision
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="p-6 rounded-xl bg-purple-900/20 border border-purple-500/30 backdrop-blur-sm relative min-h-[150px]"
            >
              <div>
                <span className="text-3xl relative top-0 text-indigo-400">
                  “
                </span>
                <TypingEffect text="Our vision is to empower every client to achieve their fullest potential. We strive to deliver innovative solutions, create meaningful impact, and build lasting partnerships. Your success drives our purpose, and together we turn ambition into reality." />
                <span className="text-3xl relative top-3 text-indigo-400">
                  ”
                </span>
              </div>

              <div className="text-right mt-4 text-sm font-semibold text-white">
                {typing && <TypingEffect text="Muhammad Aqeel" />}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-full px-4 text-center">
        <motion.h2
          className="text-2xl lg:text-4xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Leadership
          </span>
        </motion.h2>
        <p className="mt-4 text-lg text-gray-400">
          Meet the exceptional leadership driving our momentum across all
          departments.
        </p>
      </section>
     <section className="mt-20 relative">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-full mx-6 lg:mx-20">
    {MoreLeaders.map((team, index) => (
      <motion.div
        key={team.name}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -14,
          rotateX: 4,
          rotateY: -4,
        }}
        className="relative group perspective-1000"
      >
        {/* Glow layer */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

        {/* Card */}
        <div className="relative flex flex-col rounded-3xl bg-gradient-to-br from-[#2b2b4f] via-[#1f1f38] to-[#151527] border border-white/10 shadow-[0_30px_80px_-20px_rgba(128,90,213,0.45)] overflow-hidden">
          
          {/* Image frame */}
          <div className="relative mx-6 mt-6 rounded-2xl bg-white overflow-hidden aspect-[4/5]">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={team.images}
                alt={team.name}
                fill
                className="object-contain"
                quality={100}
                priority={index < 3}
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative px-6 py-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-extrabold text-purple-300 tracking-wide"
            >
              {team.title}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.45, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-2 text-sm font-semibold text-gray-300 uppercase tracking-[0.2em]"
            >
              {team.name}
            </motion.h2>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Leadership Team (Original section is removed since the CEO card replaced it) */}
      {/* To re-add the rest of the leadership team, you would need to iterate over leadershipTeam.slice(1) or create a separate, smaller Leadership Team section */}
    </main>
  );
}
