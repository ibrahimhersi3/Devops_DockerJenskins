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
          Computer Science master's graduate with 2 years of experience, actively pursuing opportunities in DevOps and Cloud Engineering. Specialized in Jenkins Pipeline Integration and Docker containerized Jenkins with GitHub, facilitating seamless deployments to platforms like Netlify. Demonstrated expertise is showcased through this portfolio website, providing an in-depth exploration of efficient CI/CD processes. For more details, refer to the above tab labeled "CI/CD Pipeline."
          </p>

          {/* Work Experience */}
          <h3>Work Experience</h3>
          
          <ul>
            {/* Inriver */}
            <li>
              <strong>Inriver</strong> <br />
                          Inriver, Stockholm, Sweden <br />
                          March 2021 – Present <br />
            ● Proficient in using .NET Framework and C# for debugging, particularly within the context of debugging inriver
            applications. Skilled in dissecting customer extension code, adapting it to my environment, and reproducing issues for
            precise troubleshooting using inriver Remoting API.<br />
            ● Robust skill set in querying and analyzing data in MSSQL. Proficient in creating scripts for extracting and evaluating
            specific data subsets, ensuring precise insights into database performance and resolving discrepancies. <br />
            ● Experienced in assessing REST API performance through Postman. Proficient in creating and conducting performance
            tests to guarantee optimal system responsiveness. <br />
            ● Able to use Grafana for monitoring databases, cloud services, application servers, and extensions, ensuring optimal
            performance, availability, and health of systems and applications.
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
