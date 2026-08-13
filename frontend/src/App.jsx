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