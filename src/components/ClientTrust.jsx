import "../styles/ClientTrust.css";

function ClientTrust() {
  return (
    <section className="client-section">

      <h2>Client Trust</h2>

      <p className="client-subtitle">
        Trusted by leading organizations worldwide
      </p>

      <div className="client-grid">

        <div className="client-card">

          <div className="client-header">

            <div className="client-logo">
              JD
            </div>

            <div>
              <h3>John Davidson</h3>
              <span>CTO, TechCorp Inc.</span>
            </div>

          </div>

          <p className="client-review">
            "Pranex Technologies transformed our IT
            infrastructure with their expert consulting.
            Their team delivered a scalable AWS solution
            that reduced our operational costs by 40%."
          </p>

        </div>

        <div className="client-card">

          <div className="client-header">

            <div className="client-logo">
              SM
            </div>

            <div>
              <h3>Sarah Mitchell</h3>
              <span>HR Director, Global Systems</span>
            </div>

          </div>

          <p className="client-review">
            "The quality of candidates Pranex provides
            is exceptional. They understood our company
            culture and consistently delivered
            professionals who excel in their roles."
          </p>

        </div>

        <div className="client-card">

          <div className="client-header">

            <div className="client-logo">
              RP
            </div>

            <div>
              <h3>Robert Park</h3>
              <span>CEO, DataFlow Analytics</span>
            </div>

          </div>

          <p className="client-review">
            "Their AI and data science expertise helped
            us unlock valuable insights from our data.
            The team was professional, knowledgeable,
            and delivered beyond expectations."
          </p>

        </div>

      </div>

    </section>
  );
}

export default ClientTrust;