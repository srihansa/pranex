import "../styles/ContactFooter.css";

function ContactFooter() {
  return (
    <footer className="contact-footer">

      <div className="footer-top-contact">
        <h2>Ready to Start Your Project?</h2>

        <p>
          Our team is ready to discuss your requirements and provide tailored
          solutions for your business.
        </p>

        <div className="footer-buttons">
          <button className="call-btn">Call Us Now</button>
          <button className="email-btn">Email Us</button>
        </div>
      </div>

      <div className="footer-main">

        <div className="footer-box">
          <h2>PRANEX</h2>

          <p>
            Innovative IT solutions and US staffing services,
            dedicated to helping businesses grow and succeed.
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
            5900 Balcones DR 29365 <br />
            Austin, TX 78731 <br />
            +91-9885698683 <br />
            info@pranextec.com
          </p>
        </div>

        <div className="footer-box">
          <h3>India Office</h3>

          <p>
            3rd Floor WG ELITE, Plot No 241, <br />
            Block B Sy. Nos. 43, Kavuri Hills, <br />
            Hyderabad, Telangana 500033
          </p>
        </div>

      </div>

      <div className="footer-copy">
        © 2026 Pranex Technologies. All rights reserved.
      </div>

    </footer>
  );
}

export default ContactFooter;