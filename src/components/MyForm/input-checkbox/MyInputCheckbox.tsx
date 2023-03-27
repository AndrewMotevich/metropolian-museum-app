import React from 'react';
type props = {
  reference: React.RefObject<HTMLInputElement>;
};

const MyInputCheckbox = ({ reference }: props) => {
  return (
    <label style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <strong>Human check: </strong>
      <input style={{ width: '40px' }} type="checkbox" ref={reference} />
    </label>
  );
};

export default MyInputCheckbox;
