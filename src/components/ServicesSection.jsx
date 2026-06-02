import "../styles/ServicesSection.css";

function ServicesSection() {
  return (
    <section className="services-section">

      <h2>Our Services</h2>

      <p className="service-subtitle">
        Comprehensive solutions to power your business
      </p>

      <div className="services-grid">

        <div className="service-card">
          <div className="icon">👥</div>
          <h3>US Staffing</h3>
          <p>
            Connect with top-tier talent across the
            United States. We specialize in identifying
            professionals who align with your company
            culture and business objectives.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">{"</>"}</div>
          <h3>IT Consulting</h3>
          <p>
            Strategic technology guidance to transform
            your business. Our experts provide
            comprehensive IT consulting services to
            optimize your infrastructure and operations.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">👨‍💻</div>
          <h3>IT Staffing</h3>
          <p>
            Build your technical team with skilled IT
            professionals. From developers to system
            administrators, we source qualified
            candidates for your technology needs.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📈</div>
          <h3>Digital Marketing</h3>
          <p>
            Amplify your brand presence with
            data-driven digital marketing strategies.
            We help businesses reach their target
            audience and drive measurable growth.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🧠</div>
          <h3>AI/ML & Data Science</h3>
          <p>
            Leverage artificial intelligence and machine
            learning to unlock insights from your data.
            Our experts implement cutting-edge
            solutions for business intelligence.
          </p>
        </div>

      </div>

    </section>
  );
}

export default ServicesSection;