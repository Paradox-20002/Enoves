"use client";

import { useRef } from "react";
import Carousel from "../components/carousel/carousel";
import Slider from "../components/slider/slider";
import ScrollScene from "../components/home/ScrollScene";
import ServicesSection from "../components/home/ServicesSection";
import PortfolioSection from "../components/home/PortfolioSection";
import CTASection from "../components/home/CTASection";
import NewsletterWidget from "../components/newsletter/NewsletterWidget";
import AuroraScene from "../components/Aurora";
// import SectionScrollFX from "../components/home/SectionScrollFX";

export default function HomePagee() {
  const auroraContainerRef = useRef( null );

  return (
    <>
      <Slider />
      <ScrollScene />
      <div ref={ auroraContainerRef } className="relative isolate bg-[#04060D]">

        {/* Unified Aurora Background for all sections */ }
        <AuroraScene
          containerRef={ auroraContainerRef }
          foldSectionRef={ { current: null } }
          heavySectionRef={ { current: null } }
        />

        <ServicesSection />
        <PortfolioSection />
        <CTASection />
      </div>

      <Carousel img1="next" img2="globe" img3="file" img4="window" />
      {/* <SectionScrollFX /> */ }
      <NewsletterWidget />
    </>
  );
}
