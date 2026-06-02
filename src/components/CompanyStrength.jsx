import "../styles/CompanyStrength.css";

function CompanyStrength() {
  return (
    <section className="company-strength">

      <h2>Company Strengths</h2>

      <p className="strength-subtitle">
        What sets us apart in the industry
      </p>

      <div className="strength-grid">

        <div className="strength-card">

          <div className="strength-icon">🏅</div>

          <h3>15+ Years of Excellence</h3>

          <p>
            Over a decade and a half of proven
            experience delivering innovative IT
            solutions and staffing services to
            businesses worldwide.
          </p>

        </div>

        <div className="strength-card">

          <div className="strength-icon">👥</div>

          <h3>Industry Expertise</h3>

          <p>
            Our team comprises certified professionals
            with deep expertise in AWS, Salesforce,
            AI/ML, and enterprise technology solutions.
          </p>

        </div>

        <div className="strength-card">

          <div className="strength-icon">⚡</div>

          <h3>Agile Approach</h3>

          <p>
            Our obsession with providing value enables
            us to support an ever-evolving digital
            world with speed and precision.
          </p>

        </div>

        <div className="strength-card">

          <div className="strength-icon">📈</div>

          <h3>Results-Driven</h3>

          <p>
            We focus on delivering measurable outcomes
            that directly impact your business growth
            and operational efficiency.
          </p>

        </div>

      </div>

    </section>
  );
}

export default CompanyStrength;