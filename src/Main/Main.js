import React from 'react';
import './Main.css';
import './Modal.css';
import { GrClose } from 'react-icons/gr';
import { useSpring, useTransition, animated } from 'react-spring';

const Main = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 800 });
  const [modal, setModal] = React.useState('');
  const transition = useTransition(!!modal, {
    from: { y: 25, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 25, opacity: 0 },
    delay: 100
  });

  const UmModal = (animate) => {
    return (
      <animated.div style={animate} className="Modal">
        <span className="Modal-close"><GrClose onClick={() => setModal('')}/></span>
        <div className="Modal-text">
          <a href="https://umich.edu" target="_blank" rel="noreferrer">
            University of Michigan
          </a>
        </div>
        <div className="Modal-class">
          <i>Bachelor's in CS (exp. graduation Dec. 2021)</i>
        </div>
        <div className="Modal-sub">
          Relevant Coursework: Data Structures and Algorithms, Software
          Engineering, Web Systems, Mobile App Development for Entrepreneurs, User
          Interface Development, Introduction to Artificial Intelligence, Digital
          Product Design.
        </div>
      </animated.div>
    );
  }

  const UmitsModal = (animate) => {
    return (
      <animated.div style={animate} className="Modal">
        <span className="Modal-close"><GrClose onClick={() => setModal('')}/></span>
        <div className="Modal-text">
          <a href="https://its.umich.edu" target="_blank" rel="noreferrer">
            University of Michigan ITS
          </a>
        </div>
        <div className="Modal-class">
          <i>Tech Consultant (Nov. 2019 - Present)</i>
        </div>
        <div className="Modal-sub">
          Provide technical support to customers and perform maintenance to network
          devices and other technical equipment deployed at the university, troubleshooting
          any hardware and software problems.
        </div>
      </animated.div>
    );
  }

  const EgModal = (animate) => {
    return (
      <animated.div style={animate} className="Modal">
        <span className="Modal-close"><GrClose onClick={() => setModal('')}/></span>
        <div className="Modal-text">
          <a href="https://www.expediagroup.com/" target="_blank" rel="noreferrer">
            Expedia Group
          </a>
        </div>
        <div className="Modal-class">
          <i>Software Development Engineer Intern (Summer 2021)</i>
        </div>
        <div className="Modal-sub">
          Built the <b><i>Datahub Health Dashboard</i></b> using React, Elasticsearch,
          and GraphQL and supported the Datahub team by handling feature implementation,
          UI design change, and minor bug fix tickets.
        </div>
      </animated.div>
    );
  }

  const ModalDisplay = (animate) => {
    if (modal === 'UM') {
      return UmModal(animate);
    } else if (modal === 'UMITS') {
      return UmitsModal(animate);
    } else if (modal === 'EG') {
      return EgModal(animate);
    }
  }

  return (
    <animated.div style={props} className="Main">
      <div className="Main-text">
        Originally from the NYC area, currently a senior studying computer science
        at the <b className="Main-link" onClick={() => setModal('UM')}>University of Michigan</b>,
        looking for a full-time job as a <b><i>Software Engineer</i></b>.
      </div>
      <div className="Main-sub">
        <div className="Main-sub-pres">
          Currently part-time at <b className="Main-link" onClick={() => setModal('UMITS')}>UofM ITS</b>.
        </div>
        <div className="Main-sub-prev">
          Most recently at <b className="Main-link" onClick={() => setModal('EG')}>Expedia Group</b>.
        </div>
      </div>
      <div className="Modal-display">
        {transition((animate, modal) => !!modal && ModalDisplay(animate))}
      </div>
    </animated.div>
  );
}

export default Main;
