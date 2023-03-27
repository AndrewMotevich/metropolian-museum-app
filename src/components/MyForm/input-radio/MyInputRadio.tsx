import React from 'react';
type props = {
  getSex(value: string): void;
};

const MyInputRadio = ({ getSex }: props) => {
  let value = '';
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    value = (e.target as HTMLInputElement).value;
    getSex(value);
    console.log(value);
  };
  return (
    <div>
      <strong>Sex:</strong>
      <br />
      <label style={{ marginRight: '10px' }}>
        <input name="sex" type="radio" value="male" onChange={changeValue} />
        male
      </label>
      <label style={{ marginRight: '10px' }}>
        <input name="sex" type="radio" value="female" onChange={changeValue} />
        female
      </label>
      <label>
        <input name="sex" type="radio" value="other" onChange={changeValue} />
        other
      </label>
    </div>
  );
};

export default MyInputRadio;
