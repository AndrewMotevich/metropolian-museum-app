import React from 'react';
type props = {
  reference: React.RefObject<HTMLInputElement>;
};

export const MyInputFile = ({ reference }: props) => {
  return (
    <label>
      <input type="file" ref={reference} />
    </label>
  );
};
