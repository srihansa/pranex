import "../styles/CoreValues.css";

function CoreValues() {
  return (
    <section className="core-values">

      <h2>Core Values</h2>

      <p className="core-subtitle">
        At Pranex, our core values guide our actions and
        form the bedrock of our organization. They embody
        our beliefs, define our identity, and drive our
        unwavering dedication.
      </p>

      <div className="core-grid">

        <div className="core-card">

          <div className="core-icon">🏆</div>

          <div>
            <h3>Will to Win</h3>

            <p>
              We achieve success through collaborative
              resourcefulness and unyielding resilience.
            </p>
          </div>

        </div>

        <div className="core-card">

          <div className="core-icon">🛡️</div>

          <div>
            <h3>Do the Right Thing</h3>

            <p>
              We drive solutions through honesty and
              integrity.
            </p>
          </div>

        </div>

        <div className="core-card">

          <div className="core-icon">👥</div>

          <div>
            <h3>Make Others Better</h3>

            <p>
              We evolve, adapt, and support one another
              through intentional mentorship and
              development.
            </p>
          </div>

        </div>

        <div className="core-card">

          <div className="core-icon">🤍</div>

          <div>
            <h3>Respect for All</h3>

            <p>
              We are accountable for cultivating
              authentic and inclusive relationships.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CoreValues;