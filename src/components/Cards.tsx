import React, { ReactNode, Component } from 'react';
import MyCard from './UI/card/MyCard';

export default class Cards extends Component {
  getCards(): ReactNode {
    const cardsArray: ReactNode[] = [];
    for (let i = 0; i < 10; i += 1) {
      cardsArray.push(<MyCard key={i.toString()} cardId={i.toString()} />);
    }
    return cardsArray;
  }
  render() {
    return <div className="flex-layout">{this.getCards()}</div>;
  }
}
