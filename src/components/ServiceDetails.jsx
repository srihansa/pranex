import "../styles/ServiceDetails.css";

function ServiceDetails() {
  return (
    <section className="services-details">

      {/* US Staffing */}
      <div className="service-card">

        <div className="service-box">
          <div className="service-icon">👥</div>
          <h2>US Staffing</h2>

          <p>
            Connect with exceptional talent across the
            United States through our comprehensive
            staffing solutions.
          </p>
        </div>

        <div className="service-box">
          <h3>Key Capabilities</h3>

          <ul>
            <li>Contract Staffing</li>
            <li>Direct Hire Placement</li>
            <li>Contract-to-Hire</li>
            <li>Executive Search</li>
            <li>Payroll Services</li>
            <li>Candidate Screening & Assessment</li>
          </ul>
        </div>

        <div className="service-box">
          <h3>Service Details</h3>

          <p>
            Our US staffing services connect organizations
            with top-tier professionals across all industries.
            We leverage our extensive network, rigorous
            screening process, and deep market knowledge
            to identify candidates who not only meet technical
            requirements but also align with your company
            culture and long-term objectives.
          </p>
        </div>

      </div>

      {/* IT Consulting */}
      <div className="service-card">

        <div className="service-box">
          <div className="service-icon">{"</>"}</div>

          <h2>IT Consulting</h2>

          <p>
            Strategic technology guidance to optimize
            your IT infrastructure and drive digital
            transformation.
          </p>
        </div>

        <div className="service-box">
          <h3>Key Capabilities</h3>

          <ul>
            <li>IT Strategy & Planning</li>
            <li>Technology Roadmap Development</li>
            <li>Infrastructure Assessment</li>
            <li>Digital Transformation Consulting</li>
            <li>System Architecture Design</li>
            <li>Technology Vendor Selection</li>
          </ul>
        </div>

        <div className="service-box">
          <h3>Service Details</h3>

          <p>
            Our IT consulting services help organizations
            navigate complex technology decisions and build
            robust, scalable infrastructure. We assess your
            current systems, identify opportunities for
            improvement, and develop strategic roadmaps
            that align technology investments with business
            objectives.
          </p>
        </div>

      </div>

      {/* IT Staffing */}
      <div className="service-card">

        <div className="service-box">
          <div className="service-icon">👨‍💻</div>

          <h2>IT Staffing</h2>

          <p>
            Build your technical team with skilled IT
            professionals across all technology domains.
          </p>
        </div>

        <div className="service-box">
          <h3>Key Capabilities</h3>

          <ul>
            <li>Software Developers</li>
            <li>DevOps Engineers</li>
            <li>Cloud Architects</li>
            <li>Cybersecurity Specialists</li>
            <li>Database Administrators</li>
            <li>Network Engineers</li>
          </ul>
        </div>

        <div className="service-box">
          <h3>Service Details</h3>

          <p>
            We specialize in sourcing and placing IT
            professionals who possess the technical skills
            and experience your projects demand. From
            software developers to cybersecurity experts,
            our IT staffing solutions ensure you have the
            right talent at the right time.
          </p>
        </div>

      </div>

      {/* Digital Marketing */}
      <div className="service-card">

        <div className="service-box">
          <div className="service-icon">📈</div>

          <h2>Digital Marketing</h2>

          <p>
            Data-driven marketing strategies that amplify
            your brand and drive measurable business
            growth.
          </p>
        </div>

        <div className="service-box">
          <h3>Key Capabilities</h3>

          <ul>
            <li>SEO & SEM</li>
            <li>Social Media Marketing</li>
            <li>Content Marketing</li>
            <li>Email Campaign Management</li>
            <li>Analytics & Reporting</li>
            <li>Brand Strategy Development</li>
          </ul>
        </div>

        <div className="service-box">
          <h3>Service Details</h3>

          <p>
            Our digital marketing services help businesses
            establish strong online presence and reach
            target audiences effectively. We combine
            creative strategies with data analytics to
            deliver campaigns that generate leads,
            increase engagement, and drive conversions.
          </p>
        </div>

      </div>

      {/* AI ML */}
      <div className="service-card">

        <div className="service-box">
          <div className="service-icon">🧠</div>

          <h2>AI/ML & Data Science</h2>

          <p>
            Harness the power of artificial intelligence
            and machine learning to unlock valuable
            business insights.
          </p>
        </div>

        <div className="service-box">
          <h3>Key Capabilities</h3>

          <ul>
            <li>Machine Learning Model Development</li>
            <li>Predictive Analytics</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision Solutions</li>
            <li>Data Pipeline Engineering</li>
            <li>Big Data Analytics</li>
          </ul>
        </div>

        <div className="service-box">
          <h3>Service Details</h3>

          <p>
            Transform your data into actionable insights
            with our AI and machine learning expertise.
            We develop custom models and intelligent
            systems that automate processes, predict
            trends, and enable data-driven decision
            making across your organization.
          </p>
        </div>

      </div>

    </section>
  );
}

export default ServiceDetails;