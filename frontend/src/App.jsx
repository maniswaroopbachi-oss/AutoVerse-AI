import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">

        <div className="logo">
          <span className="logo-icon">🚗</span>
          <span className="logo-text">AutoVerse</span>
          <span className="logo-ai">AI</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#cars">Explore Cars</a>
          <a href="#compare">Compare</a>
          <a href="#favorites">Favorites</a>
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


      {/* Hero Section */}
      <main className="home-section" id="home">

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
          {/* Featured Cars Section */}
<section className="featured-section" id="cars">

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
          alt="BMW car"
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
          <button>View Details →</button>
        </div>
      </div>
    </div>


    <div className="car-card">
      <div className="car-image">
        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80"
          alt="Mercedes car"
        />
      </div>

      <div className="car-info">
        <p className="car-brand">Mercedes-Benz</p>
        <h3>Mercedes AMG GT</h3>

        <div className="car-specs">
          <span>⚡ Petrol</span>
          <span>⚙️ Automatic</span>
        </div>

        <div className="car-bottom">
          <strong>₹2.71 Cr</strong>
          <button>View Details →</button>
        </div>
      </div>
    </div>


    <div className="car-card">
      <div className="car-image">
        <img
          src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80"
          alt="Audi car"
        />
      </div>

      <div className="car-info">
        <p className="car-brand">Audi</p>
        <h3>Audi RS5</h3>

        <div className="car-specs">
          <span>⚡ Petrol</span>
          <span>⚙️ Automatic</span>
        </div>

        <div className="car-bottom">
          <strong>₹1.13 Cr</strong>
          <button>View Details →</button>
        </div>
      </div>
    </div>

  </div>

</section>


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
                <option>Ford</option>
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


            <button className="search-button">
              🔍 Search Cars
            </button>

          </div>


          {/* Quick Actions */}
          <div className="hero-buttons">

            <button className="explore-button">
              Explore Cars →
            </button>

            <button className="learn-button">
              🤖 Ask AI
            </button>

          </div>

        </div>

      </main>

    </div>
  )
}

export default App