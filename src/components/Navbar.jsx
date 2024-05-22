import React from 'react';

function Navbar() {
  return (
    <div className="flex justify-center space-x-4 py-4 bg-gray-100">
      <a href="#home" className="home">HOME</a>
      <a href="#projects"  onClick={() => window.scrollTo({ top: 450, behavior: "smooth" })} className="home" >PROJECTS</a>
      <a href="#projects"  onClick={() => window.scrollTo({ top: 2000, behavior: "smooth" })} className="home" >CONTACT</a>
    </div>
  );
}

export default Navbar;
