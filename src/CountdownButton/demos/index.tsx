/*
 * @Descripttion:
 * @version:
 * @LastEditors: jp
 * @Date: 2022-05-19 19:04:31
 * @LastEditTime: 2022-05-31 21:20:28
 */
import React, { useState } from 'react';
// import { CountdownButton } from 'component-demo-tools';

function CountdownButtonDemo() {
  const [loading, setLoading] = useState<boolean>(false);

  const getCode = async () => {
    setLoading(true);
    try {
      return await new Promise((resolve) =>
        setTimeout(() => {
          resolve(123);
        }, 1000),
      );
    } catch (err) {
      throw new Error('failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <></>
    // <CountdownButton
    //   loading={loading}
    //   onClick={async (completeCallback) => {
    //     const code = await getCode();
    //     console.log(`验证码：${code}`);
    //     completeCallback();
    //   }}
    // >
    //   获取验证码
    // </CountdownButton>
  );
}

export default CountdownButtonDemo;
