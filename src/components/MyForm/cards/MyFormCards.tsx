import React from 'react';
import MyFormCard from '../../UI/form-card/MyFormCard';
import { formCard as elem } from '../MyFormTypes';
import classes from './MyFormCards.module.css';
type props = {
  cardsArray: elem[];
};

const MyFormCards = ({ cardsArray }: props) => {
  return (
    <div className={classes.myFormsCards}>
      {cardsArray.map((elem, index) => {
        return <MyFormCard key={index} elem={elem} index={index} />;
      })}
    </div>
  );
};

export default MyFormCards;
