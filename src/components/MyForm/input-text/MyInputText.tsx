import React from 'react';
type props = {
  reference: React.RefObject<HTMLInputElement>;
};

const MyInputText = ({ reference }: props) => {
  return (
    <label>
      <strong>Name:</strong>
      <input type="text" ref={reference} />
    </label>
  );
};

export default MyInputText;
