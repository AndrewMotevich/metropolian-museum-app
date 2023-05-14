import React from 'react';
import { user as elem } from '../../../types';
import classes from './MyFormCard.module.css';
type props = {
  elem: elem;
  index: number;
};

const MyFormCard = ({ elem, index }: props) => {
  return (
    <div key={index} className={classes.myFormCard}>
      <img width="80px" className={classes.myFormCardImg} src={elem.img} alt="icon" />
      <div>Name: {elem.title}</div>
      <div>Bth date: {elem.bthDate.split('-').reverse().join('-')}</div>
      <div>Country: {elem.country}</div>
      <div>Human: {elem.allow ? 'Yes' : 'No'}</div>
      <div>Sex: {elem.sex}</div>
    </div>
  );
};

export default MyFormCard;
