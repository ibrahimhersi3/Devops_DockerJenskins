// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/ci-cd">CI/CD Pipeline</Link>
      <a href="https://github.com/ibrahimhersi3/Devops_DockerJenskins">GitHub</a>
    </nav>
  );
};

export default Navigation;
