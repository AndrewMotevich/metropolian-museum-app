import React from 'react';
import { ChangeHandler, RefCallBack } from 'react-hook-form';
type props = {
  inputRef: RefCallBack;
  name: string;
  onChange: ChangeHandler;
};

const MyInputDate = ({ inputRef, name, onChange }: props) => {
  return (
    <label>
      <strong>Birthday:</strong>
      <input
        min="1900-01-01"
        max="2018-12-31"
        type="date"
        ref={inputRef}
        name={name}
        onChange={onChange}
      />
    </label>
  );
};

export default MyInputDate;
