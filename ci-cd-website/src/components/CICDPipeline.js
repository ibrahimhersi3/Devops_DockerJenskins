// src/components/CICDPipeline.js
import React from 'react';

const CICDPipeline = () => {
  return (
    <section id="ci-cd" className="ci-cd-section">
      <div className="ci-cd-container">
        <h3 className="ci-cd-heading">Jenkins Pipeline Integration</h3>
        <p className="ci-cd-description">
          This website is integrated with a Jenkins pipeline, a powerful automation tool often used for building, testing, and deploying software.
          The Jenkins pipeline is configured to manage the continuous integration and continuous deployment (CI/CD) processes of your project.
        </p>
        <h3 className="ci-cd-heading">Jenkins in Docker Container</h3>
        <p className="ci-cd-description">
          Jenkins, with the Node.js plugin installed, is running within a Docker container. Docker allows for containerized applications, ensuring consistency across different environments.
          Running Jenkins in a Docker container provides portability, scalability, and isolation of dependencies.
        </p>
        <h3 className="ci-cd-heading">GitHub Repository Connection</h3>
        <p className="ci-cd-description">
          Jenkins is connected to my GitHub repository. This connection enables Jenkins to monitor changes in the repository and trigger automated build and deployment processes in response to code changes.
        </p>
        <h3 className="ci-cd-heading">Netlify Deployment</h3>
        <p className="ci-cd-description">
          The final step of the Jenkins pipeline involves deploying the application to Netlify. Netlify is a platform that simplifies the process of hosting, deploying, and automating modern web projects.
          The changes pushed to the GitHub repository trigger the Jenkins pipeline, and upon successful completion, the application is deployed to Netlify.
        </p>
      </div>
    </section>
  );
};

export default CICDPipeline;
