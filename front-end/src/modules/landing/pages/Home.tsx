import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Process></Process>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
};

export default Home;
