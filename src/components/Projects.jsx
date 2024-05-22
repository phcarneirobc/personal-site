import React from 'react';

// Importando logos das tecnologias
import LogoGo from '../assets/logo-go.svg';
import LogoGin from '../assets/logo-gin.svg';
import LogoMongoDB from '../assets/logo-mongo.svg';
import LogoReact from '../assets/logo-react.svg';
import LogoTailwindCSS from '../assets/logo-tailwindcss.svg';
import LogoJavaScript from '../assets/logo-js.png';
import LogoHTML from '../assets/logo-html.png';
import LogoCSS from '../assets/logo-css.png';
import LogoGitHub from '../assets/logo-github.svg'; // Importando a logo do GitHub

const technologyLogos = {
  Golang: LogoGo,
  Gin: LogoGin,
  MongoDB: LogoMongoDB,
  React: LogoReact,
  TailwindCSS: LogoTailwindCSS,
  JavaScript: LogoJavaScript,
  HTML: LogoHTML,
  CSS: LogoCSS,
};

const projects = [
  {
    title: 'E-Learning Back-End',
    details: [
      'Developed for a college project which simulates a e-learning platform similar to Udemy.',
      'I am responsible for the back-end development, including the API and the database. Still in development.',
    ],
    features: [
      'JWT Authentication and Authorization.',
      'Course Management and Enrollment.',
      'Course CRUD.',
    ],
    technologies: ['Golang', 'Gin', 'MongoDB'],
    repositoryLink: 'https://github.com/phcarneirobc/free-learn-backend',
  },
  {
    title: 'Landing Page',
    details: [
      'A simple landing page for a fictional company for studying styling and layout.',
    ],
    features: [
      'Beautiful and responsive layout.',
    ],
    technologies: ['React', 'TailwindCSS'],
    repositoryLink: 'https://github.com/phcarneirobc/virtualr-landingpage',
  },
  {
    title: 'E-Learning Front-End',
    details: [
      'That project is the front-end of the e-learning platform developed for by me and a colleague, that still in development.',
      'I am responsible for the layout, routes and the integration with the back-end.',
    ],
    features: [
      'User Login and Registration.',
      'Professor and Student Dashboard.',
      'Student Course Enrollment.',
    ],
    technologies: ['React', 'TailwindCSS'],
    repositoryLink: 'https://github.com/andersondev81/FreeLearn',
  },
  {
    title: 'GOportunities',
    details: [
      'A API that was made for a opportunity platform example.',
    ],
    features: [
      'Logger for requests.',
      'CRUD for opportunities.'
    ],
    technologies: ['Golang', 'Gin', 'MongoDB'],
    repositoryLink: 'https://github.com/phcarneirobc/free-learn-backend',
  },
  {
    title: 'Logic Calculator',
    details: [
      'A calculator that solves logic expressions.',
    ],
    features: [
      'Solver for propositional logic expressions.',
      'Solver for truth tables.',
      'Solver for predicate logic expressions.',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS'],
    repositoryLink: 'https://github.com/phcarneirobc/Calculadora-Logica',
  },
  {
    title: 'Maneki Neko Lottery',
    details: [
      'A simple lottery game with a Maneki Neko theme.',
      'Developed for a college project which the objective was create a lottery game using without any random of the own language.',
    ],
    features: [
      'Simple Login',
      'Lottery Game without random',
    ],
    technologies: ['JavaScript', 'HTML', 'CSS'],
    repositoryLink: 'https://github.com/phcarneirobc/ManekiNekoLottery',
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-800 p-6 mb-6 rounded-lg">
          <div className="flex  justify-between mb-2">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            {project.repositoryLink && (
              <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={LogoGitHub}
                  alt="GitHub logo"
                  className="w-8 h-8 inline"
                  title="View on GitHub"
                />
              </a>
            )}
          </div>
          
          {project.details && (
            <div className="mb-4">
              {project.details.map((detail, index) => (
                <p key={index} className="text-sm">{detail}</p>
              ))}
            </div>
          )}
          {project.features && (
            <ul className="list-disc list-inside">
              {project.features.map((feature, index) => (
                <li key={index} className="text-sm">{feature}</li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex space-x-4">
            {project.technologies.map((tech, index) => (
              <img
                key={index}
                src={technologyLogos[tech]}
                alt={`${tech} logo`}
                className="w-8 h-8"
                title={tech}
              />
            ))}
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default Projects;
