import React from 'react';
import { useNavigate } from 'react-router-dom'; // 使用useNavigate钩子
import {
  getTest
} from './../../api/index'; // 导入api接口

function HomeIndex() {
  let navigate = useNavigate(); // 获取navigate对象

  const handleNavigation = () => {
    navigate('/test'); // 修改跳转路径为/home
  };

  const handleTest = async () => {
    const res = await getTest(); // 调用接口
    console.log(res); // 打印接口返回值
  };

  return (
    <>
      <div onClick={handleNavigation}>
        跳转到/test
      </div>
      <div onClick={handleTest}>
        请求test接口
      </div>
    </>
  );
}

export default HomeIndex; // 不再需要withRouter