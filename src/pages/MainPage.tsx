import MyInputWithHooks from '../components/UI/input-search/MyInput-useHooks';
import Cards from '../components/Cards';
import React from 'react';

const MainPage = () => {
  return (
    <div>
      <MyInputWithHooks query-name="search2" type="search" placeholder="Search2" />
      <Cards />
    </div>
  );
};
export default MainPage;
