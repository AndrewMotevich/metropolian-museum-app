import React from 'react';
type props = {
  reference: React.RefObject<HTMLInputElement>;
};

const MyInputRadio = ({ reference }: props) => {
  return (
    <div>
      Sex:
      <label>
        male
        <input type="radio" value="male" ref={reference} />
      </label>
      <label>
        female
        <input type="radio" value="female" ref={reference} />
      </label>
      <label>
        other
        <input type="radio" value="other" ref={reference} />
      </label>
    </div>
  );
};

export default MyInputRadio;
