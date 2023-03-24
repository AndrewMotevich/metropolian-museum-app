import React from 'react';
import { Link } from 'react-router-dom';

const MyNav = () => {
  return (
    <div className="myNavigate">
      <Link to="/main">Main</Link>
      <Link to="/about">About</Link>
      <Link to="/forms">Forms</Link>
    </div>
  );
};

export default MyNav;
