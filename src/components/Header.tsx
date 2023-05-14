import React from 'react';
import '../App.css';
import MyNav from './UI/navigation/MyNav';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <div className="myHeader">
      <h1 className="headerTitle">Page: {location.pathname.slice(1)}</h1>
      <MyNav />
    </div>
  );
};

export default Header;
