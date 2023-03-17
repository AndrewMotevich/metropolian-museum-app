import React from 'react';
import { Link } from 'react-router-dom';

const MyNav = () => {
  return (
    <div className="myNavigate">
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default MyNav;
