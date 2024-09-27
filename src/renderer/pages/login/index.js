import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginIndex() {
  let navigate = useNavigate();

  const handleLogin = () => {
    // 登录成功后的跳转逻辑
    navigate('/home');
  };

  return (
    <div>
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}

export default LoginIndex;
