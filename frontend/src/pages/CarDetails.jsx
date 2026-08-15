import { Link } from "react-router-dom";
import "./CarDetails.css";

function CarDetails() {
  return (
    <div className="details-page">

      {/* Navbar */}
      <nav className="navbar">

        <Link to="/" className="logo">
          <span className="logo-icon">🚗</span>
          <span className="logo-text">AutoVerse</span>
          <span className="logo-ai">AI</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore Cars</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/favorites">Favorites</Link>
        </div>

        <div className="nav-actions">
          <button className="ai-button">
            🤖 AI Assistant
          </button>

          <button className="login-button">
            Login
          </button>
        </div>

      </nav>


      {/* Back */}
      <div className="details-container">

        <Link to="/explore" className="back-link">
          ← Back to Explore Cars
        </Link>


        {/* Main Car Section */}
        <div className="car-details-main">

          <div className="details-image">
            <img
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
              alt="BMW M4"
            />
          </div>


          <div className="details-content">

            <p className="details-brand">
              BMW
            </p>

            <h1>
              BMW M4
            </h1>

            <p className="details-description">
              The BMW M4 combines high-performance engineering,
              premium design and advanced technology to deliver
              an exciting driving experience.
            </p>


            <div className="details-price">
              ₹1.48 Cr
            </div>


            <div className="details-actions">

              <button className="favorite-btn">
                ♡ Add to Favorites
              </button>

              <button className="compare-btn">
                ⚖ Compare
              </button>

            </div>

          </div>

        </div>


        {/* Specifications */}
        <section className="spec-section">

          <div className="section-heading">
            <p>SPECIFICATIONS</p>

            <h2>BMW M4 Specifications</h2>
          </div>


          <div className="spec-grid">

            <div className="spec-card">
              <span>Engine</span>
              <strong>3.0L Twin Turbo</strong>
            </div>

            <div className="spec-card">
              <span>Power</span>
              <strong>503 HP</strong>
            </div>

            <div className="spec-card">
              <span>Torque</span>
              <strong>650 Nm</strong>
            </div>

            <div className="spec-card">
              <span>Transmission</span>
              <strong>Automatic</strong>
            </div>

            <div className="spec-card">
              <span>Fuel Type</span>
              <strong>Petrol</strong>
            </div>

            <div className="spec-card">
              <span>Drive Type</span>
              <strong>RWD</strong>
            </div>

            <div className="spec-card">
              <span>0–100 km/h</span>
              <strong>3.9 sec</strong>
            </div>

            <div className="spec-card">
              <span>Top Speed</span>
              <strong>250 km/h</strong>
            </div>

          </div>

        </section>


        {/* Features */}
        <section className="features-section">

          <div className="section-heading">
            <p>FEATURES</p>
            <h2>Key Features</h2>
          </div>

          <div className="features-grid">

            <div>✓ Adaptive LED Headlights</div>
            <div>✓ Digital Instrument Cluster</div>
            <div>✓ Wireless Apple CarPlay</div>
            <div>✓ Parking Assistance</div>
            <div>✓ Premium Sound System</div>
            <div>✓ Advanced Safety System</div>

          </div>

        </section>

      </div>

    </div>
  );
}

export default CarDetails;