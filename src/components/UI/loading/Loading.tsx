import React from 'react';
import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div>
      Loading...
      <div className={classes.loading}></div>
    </div>
  );
};

export default Loading;
