import asyncComponent from './../components/async/AsyncComponent';

const loginRouter = [
  {
    path: "/login", 
    component: asyncComponent(() => import("./../pages/login/index.js")),
    title: '登录',
  },
];

export default loginRouter;
