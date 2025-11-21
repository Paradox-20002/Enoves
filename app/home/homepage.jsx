import Carousel from "../components/carousel/carousel";
import Slider from "../components/slider/slider";
import ScrollScene from "../components/home/ScrollScene";
import ServicesSection from "../components/home/ServicesSection";
import PortfolioSection from "../components/home/PortfolioSection";
import CTASection from "../components/home/CTASection";
import NewsletterWidget from "../components/newsletter/NewsletterWidget";
import SectionScrollFX from "../components/home/SectionScrollFX";

export default function HomePagee() {
  return (
    <>
      <Slider />
      <ScrollScene />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <Carousel img1="next" img2="globe" img3="file" img4="window" />
      <SectionScrollFX />
      <NewsletterWidget />
    </>
  );
}
