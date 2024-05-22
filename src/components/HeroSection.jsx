import React from 'react';

import LogoLinkedin from '../assets/logo-linkedin.svg'
import LogoGithub from '../assets/logo-github.svg';
import LogoGo from '../assets/logo-go.svg';
import LogoReact from '../assets/logo-react.svg';
import LogoJS from '../assets/logo-js.png';
import LogoTailwind from '../assets/logo-tailwindcss.svg';
import LogoMongo from '../assets/logo-mongo.svg';
function HeroSection() {
  return (
    <div className="hero-section flex flex-col items-center my-20  justify-center">
      <div className="title text-center">
        <h1 id="title-name" className="text-5xl font-bold">Pedro Henrique B.</h1>
        <h1 id="title-description" className="text-3xl">Software Developer</h1>
        
       
        <div className="text-black text-center mt-0.5 text-1xl">
      <p className="mb-2">
      I am studying Systems Analysis and Development (third semester) and currently doing an internship at <a href="https://klever.io/pt-br" className='text-purple-500'>Klever</a>.
      </p>
      <p className="mb-4">
        Here's a list of my langs & software<br />
        Do note the ones listed here are those I have used for more than 6 months.
      </p>
      
      
      <div className="flex justify-center items-center flex-wrap gap-4">
      <img src={LogoReact}  className="h-12" />
      <img src={LogoGo}  className="h-12" />
      <img src={LogoJS}  className="h-12" />
      <img src={LogoTailwind}  className="h-12" />
      <img src={LogoMongo}  className="h-12 w-13" />
  
      </div>
      
    </div>
    
      </div>
    </div>
  );
}

export default HeroSection;
