import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>Explore the Healing Power of Plants</h1>
          <p>Discover a diverse collection of medicinal plants, learn about their traditional uses, and explore how to grow your own virtual herbal garden</p>
          <div className="hero-cta">
            <Link to="/plants"><button>Explore Plants</button></Link>
            <Link to="/learn"><button>Learn More</button></Link>
          </div>
        </div>
      </header>

      <main>
        <section className="featured-section">
          <h2>Discover Nature's Pharmacy</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Identify Plants</h3>
              <div className="feature-icon">🔍</div>
              <p>Learn to identify medicinal plants by their characteristics and properties</p>
            </div>
            <div className="feature-card">
              <h3>Medicinal Uses</h3>
              <div className="feature-icon">🌿</div>
              <p>Explore traditional and modern medicinal applications of healing plants</p>
            </div>
            <div className="feature-card">
              <h3>Growing Guide</h3>
              <div className="feature-icon">🌱</div>
              <p>Get expert advice on cultivating your own medicinal herb garden</p>
            </div>
          </div>
        </section>

        <section className="garden-section">
          <h2>Start Your Virtual Garden</h2>
          <p>Create a personalized virtual garden where you can track growth, learn cultivation techniques, and discover plant interactions</p>
          <Link to="/garden"><button className="garden-btn">My Garden</button></Link>
        </section>
      </main>
    </>
  )
}

export default Home 