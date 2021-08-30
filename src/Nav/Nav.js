import React from 'react';
import './Nav.css';
import Resume from './Resume.pdf';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="Nav-link">
        <a href="mailto: timjwkim@umich.edu">Email</a>
      </div>
      <div className="Nav-link">
        <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
      </div>
      <div className="Nav-link">
        <a href="https://linkedin.com/in/timothy-kim-b6b18a176" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <div className="Nav-link">
        <a href="https://github.com/timjwkim" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  )
}

export default Nav;
