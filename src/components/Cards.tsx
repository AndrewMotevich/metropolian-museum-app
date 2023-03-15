import React, { ReactNode } from 'react';
import MyCard from './UI/card/MyCard';

const Cards = () => {
  function getCards(): ReactNode {
    const cardsArray: ReactNode[] = [];
    for (let i = 0; i < 10; i += 1) {
      cardsArray.push(<MyCard key={i.toString()} cardId={i.toString()} />);
    }
    return cardsArray;
  }
  return <div className="flex-layout">{getCards()}</div>;
};

export default Cards;
