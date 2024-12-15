// src/view/HomePage.tsx
import React from 'react';
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const handleButtonClick = (action: string) => {
    alert(`You clicked ${action} button`);
  };

  return (
    <div>
      <h1>首頁</h1>
      <div>
        <button onClick={() => handleButtonClick('新增')}> <Link to="/AddStudentPage" className="alert-link">新增</Link></button>
        <button onClick={() => handleButtonClick('刪除')}>刪除</button>
        <button onClick={() => handleButtonClick('更新')}>更新</button>
        <button onClick={() => handleButtonClick('查詢')}>查詢</button>
      </div>
    </div>
  );
};

export default HomePage;
