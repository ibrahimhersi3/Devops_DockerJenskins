// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <div className="cv-container">
        <div id="cv" className="cv-item">
          <h3>Ibrahim Hersi</h3>
          <p>Ibrahim.hersi.2@gmail.com • +46 72-233 25 22</p>

          <h3>Summary Statement</h3>
          <p>
            Computer Science master's grad with 2 years of experience in application support, programming in C#,
            and database management systems. Eager to transition to a software developer role, bringing strong
            troubleshooting skills and a solid software development foundation.
          </p>

          <h3>Work Experience</h3>
          <ul>
            <li>
              <strong>Inriver</strong> <br />
              Inriver, Stockholm, Sweden <br />
              March 2021 – Present <br />
              - Proficient in using .NET Framework and C# for debugging, particularly within the context of debugging inriver
              applications...
            </li>

            <li>
              <strong>Internship</strong> <br />
              qopla, Stockholm, Sweden <br />
              December 2019 - June 2020 <br />
              - Estimating delivery times using Python and machine learning algorithms...
            </li>

            <li>
              <strong>Visualization & Prediction Tool for Urban Water Demand - Master Thesis</strong> <br />
              Uppsala University, Uppsala, Sweden <br />
              January 2019 - June 2019 <br />
              - Master's thesis involved developing a machine-learning model to predict future water demand in Uppsala city.
              Implemented result visualization through an interactive map using Python, OpenStreetMap, Tensorflow, and Spyder...
            </li>

            <li>
              <strong>Collaborative Fenceless Robotics - Internship</strong> <br />
              Ericsson, Stockholm, Sweden <br />
              September 2018 - January 2019 <br />
              - Collaborated with Ericsson on a Reinforcement Learning project, training a robot, TurtleBot2, to autonomously navigate
              and perform tasks...
            </li>
          </ul>

          <h3>Education</h3>
          <p>
            <strong>Master's Degree in Computer Science</strong> <br />
            Uppsala University <br />
            2017 - 2019
          </p>

          <p>
            <strong>Bachelor's Degree in Software Engineering</strong> <br />
            Infrastructure University of Kuala Lumpur <br />
            2013 - 2016
          </p>

          <h3>Skills</h3>
          <p>
            <strong>Programming:</strong> C# .Net, Python, Javascript, HTML, CSS <br />
            <strong>Miscellaneous:</strong> Azure, Postman, MSSQL, Docker, Tensorflow, ROS (Robot Operating System)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
