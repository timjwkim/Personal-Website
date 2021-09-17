import React from 'react';
import './Title.css';
import { ImLocation2 } from 'react-icons/im';
import { useSpring, animated } from 'react-spring';

const Title = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 600 });

  return (
    <animated.div style={props} className="Title">
      <div className="Title-header">
        <div className="Title-header-name">
          Timothy Kim
        </div>
        <div className="Title-header-icon">
          <ImLocation2 /> <b>Ann Arbor, MI</b>
        </div>
      </div>
      <div className="Title-sub">
        Software Engineer and Full-Stack Developer.
      </div>
    </animated.div>
  )
}

export default Title;
