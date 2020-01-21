import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/">Labels</Link></li>
        <li><Link to="/edit">Edit</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
