import React from 'react';
type props = {
  reference: React.RefObject<HTMLInputElement>;
};

const MyInputDate = ({ reference }: props) => {
  return (
    <label>
      Birthday:
      <input type="date" ref={reference} />
    </label>
  );
};

export default MyInputDate;
