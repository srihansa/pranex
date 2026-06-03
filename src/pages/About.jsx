import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";
import AboutVision from "../components/AboutVision";
import CoreValues from "../components/corevalues";
import CompanyStrength from "../components/CompanyStrength";
import AboutFooter from "../components/AboutFooter";
import CareersFooter from "../components/CareersFooter";
function About() {
  return (
    <>
      <Navbar />

      <section className="about-hero">

        <h1>About Pranex Technologies</h1>

        <p>
          A trusted partner in IT solutions and staffing,
          committed to excellence, innovation, and
          transformative business results.
        </p>

      </section>

      <section className="about-content">

        <div className="about-left">

          <h2>Who We Are</h2>

          <p>
            Provider of innovative IT solutions and US
            staffing services, dedicated to helping
            businesses grow and succeed. With over
            15 years of experience, we specialize in
            connecting companies with top talent,
            developing custom software, implementing
            AWS and Salesforce solutions, and providing
            managed IT services.
          </p>

          <p>
            Our approach combines expertise,
            technology, and strategy to deliver
            scalable, reliable, and results-driven
            solutions that empower our clients to
            thrive in a competitive market.
          </p>

          <p>
            These proven solutions and services
            combined with our unique deployment
            model that builds qualified,
            industry specific, fit-for-purpose teams
            fulfills our clients' digital visions and
            achieves results. Our agility and obsession
            with providing value enables us to support
            an ever-evolving digital world.
          </p>

        </div>

        <div className="about-right">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="team"
          />

        </div>

      </section>
      <AboutVision/>
      <corevalues />
      <CompanyStrength />
      <CareersFooter/>
    

    </>
  );
}

export default About;