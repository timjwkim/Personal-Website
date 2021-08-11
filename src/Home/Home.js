import React from 'react';
import './Home.css';

const Home = () => {

  return (
    <div className="Home">
      <div className="Home-intro">
        Hello!
      </div>
      <div className="Home-title">
        I'm Tim.
      </div>
      <div className="Home-text">
        Originally from the NYC area, I am a current senior studying Computer Science
        at the University of Michigan. This past summer, I interned at Expedia Group
        as a software development engineer. I am a hard-working team-player, eager
        to learn and currently in search of a full-time position as a Software Engineer.
      </div>
      <div className="Home-buttons">
        <button>Email Me!</button>
        <button>View Resume</button>
      </div>
    </div>
  );
}

export default Home;
