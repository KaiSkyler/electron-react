import asyncComponent from './../components/async/AsyncComponent';

const homeRouter = [
  {
    path: "/home", 
    component: asyncComponent(() => import("./../pages/home/index.js")),
    title: '首页',
  },
  {
    path: "/test", 
    component: asyncComponent(() => import("./../pages/home/test.js")),
    title: '首页-测试',
  },
];

export default homeRouter;
