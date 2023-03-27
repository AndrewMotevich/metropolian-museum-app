import React from 'react';
type props = {
  reference: React.RefObject<HTMLInputElement>;
};

const MyInputCheckbox = ({ reference }: props) => {
  return (
    <label>
      Human:
      <input type="checkbox" ref={reference} />
    </label>
  );
};

export default MyInputCheckbox;
