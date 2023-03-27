import MyInputWithHooks from '../components/UI/input-search/MyInput-useHooks';
import Cards from '../components/Cards';
import MyInput from '../components/UI/input-search/MyInput';
import React from 'react';

const MainPage = () => {
  return (
    <div>
      <MyInput query-name="search" type="search" placeholder="Search" />
      <MyInputWithHooks query-name="search2" type="search" placeholder="Search2" />
      <Cards />
    </div>
  );
};
export default MainPage;
