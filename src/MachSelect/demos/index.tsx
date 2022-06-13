import React, { FC, useState } from 'react';
import { MachSelect } from 'antd-match';
import { SelectValue } from 'antd/es/select';

const MachSelectDemo: FC = () => {
  const onChange = (value: SelectValue) => {
    console.log('%c [ value ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', value);
  };
  return (
    <MachSelect
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
      style={{ width: 240 }}
    />
  );
};

export default MachSelectDemo;
