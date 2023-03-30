// import React, { Component } from 'react';
import classes from './MyInput.module.css';
type props = {
  getImg(value: string): void;
  reference: React.RefObject<HTMLImageElement>;
};

import React, { useRef } from 'react';

const MyInputFile = (properties: props) => {
  const inputIMG = useRef(null);
  let imgSrc = '';
  const props = properties;
  const reference = props.reference;

  const addImgHandler = () => {
    const imgInputHelper: HTMLInputElement = inputIMG.current as unknown as HTMLInputElement;
    const file = imgInputHelper.files?.item(0);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      imgSrc = reader.result as string;
      //add img in input
      (reference.current as HTMLImageElement).src = imgSrc as string;
      (reference.current as HTMLImageElement).className = classes.img;
      //pass src to parrent
      props.getImg(imgSrc as string);
    };
    imgInputHelper.value = '';
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
          <img ref={reference} className={classes.hide} src="" alt="img" />
        </label>
        <input
          ref={inputIMG}
          className={classes.input}
          type="file"
          id="add-single-img"
          accept="image/jpeg"
          onChange={addImgHandler}
        />
      </div>
    </div>
  );
};

export default MyInputFile;
