import classes from './MyInput.module.css';
import { ChangeHandler, RefCallBack } from 'react-hook-form';
type props = {
  inputRef: RefCallBack;
  name: string;
  onChange: ChangeHandler;
  reference: React.RefObject<HTMLImageElement>;
};

import React from 'react';

const MyInputFile = ({ inputRef, name, onChange, reference }: props) => {
  const addImgHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgInput: HTMLInputElement = event.target as unknown as HTMLInputElement;
    const file = imgInput.files?.item(0);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      (reference.current as HTMLImageElement).src = reader.result as string;
      (reference.current as HTMLImageElement).className = 'img';
    };
    return;
  };

  return (
    <div className={classes.wrapper}>
      <p>
        <strong>Add image</strong>
      </p>
      <div className={classes.container}>
        <label className={classes.label} id="add-img-label" htmlFor="add-single-img">
          +
          <img ref={reference} className={classes.hide} alt="img" />
        </label>
        <input
          className={classes.input}
          type="file"
          id="add-single-img"
          accept="image/jpeg"
          ref={inputRef}
          name={name}
          onChange={(e) => {
            addImgHandler(e);
            onChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default MyInputFile;
