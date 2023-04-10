import React, { Component } from 'react';
import classes from './MyCard.module.css';
import { painting } from 'types';

type props = {
  key: number;
  elem: painting;
  onClickHandler: (elem: painting) => void;
  modal: (visible: boolean) => void;
};

export default class MyCard extends Component<props> {
  public readonly elem: painting;
  constructor(props: props) {
    super(props);
    this.elem = props.elem;
  }
  render() {
    return (
      <div
        className={classes.myCard}
        onClick={() => {
          this.props.modal(true);
          this.props.onClickHandler(this.elem);
        }}
      >
        <div
          style={{
            backgroundImage: `url(${this.elem.primaryImageSmall})`,
          }}
          className={classes.myCardImage}
        >
          <div className={classes.myCardTitle}>{this.elem.title}</div>
        </div>
      </div>
    );
  }
}
