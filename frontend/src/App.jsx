
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import CollegeTennis from './pages/CollegeTennis'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <NavLink className="logo" to="/">
          GLOBAL SPORTS <span>MARKETPLACE 2</span>
        </NavLink>

        <nav aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/jobs">Sports Jobs</NavLink>
          <NavLink to="/college-tennis">
            College Tennis
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/college-tennis"
          element={<CollegeTennis />}
        />
        <Route
          path="*"
          element={
            <main className="inner-page">
              <h1>Page Not Found</h1>
              <p>The requested page does not exist.</p>
            </main>
          }
        />
      </Routes>

      <footer>
        © {new Date().getFullYear()}
        {' '}Global Sports Marketplace 2
      </footer>
    </div>
  )
}

export default App
