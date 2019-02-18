import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>My Portfolio</h1>
      <Link to="/">Home</Link> | <Link to="/resume">Resume</Link> | <Link to="/aboutme">About Me</Link> | <Link to="/projectlist">Project List</Link>
    </div>
  );
}

export default Header;