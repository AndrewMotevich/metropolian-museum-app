import MyInputWithHooks from '../components/UI/input-search/MyInput-useHooks';
import Cards from '../components/Cards';
import React, { useState } from 'react';

const MainPage = () => {
  const [qString, setQString] = useState('Vincent');
  return (
    <div>
      <MyInputWithHooks
        query-name="search2"
        type="search"
        placeholder="Search"
        handler={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            setQString((e.target as HTMLInputElement).value);
          }
        }}
      />
      <Cards qString={qString} />
    </div>
  );
};
export default MainPage;
