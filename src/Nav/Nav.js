import React from 'react';
import './Nav.css';
import Resume from './Resume.pdf';
import { useSpring, animated } from 'react-spring';

const Nav = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 1000 });

  return (
    <animated.div style={props} className="Nav">
      <div className="Nav-link">
        <a href="mailto: timjwkim@umich.edu">Email</a>
      </div>
      <div className="Nav-link">
        <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      <div className="Nav-link">
        <a href="https://linkedin.com/in/timothy-j-kim" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <div className="Nav-link">
        <a href="https://github.com/timjwkim" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </animated.div>
  )
}

export default Nav;
