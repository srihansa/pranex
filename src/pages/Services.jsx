import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Services.css";
import ServiceDetails from "../components/ServiceDetails";
import WhyServices from "../components/WhyServices";
import ServicesFooter from "../components/ServicesFooter";
function Services() {
  return (
    <>
      <Navbar />

      <section className="services-hero">

        <h1>Our Services</h1>

        <p>
          Comprehensive IT solutions and staffing
          services designed to accelerate your
          business growth and digital transformation.
        </p>

      </section>
      <ServiceDetails />
      <WhyServices />
      <ServicesFooter />

      

    </>
  );
}

export default Services;