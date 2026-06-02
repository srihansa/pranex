import "../styles/BenefitsSection.css";

function BenefitsSection() {
  return (
    <section className="benefits-section">

      <h2>Employee Benefits</h2>

      <p className="benefits-text">
        Comprehensive perks designed to support your
        success and well-being
      </p>

      <div className="benefits-grid">

        <div className="benefit-card">
          <div className="benefit-icon">💲</div>

          <h3>Competitive Compensation</h3>

          <p>
            Industry-leading salaries and performance-
            based bonuses
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">♡</div>

          <h3>Health & Wellness</h3>

          <p>
            Comprehensive health insurance and
            wellness programs
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">🎓</div>

          <h3>Professional Development</h3>

          <p>
            Training, certifications, and continuous
            learning opportunities
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">☕</div>

          <h3>Work-Life Balance</h3>

          <p>
            Flexible schedules and remote work options
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">📈</div>

          <h3>Career Growth</h3>

          <p>
            Clear advancement paths and mentorship
            programs
          </p>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">👥</div>

          <h3>Inclusive Culture</h3>

          <p>
            Diverse, collaborative, and supportive
            work environment
          </p>
        </div>

      </div>

    </section>
  );
}

export default BenefitsSection;