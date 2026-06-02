import "../styles/CareersFooter.css";

function CareersFooter() {
  return (
    <footer className="careers-footer">

      <div className="career-footer-top">
        <h1>Don't See Your Role?</h1>

        <p>
          We're always looking for talented individuals to join our team.
          Send us your resume and let's explore opportunities together.
        </p>

        <button>Contact Us Today</button>
      </div>

      <div className="career-footer-bottom">

        <div className="career-footer-box">
          <h2>PRANEX</h2>

          <p>
            Innovative IT solutions and US staffing services,
            dedicated to helping businesses grow and succeed.
          </p>
        </div>

        <div className="career-footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="career-footer-box">
          <h3>USA Office</h3>

          <p>5900 Balcones DR 29365</p>
          <p>Austin, TX 78731</p>
          <p>+91-9885698683</p>
          <p>info@pranexc.com</p>
        </div>

        <div className="career-footer-box">
          <h3>India Office</h3>

          <p>
            3rd Floor WG ELITE, Plot No 241,
            Block B Sy. Nos. 43,
            Kavuri Hills,
            Hyderabad, Telangana 500033
          </p>
        </div>

      </div>

      <div className="career-copy">
        © 2026 Pranex Technologies. All rights reserved.
      </div>

    </footer>
  );
}

export default CareersFooter;