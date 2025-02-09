**商城后台管理系统**
## 项目简介
这是一个基于 Vue 3 的商城后台管理系统，主要用于管理商城的商品、订单、用户等数据。项目采用现代化的前端技术栈，提供了丰富的功能和良好的用户体验。

## 技术栈
前端框架: Vue 3

状态管理: Pinia

UI 组件库: Element Plus

路由管理: Vue Router

数据可视化: ECharts

CSS 预处理器: Less

HTTP 请求库: Axios

Mock 数据: MockJS

## 项目结构

```javascript
src/
├── assets/              # 静态资源（图片、字体等）
├── components/          # 公共组件
├── router/              # 路由配置
├── store/               # Pinia 状态管理
├── views/               # 页面组件
├── styles/              # 全局样式（Less 文件）
├── utils/               # 工具函数
├── api/                 # API 请求封装
├── mock/                # Mock 数据
├── App.vue              # 根组件
└── main.js              # 项目入口文件
```

## 快速开始

# 1. 克隆项目
```bash
git clone https://github.com/你的用户名/你的项目名.git
cd 你的项目名
```
# 2. 安装依赖
```bash
npm install
```
# 3. 运行项目
```bash
npm run dev
```

## Mock 数据
项目使用 MockJS 模拟后端接口数据。Mock 数据文件位于 src/mock 目录下。你可以根据需要修改或添加 Mock 数据。

示例 Mock 数据
```javascript
import Mock from 'mockjs';

Mock.mock('/api/goods/list', 'get', {
  code: 200,
  data: [
    { id: 1, name: '商品1', price: 100 },
    { id: 2, name: '商品2', price: 200 },
  ],
});
```

## API 请求封装
项目使用 Axios 进行 HTTP 请求，API 请求封装在 src/api 目录下。

示例 API 请求
```javascript
import request from '@/utils/request';

export function getGoodsList(params) {
  return request({
    url: '/goods/list',
    method: 'get',
    params,
  });
}
```

## 状态管理
项目使用 Pinia 进行状态管理，Store 文件位于 src/store 目录下。

示例 Store
```javascript
import { defineStore } from 'pinia';

export const useGoodsStore = defineStore('goods', {
  state: () => ({
    goodsList: [],
  }),
  actions: {
    async fetchGoodsList() {
      const res = await getGoodsList();
      this.goodsList = res.data;
    },
  },
});
```

## 数据可视化
项目使用 ECharts 进行数据可视化，相关代码位于 src/views/dashboard 目录下。

示例 ECharts 图表
```javascript
import * as echarts from 'echarts';

const chart = echarts.init(document.getElementById('chart'));
chart.setOption({
  title: { text: '销售数据' },
  xAxis: { data: ['一月', '二月', '三月'] },
  yAxis: {},
  series: [{ name: '销量', type: 'bar', data: [100, 200, 300] }],
});
```

## 贡献指南
欢迎提交 Issue 或 Pull Request！请确保代码符合 ESLint 和 Prettier 规范。

## 许可证
本项目基于 MIT 许可证开源。

## 联系方式
邮箱: wajuejinajia@gmail.com

## 致谢
感谢 Vue 3、Element Plus、ECharts 等开源项目的支持。