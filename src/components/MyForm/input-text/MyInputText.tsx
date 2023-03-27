import React from 'react';
type props = {
  reference: React.RefObject<HTMLInputElement>;
};

const MyInputText = ({ reference }: props) => {
  return (
    <label>
      Name:
      <input type="text" ref={reference} />
    </label>
  );
};

export default MyInputText;
