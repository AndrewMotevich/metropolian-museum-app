import React from 'react';
import { ChangeHandler, RefCallBack } from 'react-hook-form';

type props = {
  inputRef: RefCallBack;
  name: string;
  onChange: ChangeHandler;
};

const MyInputCheckbox = ({ inputRef, name, onChange }: props) => {
  return (
    <label style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <strong>Human check: </strong>
      <input
        style={{ width: '40px' }}
        type="checkbox"
        ref={inputRef}
        name={name}
        onChange={onChange}
      />
    </label>
  );
};

export default MyInputCheckbox;
