import React, { ReactNode, Component } from 'react';
import MyCard from './UI/card/MyCard';

export default class Cards extends Component {
  getCards(): ReactNode {
    const cardsArray: ReactNode[] = [];
    for (let i = 0; i < 12; i += 1) {
      cardsArray.push(<MyCard key={(i + 1).toString()} cardId={(i + 1).toString()} />);
    }
    return cardsArray;
  }
  render() {
    return <div className="flex-layout">{this.getCards()}</div>;
  }
}
