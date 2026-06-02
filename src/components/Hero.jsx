import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Innovative IT Solutions
          <br />
          & US Staffing Services
        </h1>

        <p>
          Empowering businesses with quality talent,
          cutting-edge technology solutions, and digital
          strategies that drive efficiency, engagement,
          and growth.
        </p>

        <div className="hero-buttons">
          <button className="start-btn">
            Get Started →
          </button>

          <button className="service-btn">
            Our Services
          </button>
        </div>

      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="team"
        />
      </div>

    </section>
  );
}

export default Hero;