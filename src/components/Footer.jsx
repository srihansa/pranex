import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <section className="footer-top">

        <h2>Ready to Transform Your Business?</h2>

        <p>
          Partner with Pranex Technologies for innovative
          IT solutions and exceptional talent acquisition.
        </p>

        <button>Contact Us Today →</button>

      </section>

      <footer className="footer">

        <div className="footer-grid">

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

            <p>
              5900 Balcones DR 29365
            </p>

            <p>
              Austin, TX 78731
            </p>

            <p>
              +91-9885698633
            </p>

            <p>
              info@pranexc.com
            </p>

          </div>

          <div className="footer-box">

            <h3>India Office</h3>

            <p>
              3rd Floor WG ELITE, Plot No 241,
            </p>

            <p>
              Block B Sy. Nos. 43, Kavuri Hills,
            </p>

            <p>
              Hyderabad, Telangana 500033
            </p>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Pranex Technologies. All rights reserved.
        </div>

      </footer>
    </>
  );
}

export default Footer;