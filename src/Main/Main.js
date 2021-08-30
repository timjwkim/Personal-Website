import React from 'react';
import './Main.css';
import { IoReturnDownBack } from 'react-icons/io5';

const Main = () => {
  const [screen, setScreen] = React.useState('Home');

  const Home = () => {
    return (
      <div className="Main">
        <div className="Main-text">
          Originally from the NYC area, currently a senior studying computer science
          at the <b className="Main-link" onClick={() => {setScreen('UM')}}>University of Michigan</b>,
          looking for a full-time job as a <b><i>Software Engineer</i></b>.
        </div>
        <div className="Main-sub">
          <div className="Main-sub-pres">
            Currently part-time at <b className="Main-link" onClick={() => {setScreen('UMITS')}}>UofM ITS</b>.
          </div>
          <div className="Main-sub-prev">
            Most recently at <b className="Main-link" onClick={() => {setScreen('EG')}}>Expedia Group</b>.
          </div>
        </div>
      </div>
    );
  }

  const Um = () => {
    return (
      <div className="Main">
        <div className="Main-text">
          <a href="https://umich.edu" target="_blank" rel="noreferrer">
            University of Michigan
          </a>
          <span> <i>(exp. graduation Dec. 2021)</i></span>
        </div>
        <div className="Main-sub">
          Relevant Coursework: Data Structures and Algorithms, Software
          Engineering, Web Systems, Mobile App Development for Entrepreneurs, User
          Interface Development, Introduction to Artificial Intelligence.
          <span> <IoReturnDownBack onClick={() => {setScreen('Home')}}/></span>
        </div>
      </div>
    );
  }

  const Umits = () => {
    return (
      <div className="Main">
        <div className="Main-text">
          <a href="https://its.umich.edu" target="_blank" rel="noreferrer">
            University of Michigan ITS
          </a>
          <span> <i>(Nov. 2019 - Present)</i></span>
        </div>
        <div className="Main-sub">
          Provide technical support to customers and perform maintenance to network
          devices and other technical equipment deployed at the university, troubleshooting
          any hardware and software problems.
          <span> <IoReturnDownBack onClick={() => {setScreen('Home')}}/></span>
        </div>
      </div>
    );
  }

  const Eg = () => {
    return (
      <div className="Main">
        <div className="Main-text">
          <a href="https://www.expediagroup.com/" target="_blank" rel="noreferrer">
            Expedia Group
          </a>
          <span> <i>(Summer 2021)</i></span>
        </div>
        <div className="Main-sub">
          Built the <b><i>Datahub Health Dashboard</i></b> using React, ES, and
          GraphQL and supported the Datahub team by handling feature implementation,
          UI design change, and minor bug fix tickets.
          <span> <IoReturnDownBack onClick={() => {setScreen('Home')}}/></span>
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
