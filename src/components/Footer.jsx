
import React from 'react';

import LogoGithub from '../assets/logo-github.svg';
import LogoLinkedin from '../assets/logo-linkedin.svg';
import LogoEmail from '../assets/logo-email.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 ">
      <div className="container mx-auto text-center">
        <p className="text-3xl">
          Need to contact me?
        </p>
        <div className="flex justify-center space-x-4 mt-4">
        <a href='https://github.com/phcarneirobc'><img  className='fill-green size-10' src={LogoGithub} alt="" /></a>
        <a href='https://www.linkedin.com/in/pedro-henrique-barroso-61440b229/'><img className="size-10" src={LogoLinkedin} alt="" /></a>
        <a href='mailto:phcarneiro@edu.unifor.br"'><img className="size-10" src={LogoEmail} alt="" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
