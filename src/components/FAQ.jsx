import "../styles/FAQ.css";

function FAQ() {
  return (
    <section className="faq-section">

      <h2>Frequently Asked Questions</h2>

      <p className="faq-subtitle">
        Get answers to common questions about our services
      </p>

      <div className="faq-grid">

        <div className="faq-box">
          <span>
            What industries do you provide staffing services for?
          </span>

          <span>⌄</span>
        </div>

        <div className="faq-box">
          <span>
            What is your experience with AWS implementations?
          </span>

          <span>⌄</span>
        </div>

        <div className="faq-box">
          <span>
            Do you offer Salesforce consulting and development?
          </span>

          <span>⌄</span>
        </div>

        <div className="faq-box">
          <span>
            How do you source and vet candidates?
          </span>

          <span>⌄</span>
        </div>

        <div className="faq-box">
          <span>
            What managed IT services do you provide?
          </span>

          <span>⌄</span>
        </div>

        <div className="faq-box">
          <span>
            What is your approach to project delivery?
          </span>

          <span>⌄</span>
        </div>

      </div>

    </section>
  );
}

export default FAQ;