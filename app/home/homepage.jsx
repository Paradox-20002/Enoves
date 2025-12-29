"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Carousel from "../components/carousel/carousel";
import Slider from "../components/slider/slider";
import ScrollScene from "../components/home/ScrollScene";
import ServicesSection from "../components/home/ServicesSection";
import PortfolioSection from "../components/home/PortfolioSection";
import CTASection from "../components/home/CTASection";
// import NewsletterWidget from "../components/newsletter/NewsletterWidget";
import FaqSection from "../components/faq/faq";
import { HomeFaqs } from "./faqHome";
import AuroraScene from "../components/Aurora";
import Search from "../components/search/search";
import Testemonials from "../components/home/testemonials";

export default function HomePagee() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const auroraContainerRef = useRef(null);

  return (
    <>
      <div className="relative">

        {/* --- Progress Bar (Fully Working) --- */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r 
          from-blue-500 to-purple-600 origin-left z-[9999]"
          style={{ scaleX }}
        />

        {/* Slider Section */}
        <Slider />

        {/* Search Button */}
        {/* <div className="fixed bottom-6 right-6 z-[9999]">
          <Search />
        </div> */}

        <ScrollScene />


        <div className="relative isolate bg-[#04060D]">

          {/* Aurora background */}
          <AuroraScene
            containerRef={auroraContainerRef}
            foldSectionRef={{ current: null }}
            heavySectionRef={{ current: null }}
          />

          <PortfolioSection />
          <ServicesSection />
          <CTASection />
        </div>

        <Carousel
          img1="austin-pontoon"
          img2="doone-towing"
          img3="nerolimo"
          img4="pro-black"
          img5="quick-austin"
          img6="royal-limo"
        />

        <section className="bg-[#04060D] pb-20 pt-1">
          <FaqSection faqs={HomeFaqs} />
          <Testemonials />
        </section>
      </div>
    </>
  );
}
