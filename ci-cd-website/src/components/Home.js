// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <div className="cv-container">
        {/* CV section */}
        <div id="cv" className="cv-item">
          <h3>Ibrahim Hersi</h3>
          <p>Ibrahim.hersi.2@gmail.com • +46 72-233 25 22</p>

          <h3>Summary Statement</h3>
          <p>
          I'm currently focused on advancing my career in IT operations, DevOps, and Cloud. This project ivolves it integrating Jenkins Pipelines and setting up Dockerized Jenkins environments connected to GitHub. These setups have been crucial in ensuring smooth deployments to platforms like Netlify. I've demonstrated my skills through practical projects, showcased on my portfolio website, where I discuss creating efficient CI/CD processes. For more details, please explore the "CI/CD Pipeline" section above.          </p>

          {/* Work Experience */}
          <h3>Work Experience</h3>
          
          <ul>
            {/* Inriver */}
            <li>
              <strong>Application Engineer</strong> <br />
                          Inriver, Stockholm, Sweden <br />
                          March 2022 – Present <br />
            ● Debugged inriver applications involved analyzing customer extension code, adapting it to testing environments, and pinpointing issues using the inriver Remoting API.<br />
            ● Identified and resolved system bugs, created dedicated branches, pull requests, and merged them into the main codebase for deployment, all while ensuring a smooth process within our CI/CD pipeline. <br />
            ● Conducted performance tests on REST APIs, measuring various metrics such as response times, latency, and error rates to evaluate the overall performance of the API. I used performance testing tools like Postman. <br />
            ● Used Grafana for monitoring databases, cloud services, application servers, and extensions, ensuring optimal performance, availability, and health of systems and applications. <br />
            ● facilitated customer migrations from their on-premises databases to our inriver IPMC cloud, transferring data directly on to the Microsoft Azure cloud infrastructure. <br />
            ● Queried and analyzed data in MSSQL to extract necessary information, and ensured consistency between application data and the database. <br />
            ● Created technical documentation, processes, and procedures to facilitate knowledge sharing and ensure compliance with  application requirements
                        </li><br />

            {/* Internship */}
            <li>
              <strong>Internship</strong> <br />
              qopla, Stockholm, Sweden <br />
              December 2019 - June 2020 <br />
              ● Estimating delivery times using Python and machine learning algorithms.
            </li>  <br />
              
            {/* Master's Thesis */}
            <li>
              <strong>Visualization & Prediction Tool for Urban Water Demand - Master Thesis</strong> <br />
              Uppsala University, Uppsala, Sweden <br />
              January 2019 - June 2019 <br />
              ● Master's thesis involved developing a machine-learning model to predict future water demand in Uppsala city.
              Implemented result visualization through an interactive map using Python, OpenStreetMap, Tensorflow, and Spyder.
            </li>  <br />

            {/* Collaborative Fenceless Robotics */}
            <li>
              <strong>Collaborative Fenceless Robotics - Internship</strong> <br />
              Ericsson, Stockholm, Sweden <br />
              September 2018 - January 2019 <br />
              ● Collaborated with Ericsson on a Reinforcement Learning project, training a robot, TurtleBot2, to autonomously navigate
              and perform tasks.
            </li>
          </ul>

          {/* Education */}
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

          {/* Skills */}
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
