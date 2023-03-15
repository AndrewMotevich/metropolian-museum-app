import React, { Component } from 'react';
import classes from './MyCard.module.css';
type props = {
  key: string;
  [key: string]: string;
  cardId: string;
};

export default class MyCard extends Component<props> {
  public readonly cardId: string;
  // public readonly key: string;
  constructor(props: props) {
    super(props);
    this.cardId = props.cardId;
    // this.key = props.key;
  }
  render() {
    return <div className={classes.myCard}>MyCard #{this.cardId}</div>;
  }
}
