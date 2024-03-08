import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="slider">
            <div className="slide">
              <h1 className="header-title">Task Tracker</h1>
              <p className="header-description">Organize your tasks and boost productivity</p>
            </div>
            <div className="slide">
              <h1 className="header-title">Stay on Track</h1>
              <p className="header-description">Never miss a deadline again</p>
            </div>
            <div className="slide">
              <h1 className="header-title">Get Things Done</h1>
              <p className="header-description">Achieve your goals with ease</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
