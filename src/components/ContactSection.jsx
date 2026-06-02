import "../styles/ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">

      <div className="contact-title">
        <h2>Get in Touch</h2>

        <p>
          We’re here to answer your questions and discuss how we can support your
          business needs. Reach out through any of our offices.
        </p>
      </div>

      <div className="office-container">

        <div className="office-card">
          <div className="office-icon">📍</div>

          <div>
            <h3>USA Office</h3>

            <p>
              5900 Balcones DR 29365 <br />
              Austin, TX 78731 <br />
              United States
            </p>
          </div>
        </div>

        <div className="office-card">
          <div className="office-icon">📍</div>

          <div>
            <h3>India Office</h3>

            <p>
              3rd Floor WG ELITE, Plot No 241, <br />
              Block B Sy. Nos. 43, Kavuri Hills, <br />
              Hyderabad, Telangana 500033 <br />
              India
            </p>
          </div>
        </div>

      </div>

      <div className="contact-info-container">

        <div className="info-card">
          <div className="info-icon">📞</div>

          <h4>Phone</h4>

          <p>+91-9885698683</p>
        </div>

        <div className="info-card">
          <div className="info-icon">✉️</div>

          <h4>Email</h4>

          <p>info@pranextec.com</p>
        </div>

        <div className="info-card">
          <div className="info-icon">🕒</div>

          <h4>Business Hours</h4>

          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>

      </div>

    </section>
  );
}

export default ContactSection;