---
title: 快速开始
order: 2
group:
  path: /
nav:
  title: 文档
  path: /docs
---

## AntdMatch

AntdMatch 是基于 Ant Design 而开发的模板组件，提供了更高级别的抽象支持，开箱即用。

- [MatchInput](/components/input/match-input) 解决空格输入，xss 攻击字符替换，提供配置特殊字符去除

在使用之前可以查看一下典型的 Demo 来判断组件是否适合你们的业务。

## 安装

当前 AntdMatch 你需要在你的项目中安装对应的 npm 包并使用。

```shell
$ npm i antd-match --save
```

## 在项目中使用

每一个包都是一个独立的组件包，使用示例如下 ：

```ts
import { MatchInput } from 'antd-match';

export default () => {
  return <MatchInput />;
};
```
