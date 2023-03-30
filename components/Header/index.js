import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      className="logo"
      alt="wave"
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
    />
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </div>
)
export default Header
