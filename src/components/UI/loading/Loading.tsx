import React from 'react';
import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div className={classes.loadingWrapper}>
      <h2>Loading...</h2>
      <div className={classes.loading}></div>
    </div>
  );
};

export default Loading;
