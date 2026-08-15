import { Link, useParams } from "react-router-dom";
import cars from "../data/cars";
import "./CarDetails.css";

function CarDetails() {
    const { id } = useParams();

const car = cars.find((item) => item.id === id);
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
               src={car.image}
               alt={car.fullName}
            />
          </div>


          <div className="details-content">

            <p className="details-brand">
                      {car.brand}
            </p>

            <h1>
              {car.fullName}
            </h1>

            <p className="details-description">
              {car.description}
            </p>


            <div className="details-price">
              {car.price}
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
              <strong>{car.engine}</strong>
            </div>

            <div className="spec-card">
              <span>Power</span>
              <strong>{car.power}</strong>
            </div>

            <div className="spec-card">
              <span>Torque</span>
              <strong>{car.torque}</strong>
            </div>

            <div className="spec-card">
              <span>Transmission</span>
              <strong>{car.transmission}</strong>
            </div>

            <div className="spec-card">
              <span>Fuel Type</span>
              <strong>{car.fuel}</strong>
            </div>

            <div className="spec-card">
              <span>Drive Type</span>
              <strong>{car.driveType}</strong>
            </div>

            <div className="spec-card">
              <span>0–100 km/h</span>
              <strong>{car.acceleration}</strong>
            </div>

            <div className="spec-card">
              <span>Top Speed</span>
              <strong>{car.topSpeed}</strong>
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