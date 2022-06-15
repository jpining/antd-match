import React, { useState } from 'react';
import { MatchRangePicker } from 'antd-match';

const MachSelectDemo = () => {
  const [checkValue, setCheckValue] = useState<string[]>();
  const onChange = (value: string[]) => {
    console.log('%c [ value ]-7', 'font-size:13px; background:pink; color:#bf2c9f;', value);
    setCheckValue(value);
  };
  return (
    <div>
      <h3>
        开始时间：<span>{checkValue?.[0]}</span>
      </h3>
      <h3>
        结束时间：<span>{checkValue?.[1]}</span>
      </h3>
      <MatchRangePicker
        onChange={onChange}
        changeValueformat="yyyy-MM-DD"
        locale="zh-cn"
        value={checkValue}
      />
    </div>
  );
};

export default MachSelectDemo;
