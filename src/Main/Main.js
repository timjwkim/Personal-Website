import React from 'react';
import './Main.css';

const Main = () => {
  const [screen, setScreen] = React.useState('Home');

  const Home = () => {
    return (
      <div className="Main">
        <div className="Main-text">
          Originally from the NYC area, currently a senior studying computer science
          at the <b onClick={() => {setScreen('UM')}}>University of Michigan</b>, looking for a full-time job as
          a <b>Software Engineer</b>.
        </div>
        <div className="Main-sub">
          <div className="Main-sub-pres">
            Currently part-time at UofM ITS
          </div>
          <div className="Main-sub-prev">
            Most recently at Expedia Group
          </div>
        </div>
      </div>
    );
  }

  const Um = () => {
    return (
      <div className="Main">
        <div className="Main-text">
          University of Michigan
        </div>
        <div className="Main-sub">
          What i do <b onClick={() => {setScreen('Home')}}>back</b>
        </div>
      </div>
    );
  }

  const Umits = () => {
    return (
      <div className="Main">
        <div className="Main-text">
          University of Michigan ITS
        </div>
        <div className="Main-sub">
          What i do <b onClick={() => {setScreen('Home')}}>back</b>
        </div>
      </div>
    );
  }

  const Eg = () => {
    return (
      <div className="Main">
        <div className="Main-text">
          Expedia Group
        </div>
        <div className="Main-sub">
          What i do <b onClick={() => {setScreen('Home')}}>back</b>
        </div>
      </div>
    );
  }

  const Display = () => {
    if (screen === 'Home') {
      return Home();
    } else if (screen === 'UM') {
      return Um();
    } else if (screen === 'UMITS') {
      return Umits();
    } else if (screen === 'EG') {
      return Eg();
    }
  }

  return Display();
}

export default Main;
