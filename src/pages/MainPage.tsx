import Cards from '../components/Cards';
import MyInput from '../components/UI/input/MyInput';
import React from 'react';

const MainPage = () => {
  return (
    <div>
      <MyInput query="search" type="search" placeholder="Search" />
      <Cards />
    </div>
  );
};

export default MainPage;
