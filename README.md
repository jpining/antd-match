Ant Design 补充性组件库 demo

运行：

1. webpack5: `npm start`

2. vite2: `npm dev`

安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com)

```js
npm install antd-match
yarn add antd-match
```

### 特点

1.

### 适用场景

1.

```js

```

### 注意点

1. 大部分组件都在生产环境大量使用，个别组件建议不要使用（还在优化中）

## 组件列表

#### 基础组件

- Button (按钮)

### 数据录入

- MatchInput (输入框)
- MatchSelect (下拉选择)
- MatchRank (时间选择)

### 其他组件

### 工具函数

### 常量

### Hooks

### 按需加载

```js
  plugins: [
    [
      'import',
      {
        libraryName: 'antd-match',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
      },
    ],
  ],
```

2. 直接引用组件

```js
// 以Button组件为例
import Button from 'antd-match/es/Button';
```

### 参考

- [Ant Design](https://ant.design/)
- [Zarm](https://zarm.gitee.io/)
- [Vant](https://vant-contrib.gitee.io/vant/#/zh-CN/home)
- [Zent](https://youzan.github.io/zent/zh/guides/install)
- [Material UI](https://material-ui.com/zh/)
- [Welcome UI](https://www.welcome-ui.com/)
- [NutUI](https://nutui.jd.com/3x/#/)
- [Blueprint](https://blueprintjs.com/)
- [Bootstrap](https://getbootstrap.com/)

持续更新优化中...
