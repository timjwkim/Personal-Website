import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';

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
          This is my profile
        </div>
        <div className="Sidebar-nav">
          <div className="Sidebar-nav-card"
            onClick={() => {setScreen((prev) => 'Home');}}>
            Home
          </div>
          <div className="Sidebar-nav-card"
            onClick={() => {setScreen((prev) => 'Experience');}}>
            Experience
          </div>
          <div className="Sidebar-nav-card"
            onClick={() => {setScreen((prev) => 'Projects');}}>
            Projects
          </div>
        </div>
        <div className="Sidebar-links">
          Here are some links
        </div>
      </div>
      <div className="Main">
        {Display()}
      </div>
    </div>
  );
}

export default App;
