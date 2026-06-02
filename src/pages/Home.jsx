import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import ServicesSection from "../components/ServicesSection";
import WhyPranex from "../components/WhyPranex";
import VisionMission from "../components/VisionMission";
import FAQ from "../components/FAQ";
import ClientTrust from "../components/ClientTrust";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <ServicesSection />
      <WhyPranex />
      <VisionMission />
      <FAQ />
      <ClientTrust />
      <Footer />
    </>
  );
}

export default Home;