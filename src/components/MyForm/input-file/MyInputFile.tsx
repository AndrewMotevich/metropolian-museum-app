import React, { Component } from 'react';
import classes from './MyInput.module.css';
type props = {
  getImg(value: string): void;
};

export default class MyInputFile extends Component<props> {
  inputIMG: React.RefObject<HTMLInputElement>;
  imgRef: React.RefObject<HTMLImageElement>;
  imgSrc: string | ArrayBuffer | null;
  props: props;

  constructor(props: props) {
    super(props);
    this.inputIMG = React.createRef();
    this.imgRef = React.createRef();
    this.imgSrc = '';
    this.props = props;
  }

  addImgHandler = () => {
    const imgInputHelper = this.inputIMG.current as HTMLInputElement;
    const file = imgInputHelper.files?.item(0);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgSrc = reader.result;
      //add img in input
      (this.imgRef.current as HTMLImageElement).src = this.imgSrc as string;
      (this.imgRef.current as HTMLImageElement).className = classes.img;
      //pass src to parrent
      this.props.getImg(this.imgSrc as string);
    };
    imgInputHelper.value = '';
    return;
  };

  render(): React.ReactNode {
    return (
      <div className={classes.wrapper}>
        <p>
          <strong>Add image</strong>
        </p>
        <div className={classes.container}>
          <label className={classes.label} id="add-img-label" htmlFor="add-single-img">
            +
            <img ref={this.imgRef} className={classes.hide} src="" alt="img" />
          </label>
          <input
            ref={this.inputIMG}
            className={classes.input}
            type="file"
            id="add-single-img"
            accept="image/jpeg"
            onChange={this.addImgHandler}
          />
        </div>
      </div>
    );
  }
}
