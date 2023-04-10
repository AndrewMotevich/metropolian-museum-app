import React from 'react';
type elem = {
  title: string;
  bthDate: string;
  country: string;
  img: string;
  allow: boolean;
  sex: string;
};
type props = {
  elem: elem;
  index: number;
};

const MyFormCard = ({ elem, index }: props) => {
  return (
    <div
      key={index}
      style={{
        width: '200px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        background: '#121212',
        borderRadius: '5px',
      }}
    >
      <img
        width="80px"
        style={{ borderRadius: '5px', height: '80px', width: '80px', objectFit: 'cover' }}
        src={elem.img}
        alt="icon"
      />
      <div>Name: {elem.title}</div>
      <div>Bth date: {elem.bthDate.split('-').reverse().join('-')}</div>
      <div>Country: {elem.country}</div>
      <div>Human: {elem.allow ? 'Yes' : 'No'}</div>
      <div>Sex: {elem.sex}</div>
    </div>
  );
};

export default MyFormCard;
