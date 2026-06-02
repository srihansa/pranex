import "../styles/ServicesFooter.css";

function ServicesFooter() {
  return (
    <footer className="services-footer">

      <div className="footer-top">

        <h1>Ready to Get Started?</h1>

        <p>
          Let’s discuss how our services can help your business
          achieve its technology and talent objectives.
        </p>

        <button>Contact Us Today</button>

      </div>

      <div className="footer-bottom">

        <div className="footer-box">
          <h2>PRANEX</h2>

          <p>
            Innovative IT solutions and US
            staffing services, dedicated to
            helping businesses grow and
            succeed.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>USA Office</h3>

          <p>5900 Balcones DR 29365</p>
          <p>Austin, TX 78731</p>
          <p>+91-9885698683</p>
          <p>info@pranexc.com</p>
        </div>

        <div className="footer-box">
          <h3>India Office</h3>

          <p>3rd Floor WG ELITE, Plot No 241,</p>
          <p>Block B Sy. Nos. 43, Kavuri Hills,</p>
          <p>Hyderabad, Telangana 500033</p>
        </div>

      </div>

      <div className="copyright">
        © 2026 Pranex Technologies. All rights reserved.
      </div>

    </footer>
  );
}

export default ServicesFooter;