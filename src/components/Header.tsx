import React from 'react';
import '../App.css';
import MyNav from './UI/navigation/MyNav';

const Header = () => {
  return (
    <div className="myHeader">
      <h1>NFTs</h1>
      <MyNav />
    </div>
  );
};

export default Header;
