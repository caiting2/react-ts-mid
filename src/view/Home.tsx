import React, { useState } from 'react';
import  App  from './App';  
import { Insert } from './Insert';  
import { Update } from './Update';  

import '../style/Home.css';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'insert' | 'update'>('students');


  const renderContent = () => {
    switch (activeTab) {
      case 'students':
        return <App />;
      case 'insert':
        return <Insert />;
      case 'update':
        return <Update />;
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      {/* 側邊欄 */}
      <div className="sidebar">
        <h2>學生管理系統</h2>
        <ul>
          <li>
            <button onClick={() => setActiveTab('students')}>所有學生</button>
          </li>
          <li>
            <button onClick={() => setActiveTab('insert')}>新增學生資料</button>
          </li>
          <li>
            <button onClick={() => setActiveTab('update')}>修改學生資料</button>
          </li>
        </ul>
      </div>

      {/* 內容區 */}
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
