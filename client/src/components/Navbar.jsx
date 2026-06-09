import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar">
        <div className="logo">
            📄 Resume Builder
        </div>

        <ul className="nav-links">
            <li>Features</li>
            <li>Templates</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>

        <Link to="/create-resume">
        <button className="start-btn">
            Get Started
        </button>
        </Link>
        </nav>
    );
}

export default Navbar;