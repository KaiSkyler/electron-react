import React from 'react';
import { useNavigate } from 'react-router-dom'; // 使用useNavigate钩子

function HomeTest() {
  let navigate = useNavigate(); // 获取navigate对象

  const handleNavigation = () => {
    navigate('/home'); // 修改跳转路径为/home
  };

  return (
    <div onClick={handleNavigation}>
      跳转到/home
    </div>
  );
}

export default HomeTest; // 不再需要withRouter