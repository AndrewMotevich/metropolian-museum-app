import React, { ChangeEvent, Fragment, useEffect } from 'react';
import classes from './MyInput.module.css';
import { addSavedQstring, addCurrentQstring } from '../../../redux/searchReducer';
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
type params = {
  type: string;
  placeholder: string;
  'query-name': string;
};

const MyInputWithHooks = (params: params) => {
  const savedValue = localStorage.getItem(`${params['query-name']}`) || 'Vincent';
  const currentQuery = useSelector((state: RootState) => state.search.currentValue);
  const dispatch = useDispatch();

  useEffect(() => {
    // initialize component
    dispatch(addCurrentQstring(savedValue));
    dispatch(addSavedQstring(savedValue));
  }, []);

  function onChange(e: ChangeEvent) {
    const newValue = (e.target as HTMLInputElement).value;
    dispatch(addCurrentQstring(newValue));
  }

  return (
    <Fragment>
      <input
        type={params.type}
        placeholder={params.placeholder}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            localStorage.setItem(`${params['query-name']}`, `${currentQuery}`);
            dispatch(addSavedQstring((e.target as HTMLInputElement).value));
          }
        }}
        onChange={(e: ChangeEvent) => onChange(e)}
        value={currentQuery}
        className={classes.myInput}
      />
      <p style={{ color: 'red' }}>
        Example of search: Statuette, Vincent Van Gogh, Paul Gauguin, Monk, The card player
      </p>
    </Fragment>
  );
};

export default MyInputWithHooks;
