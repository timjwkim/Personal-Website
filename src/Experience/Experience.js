import React from 'react';
import './Experience.css';
import { GrLocation } from 'react-icons/gr';

const Experience = () => {

  const createCard = (title, date, location, subtitle) => {
    return (
      <div className="Experience-card">
        <div className="Experience-card-title">
          {title}
        </div>
        <div className="Experience-card-date">
          {date}
        </div>
        <div className="Experience-card-location">
          <GrLocation />
          {location}
        </div>
        <div className="Experience-card-subtitle">
          {subtitle}
        </div>
      </div>
    );
  }

  return (
    <div className="Experience">
      <div className="Experience-education">
        <div className="Experience-title">
          Education
        </div>
        <div className="Experience-container">
          {createCard("University of Michigan",
                      "2018-2022",
                      "Ann Arbor, MI",
                      "B.S. Computer Science")}
        </div>
      </div>
      <div className="Experience-work">
        <div className="Experience-title">
          Work
        </div>
        <div className="Experience-container">
          {createCard("Expedia Group",
                      "Summer 2021",
                      "Austin, TX (Remote)",
                      "Software Development Engineer Intern")}
          {createCard("University of Michigan ITS",
                      "Nov 2019 - May 2021",
                      "Ann Arbor, MI",
                      "Tech Consultant")}
          {createCard("Richard Fleischman and Associates",
                      "Summer 2019",
                      "New York, NY",
                      "Client Development Intern")}
        </div>
      </div>
    </div>
  );
}

export default Experience;
