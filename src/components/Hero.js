import { Link } from "react-router-dom";

import "../styles/Hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <span className="hero-welcome">WELCOME TO GREEN</span>
        <span className="hero-motto">
          BEAUTY LIVES INSIDE YOU, SHOW IT TO THE WORLD
        </span>
        <Link to="/shop">
          <button className="hero-button">Shop now</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
