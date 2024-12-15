// src/view/AddStudentPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddStudentPage.css';

const AddStudentPage: React.FC = () => {
  const [student, setStudent] = useState({
    userName: '',
    sid: '',
    name: '',
    department: '',
    grade: '',
    class: '',
    email: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // 處理表單輸入
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 提交表單
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 假設提交成功後顯示成功消息並返回首頁
    setMessage('學生資料新增成功！');
    setTimeout(() => {
      navigate('/');
    }, 2000); // 2秒後跳回首頁
  };

  return (
    <div className="add-student-container">
      <h1>新增學生資料</h1>
      {message && <p className="success-message">{message}</p>}
      
      <form onSubmit={handleSubmit} className="add-student-form">
        <div className="form-group">
          <label htmlFor="userName">帳號:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={student.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sid">座號:</label>
          <input
            type="text"
            id="sid"
            name="sid"
            value={student.sid}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">姓名:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">院系:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={student.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">年級:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={student.grade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="class">班級:</label>
          <input
            type="text"
            id="class"
            name="class"
            value={student.class}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">提交</button>
      </form>
    </div>
  );
};

export default AddStudentPage;
