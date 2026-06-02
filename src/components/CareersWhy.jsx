import "../styles/CareersWhy.css";

function CareersWhy() {
  return (
    <section className="careers-why">

      <h2>Why Work With Pranex</h2>

      <p className="why-text">
        We invest in our people and create an environment where
        talent thrives and innovation flourishes.
      </p>

      <div className="why-cards">

        <div className="why-card">
          <div className="icon-box">🏆</div>

          <h3>Impactful Work</h3>

          <p>
            Work on challenging projects for leading
            organizations across industries. Your
            contributions directly impact business
            success.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">👥</div>

          <h3>Collaborative Culture</h3>

          <p>
            Join a diverse team that values respect,
            integrity, and mutual support. We succeed
            together through collaboration.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-box">📈</div>

          <h3>Growth Opportunities</h3>

          <p>
            Advance your career with clear paths for
            progression, mentorship programs, and
            continuous learning initiatives.
          </p>
        </div>

      </div>

    </section>
  );
}

export default CareersWhy;