import "../styles/AboutVision.css";

function AboutVision() {
  return (
  
    <section className="about-vision">

      <div className="vision-box">

        <div className="vision-image">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
            alt="vision"
          />
        </div>

        <div className="vision-content">

          <div className="vision-icon">👁️</div>

          <h2>Our Vision</h2>

          <p>
            To be a global leader in IT solutions and
            staffing, known for excellence, integrity,
            and transformative results for our clients.
          </p>

        </div>

      </div>

      <div className="mission-box">

        <div className="mission-content">

          <div className="vision-icon">🎯</div>

          <h2>Our Mission</h2>

          <p>
            To empower businesses by providing quality
            talent, innovative technology solutions,
            and digital strategies that drive
            efficiency, engagement, and growth.
          </p>

        </div>

        <div className="mission-image">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="mission"
          />
        </div>

      </div>

    </section>
  );
}

export default AboutVision;