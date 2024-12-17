import React from 'react';
import './Home.css'; // 可使用此檔案來儲存 CSS 樣式

function Home() {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <img
          src="https://via.placeholder.com/100"
          alt="User"
          className="profile-img"
        />
        <h2>賠管地頭蛇</h2>
        <ul>
          <li><a href="#">首頁</a></li>
          <li><a href="#">所有學生</a></li>
          <li><a href="#">新增學生</a></li>
          <li><a href="#">修改學生資訊</a></li>
        </ul>
        <div className="footer">StudentHub</div>
      </div>

      {/* Main content */}
      <div className="content">
        <h1>409820379 <span>^^</span></h1>
      </div>
    </div>
  );
}

export default Home;
