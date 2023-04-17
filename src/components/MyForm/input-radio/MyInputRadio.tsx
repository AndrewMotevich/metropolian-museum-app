import React from 'react';
import { ChangeHandler, RefCallBack } from 'react-hook-form';

type props = {
  inputRef: RefCallBack;
  name: string;
  onChange: ChangeHandler;
};

const MyInputRadio = ({ inputRef, name, onChange }: props) => {
  return (
    <div>
      <strong>Gender:</strong>
      <br />
      <label style={{ marginRight: '10px' }}>
        <input type="radio" value="male" ref={inputRef} name={name} onChange={onChange} />
        male
      </label>
      <label style={{ marginRight: '10px' }}>
        <input type="radio" value="female" ref={inputRef} name={name} onChange={onChange} />
        female
      </label>
      <label>
        <input type="radio" value="other" ref={inputRef} name={name} onChange={onChange} />
        other
      </label>
    </div>
  );
};

export default MyInputRadio;
