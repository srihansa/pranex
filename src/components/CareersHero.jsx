import "../styles/CareersHero.css";

function CareersHero() {
  return (
    <section className="careers-hero">

      <div className="careers-left">
        <h1>Join Our Team</h1>

        <p>
          Build your career with a company that values innovation,
          collaboration, and continuous growth. At Pranex, we’re
          committed to developing talent and creating opportunities
          for success.
        </p>

        <div className="career-stats">

          <div>
            <h2>15+</h2>
            <span>Years in Business</span>
          </div>

          <div>
            <h2>200+</h2>
            <span>Team Members</span>
          </div>

          <div>
            <h2>500+</h2>
            <span>Projects Delivered</span>
          </div>

        </div>
      </div>

      <div className="careers-right">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="team"
        />
      </div>

    </section>
  );
}

export default CareersHero;