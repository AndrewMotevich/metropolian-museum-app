import React from 'react';
type props = {
  reference: React.RefObject<HTMLInputElement>;
};

const MyInputDate = ({ reference }: props) => {
  return (
    <label>
      <strong>Birthday:</strong>
      <input min="1900-01-01" max="2018-12-31" type="date" ref={reference} />
    </label>
  );
};

export default MyInputDate;
