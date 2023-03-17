import React, { ChangeEvent, useEffect, useState } from 'react';
import classes from './MyInput.module.css';
type params = {
  [key: string]: string;
  'query-name': string;
};

const MyInputWithHooks = (params: params) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    // initialize component
    const savedValue = localStorage.getItem(`${params['query-name']}`) || '';
    setValue(savedValue);
    // unmount component
    return () => {
      localStorage.setItem(`${params['query-name']}`, `${value}`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default MyInputWithHooks;
