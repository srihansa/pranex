import "../styles/WhyPranex.css";

function WhyPranex() {
  return (
    <section className="why-pranex">

      <h2>Why Choose Pranex</h2>

      <p className="why-subtitle">
        Excellence in technology and talent solutions
      </p>

      <div className="why-grid">

        <div className="why-card">
          <div className="why-icon">🏅</div>
          <h3>15+ Years Experience</h3>
          <p>
            Proven track record
            delivering excellence
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">🛡️</div>
          <h3>Reliable Solutions</h3>
          <p>
            Scalable and secure
            technology services
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">🕒</div>
          <h3>Agile Delivery</h3>
          <p>
            Fast, efficient, and
            results-driven approach
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">👥</div>
          <h3>Expert Teams</h3>
          <p>
            Industry-specific,
            qualified professionals
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyPranex;