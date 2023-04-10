import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import classes from './MyInput.module.css';
type params = {
  type: string;
  placeholder: string;
  handler: (event: React.KeyboardEvent<HTMLInputElement>) => void;
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
  }, []);

  function onChange(e: ChangeEvent) {
    const newValue = (e.target as HTMLInputElement).value;
    setValue(newValue);
  }

  return (
    <Fragment>
      <input
        type={params.type}
        placeholder={params.placeholder}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          params.handler(e);
          localStorage.setItem(`${params['query-name']}`, `${value}`);
        }}
        onChange={(e: ChangeEvent) => onChange(e)}
        value={value}
        className={classes.myInput}
      />
      <p style={{ color: 'red' }}>
        Example of search: Statuette, Vincent Van Gogh, Paul Gauguin, Monk, The card player
      </p>
    </Fragment>
  );
};

export default MyInputWithHooks;
