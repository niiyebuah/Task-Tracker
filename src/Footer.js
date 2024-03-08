import React, { useState } from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className={`bg-dark text-white py-4 fixed-bottom ${isOpen ? 'footer-open' : ''}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">&copy; 2024 Task Tracker. All rights reserved.</p>
          <button className="btn btn-link text-white" onClick={toggleOpen}>
            {isOpen ? 'Hide Info' : 'Show Info'}
          </button>
        </div>
        <div className={`footer-info ${isOpen ? 'slide-in' : 'slide-out'}`}>
          <p>This is the advanced footer information. It can include additional details about your website or company.</p>
          <p>You can customize this section as needed.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
