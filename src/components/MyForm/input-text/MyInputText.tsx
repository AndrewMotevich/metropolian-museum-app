import React from 'react';
type props = {
  reference: React.RefObject<HTMLInputElement>;
};

const MyInputText = ({ reference }: props) => {
  return (
    <label>
      <strong>Name:</strong>
      <input minLength={3} type="text" ref={reference} />
    </label>
  );
};

export default MyInputText;
