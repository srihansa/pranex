import "../styles/AboutFooter.css";

function AboutFooter() {
  return (
    <footer>

      <div className="about-footer-top">

        <h2>Empowering Each Other</h2>

        <p>
          Our success is built on a foundation of mutual
          support, continuous learning, and shared
          achievement. We believe in creating an
          environment where every team member can thrive,
          innovate, and contribute to our collective
          mission of delivering exceptional value to our
          clients.
        </p>

      </div>

      <div className="footer-bottom">

        <div className="footer-box">

          <h1>PRANEX</h1>

          <p>
            Innovative IT solutions and US staffing
            services, dedicated to helping businesses
            grow and succeed.
          </p>

        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact Us</a>

        </div>

        <div className="footer-box">

          <h3>USA Office</h3>

          <p>5900 Balcones DR 29365</p>
          <p>Austin, TX 78731</p>
          <p>+91-9885698633</p>
          <p>info@pranexc.com</p>

        </div>

        <div className="footer-box">

          <h3>India Office</h3>

          <p>3rd Floor WG ELITE, Plot No 241,</p>
          <p>Block B Sy. Nos. 43, Kavuri Hills,</p>
          <p>Hyderabad, Telangana 500033</p>

        </div>

      </div>

    </footer>
  );
}

export default AboutFooter;