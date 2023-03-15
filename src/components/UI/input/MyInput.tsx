import React, { ChangeEvent, useEffect, useState } from 'react';
import classes from './MyInput.module.css';
type params = {
  [key: string]: string;
  query: string;
};
const MyInput = (params: params) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem(`${params.query}`) || '';
    setValue(savedValue);
    // unmount component
    return () => {
      localStorage.setItem(`${params.query}`, `${value}`);
    };
  }, []);

  function onChange(e: ChangeEvent) {
    const newValue = (e.target as HTMLInputElement).value;
    setValue(newValue);
    console.log(value);
  }

  return (
    <input
      {...params}
      onChange={(e: ChangeEvent) => onChange(e)}
      value={value}
      className={classes.myInput}
    />
  );
};

export default MyInput;
