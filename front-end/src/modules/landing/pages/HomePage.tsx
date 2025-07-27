import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PricingSection from "../components/PricingSection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Features></Features>
      <ProcessSection></ProcessSection>
      <TestimonialsSection></TestimonialsSection>
      <PricingSection></PricingSection>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
