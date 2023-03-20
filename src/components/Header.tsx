import React from 'react';
import '../App.css';
import MyNav from './UI/navigation/MyNav';
type props = {
  [key: string]: string;
  page: string;
};

const Header = (props: props) => {
  return (
    <div className="myHeader">
      <h1>Page: {props.page}</h1>
      <MyNav />
    </div>
  );
};

export default Header;
