import React from 'react';
import { ChangeHandler, RefCallBack } from 'react-hook-form';

type props = {
  inputRef: RefCallBack;
  name: string;
  onChange: ChangeHandler;
};

const MyInputCountry = ({ inputRef, name, onChange }: props) => {
  return (
    <label>
      <strong>Country:</strong>
      <select ref={inputRef} name={name} onChange={onChange}>
        <option>Belarus</option>
        <option>Russia</option>
        <option>Poland</option>
        <option>German</option>
      </select>
    </label>
  );
};

export default MyInputCountry;
