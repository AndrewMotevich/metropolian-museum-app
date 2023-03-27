import React from 'react';
import MyFormCard from '../../UI/form-card/MyFormCard';
import { formCard as elem } from '../MyFormTypes';
type props = {
  cardsArray: elem[];
};

const MyFormCards = ({ cardsArray }: props) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '20px' }}>
      {cardsArray.map((elem, index) => {
        return <MyFormCard key={index} elem={elem} index={index} />;
      })}
    </div>
  );
};

export default MyFormCards;
