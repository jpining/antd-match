/*
 * @Descripttion:
 * @version:
 * @LastEditors: jp
 * @Date: 2022-05-19 22:49:51
 * @LastEditTime: 2022-05-20 00:17:04
 */
import { defineConfig } from 'dumi';

const repo = 'antd-match';
const logo =
  'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png';

export default defineConfig({
  title: repo,
  favicon: logo,
  logo: logo,
  outputPath: 'docs',
  mode: 'site',
  // gitpage
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  hash: true,
  resolve: {
    // 配置 dumi 嗅探的文档目录
    includes: ['mdx'],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
    },
  },
  // more config: https://d.umijs.org/config
});
