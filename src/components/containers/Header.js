import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>Accumedix, Inc</h2>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
