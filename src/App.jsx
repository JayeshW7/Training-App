import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Plants from './pages/Plants'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="logo">GreenCure</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/plants">Medicinal Plants</Link>
            <Link to="/garden">My Garden</Link>
            <Link to="/learn">Learn</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/garden" element={<div>My Garden Coming Soon</div>} />
          <Route path="/learn" element={<div>Learning Center Coming Soon</div>} />
        </Routes>

        <footer>
          <p>© 2024 Herbal Garden. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
