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
        Originally from the NYC area, I am a current senior studying <b>Computer
        Science</b> at the <b>University of Michigan</b>. This past summer, I interned
        at <b>Expedia Group</b> as a software development engineer. I am a hard-working 
        team-player, eager to learn and currently in search of a full-time position
        as a <b>Software Engineer</b>.
      </div>
      <div className="Home-buttons">
        <button className="Email">Email Me!</button>
        <button className="Resume">View Resume</button>
      </div>
    </div>
  );
}

export default Home;
