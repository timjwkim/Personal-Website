import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import { BiHome, BiBookOpen, BiBox } from 'react-icons/bi';
import { GrLocation, GrDocumentText, GrLinkedin, GrGithub } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';

const App = () => {
  const [screen, setScreen] = React.useState('Home');

  const Display = () => {
    if (screen === 'Home') {
      return (<Home />);
    } else if (screen === 'Experience') {
      return (<Experience />);
    } else {
      return (<Projects />);
    }
  }

  return (
    <div className="App">
      <div className="Sidebar">
        <div className="Sidebar-profile">
          <div className="Sidebar-profile-img">
            <CgProfile />
          </div>
          <div className="Sidebar-profile-title">
            Timothy Kim
          </div>
          <div className="Sidebar-profile-desc">
            Aspiring Software Engineer
          </div>
          <div className="Sidebar-profile-location">
            <GrLocation />
            Ann Arbor, MI
          </div>
        </div>
        <div className="Sidebar-nav">
          <div className="Sidebar-nav-card"
            onClick={() => {setScreen((prev) => 'Home');}}>
            <div className="Sidebar-nav-card-icon"><BiHome /></div>
            <div className="Sidebar-nav-card-text">Home</div>
          </div>
          <div className="Sidebar-nav-card"
            onClick={() => {setScreen((prev) => 'Experience');}}>
            <div className="Sidebar-nav-card-icon"><BiBookOpen /></div>
            <div className="Sidebar-nav-card-text">Experience</div>
          </div>
          <div className="Sidebar-nav-card"
            onClick={() => {setScreen((prev) => 'Projects');}}>
            <div className="Sidebar-nav-card-icon"><BiBox /></div>
            <div className="Sidebar-nav-card-text">Projects</div>
          </div>
        </div>
        <div className="Sidebar-links">
          <div className="Sidebar-links-icon">
            <GrDocumentText />
            <span className="Sidebar-links-tooltip">Resume</span>
          </div>
          <div className="Sidebar-links-icon">
            <GrLinkedin />
            <span className="Sidebar-links-tooltip">LinkedIn</span>
          </div>
          <div className="Sidebar-links-icon">
            <GrGithub />
            <span className="Sidebar-links-tooltip">GitHub</span>
          </div>
        </div>
      </div>
      <div className="Main">
        {Display()}
      </div>
    </div>
  );
}

export default App;
