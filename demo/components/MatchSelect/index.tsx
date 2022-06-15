import React from 'react';
import { MatchSelect } from 'antd-match';
import { SelectValue } from 'antd/es/select';

const MachSelectDemo = () => {
  const onChange = (value: SelectValue) => {
    console.log('%c [ value ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', value);
  };
  return (
    <span>
      <MatchSelect
        renderArr={[
          {
            name: '张三',
            value: 'zhangsan',
          },
          {
            name: <span>李四</span>,
            value: 'lisi',
          },
        ]}
        defaultValue="zhangsan"
        onChange={onChange}
        // style={{ width: 240 }}
      />
    </span>
  );
};

export default MachSelectDemo;
