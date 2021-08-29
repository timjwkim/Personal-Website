import React from 'react';
import './Title.css';
import { ImLocation2 } from 'react-icons/im';

const Title = () => {
  return (
    <div className="Title">
      <div className="Title-header">
        <div className="Title-header-name">
          <b>Timothy Kim</b>
        </div>
        <div className="Title-header-icon">
          <ImLocation2 /> Ann Arbor, MI
        </div>
      </div>
      <div className="Title-sub">
        Aspiring Software Engineer and Full-Stack Developer
      </div>
    </div>
  )
}

export default Title;
