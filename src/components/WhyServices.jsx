import "../styles/WhyServices.css";

function WhyServices() {
  return (
    <section className="why-services">

      <div className="why-title">
        <h1>Why Choose Our Services</h1>
        <p>
          Excellence delivered through expertise and commitment
        </p>
      </div>

      <div className="why-grid">

        <div className="why-card">
          <div className="why-icon">🗄️</div>

          <h2>Industry Expertise</h2>

          <p>
            15+ years of experience delivering
            technology solutions across diverse
            industries with proven results.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">🛡️</div>

          <h2>Certified Professionals</h2>

          <p>
            Our team holds industry-recognized
            certifications in AWS, Salesforce, and
            leading technology platforms.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">📈</div>

          <h2>Results-Driven Approach</h2>

          <p>
            We focus on delivering measurable
            business outcomes that align with your
            strategic objectives.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyServices;