import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">

        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">🚗</span>
          <span className="logo-text">AutoVerse</span>
          <span className="logo-ai">AI</span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#cars">Explore Cars</a>
          <a href="#compare">Compare</a>
          <a href="#favorites">Favorites</a>
        </div>

        {/* Right Side */}
        <div className="nav-actions">
          <button className="ai-button">
            🤖 AI Assistant
          </button>

          <button className="login-button">
            Login
          </button>
        </div>

      </nav>

      {/* Temporary Home Section */}
      <main className="home-section" id="home">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO AUTOVERSE AI</p>

          <h1>
            Find Your
            <span> Perfect Car</span>
          </h1>

          <p className="hero-description">
            Explore cars, compare models, discover specifications,
            and get intelligent AI-powered recommendations.
          </p>

          <div className="hero-buttons">
            <button className="explore-button">
              Explore Cars →
            </button>

            <button className="learn-button">
              Learn More
            </button>
          </div>
        </div>
      </main>

    </div>
  )
}

export default App