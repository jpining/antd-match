import React, { useState } from 'react';
import { MatchInput } from 'antd-match';

const MachSelectDemo = () => {
  const [inputVal, setInputVal] = useState<string>('ininds&lt;div&gt;');
  const onChange = (value: any) => {
    console.log('%c [ value ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', value);
    setInputVal(value);
  };
  return (
    <span>
      <MatchInput onChange={onChange} value={inputVal} />
    </span>
  );
};

export default MachSelectDemo;
