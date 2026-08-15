import CarDetails from "./pages/CarDetails";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ExploreCars from "./pages/ExploreCars";

function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">

        <div className="logo">
          <span className="logo-icon">🚗</span>
          <span className="logo-text">AutoVerse</span>
          <span className="logo-ai">AI</span>
        </div>

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

      {/* Hero */}
      <main className="home-section">

        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO AUTOVERSE AI
          </p>

          <h1>
            Find Your
            <span> Perfect Car</span>
          </h1>

          <p className="hero-description">
            Explore cars, compare models, discover specifications,
            and get intelligent AI-powered recommendations.
          </p>

          {/* Search Box */}
          <div className="search-box">

            <div className="search-field">
              <label>Brand</label>

              <select>
                <option>Select Brand</option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
                <option>Audi</option>
                <option>Tesla</option>
                <option>Toyota</option>
              </select>
            </div>

            <div className="search-field">
              <label>Model</label>

              <input
                type="text"
                placeholder="Enter model"
              />
            </div>

            <div className="search-field">
              <label>Budget</label>

              <select>
                <option>Select Budget</option>
                <option>Under ₹10 Lakh</option>
                <option>₹10 - ₹20 Lakh</option>
                <option>₹20 - ₹50 Lakh</option>
                <option>Above ₹50 Lakh</option>
              </select>
            </div>

            <Link
              to="/explore"
              className="search-button"
            >
              🔍 Search Cars
            </Link>

          </div>

          <div className="hero-buttons">

            <Link
              to="/explore"
              className="explore-button"
            >
              Explore Cars →
            </Link>

            <button className="learn-button">
              🤖 Ask AI
            </button>

          </div>

        </div>

      </main>

      {/* Featured Cars */}
      <section className="featured-section">

        <div className="section-heading">

          <p>EXPLORE</p>

          <h2>Featured Cars</h2>

          <span>
            Discover some of the most popular cars and explore their details.
          </span>

        </div>

        <div className="car-grid">

          <div className="car-card">

            <div className="car-image">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80"
                alt="BMW"
              />
            </div>

            <div className="car-info">

              <p className="car-brand">BMW</p>

              <h3>BMW M4</h3>

              <div className="car-specs">
                <span>⚡ Petrol</span>
                <span>⚙️ Automatic</span>
              </div>

              <div className="car-bottom">

                <strong>₹1.48 Cr</strong>

                <Link to="/explore">
                  View Details →
                </Link>

              </div>

            </div>

          </div>


          <div className="car-card">

            <div className="car-image">
              <img
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80"
                alt="Mercedes"
              />
            </div>

            <div className="car-info">

              <p className="car-brand">
                Mercedes-Benz
              </p>

              <h3>AMG GT</h3>

              <div className="car-specs">
                <span>⚡ Petrol</span>
                <span>⚙️ Automatic</span>
              </div>

              <div className="car-bottom">

                <strong>₹2.71 Cr</strong>

                <Link to="/explore">
                  View Details →
                </Link>

              </div>

            </div>

          </div>


          <div className="car-card">

            <div className="car-image">
              <img
                src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80"
                alt="Audi"
              />
            </div>

            <div className="car-info">

              <p className="car-brand">
                Audi
              </p>

              <h3>Audi RS5</h3>

              <div className="car-specs">
                <span>⚡ Petrol</span>
                <span>⚙️ Automatic</span>
              </div>

              <div className="car-bottom">

                <strong>₹1.13 Cr</strong>

                <Link to="/explore">
                  View Details →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route
  path="/car/bmw-m4"
  element={<CarDetails />}
/>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/explore"
          element={
            <>
              <nav className="navbar">

                <div className="logo">
                  <span className="logo-icon">🚗</span>
                  <span className="logo-text">AutoVerse</span>
                  <span className="logo-ai">AI</span>
                </div>

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

              <ExploreCars />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;