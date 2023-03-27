import React from 'react';
type props = {
  reference: React.RefObject<HTMLSelectElement>;
};

const MyInputCountry = ({ reference }: props) => {
  return (
    <label>
      Country:
      <select ref={reference}>
        <option>Belarus</option>
        <option>Russia</option>
        <option>Poland</option>
        <option>German</option>
      </select>
    </label>
  );
};

export default MyInputCountry;
