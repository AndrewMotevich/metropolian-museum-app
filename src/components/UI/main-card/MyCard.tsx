import React, { Component } from 'react';
import classes from './MyCard.module.css';
const horsBackImage =
  'https://cdnb.artstation.com/p/assets/images/images/049/818/407/large/sean-chi-1200px.jpg?1653401623';
type props = {
  key: string;
  [key: string]: string;
  cardId: string;
};

export default class MyCard extends Component<props> {
  public readonly cardId: string;
  public readonly cardImgUrl: string;
  constructor(props: props) {
    super(props);
    this.cardId = props.cardId;
    this.cardImgUrl = '../../../../public/assets/img/react.svg';
  }
  render() {
    return (
      <div className={classes.myCard}>
        <object
          style={{ position: 'absolute', zIndex: '-1', opacity: '0.3' }}
          width="100%"
          data={horsBackImage}
        />
        <div>MyCard #{this.cardId}</div>
        <img className={classes.nftImage} src={this.cardImgUrl} alt="nftImage" />
        <div className={classes.icons}>
          <img src="../../../../public/assets/img/Like.svg" alt="like" />
          <img src="../../../../public/assets/img/Bitcoin.svg" alt="bitcoin" />
        </div>
      </div>
    );
  }
}
