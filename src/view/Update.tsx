import React, { useState } from "react";
import { asyncGet, asyncPut, asyncDelete } from "../utils/fetch";
import { api } from "../enum/api";
import { Student } from "../interface/Student";
import { StudentInfo } from "../componets/StudentInfo";

export const Update: React.FC = () => {
  const [sid, setSid] = useState<string>("");  
  const [student, setStudent] = useState<Student | null>(null);  
  const [loading, setLoading] = useState<boolean>(false);  

  // Handle student search by ID
  const handleSearch = async () => {
    if (sid) {
      setLoading(true);
      try {
       
        const res = await asyncGet(`${api.findByID}?sid=${sid}`);
        
        if (res.code === 200 && res.body) {
          setStudent(res.body);  
        } else {
          alert("找不到學生！");
          setStudent(null);  
        }
      } catch (error) {
        console.error(error);
        alert("查詢學生資料時發生錯誤。");
      }
      setLoading(false);
    }
  };

  // Handle student data update
  const handleUpdate = async (updatedStudent: Student) => {
    if (!updatedStudent._id) return;  
    try {
      const res = await asyncPut(`${api.updateByID}/${updatedStudent._id}`, updatedStudent);
      if (res.code === 200) {
        alert("學生資料更新成功！");
        setStudent(res.body);  
      } else {
        alert("更新學生資料失敗！");
      }
    } catch (error) {
      console.error(error);
      alert("更新學生資料時發生錯誤。");
    }
  };

  // Handle student data deletion
  const handleDelete = async () => {
    if (student && student._id) {
      try {
        const res = await asyncDelete(`${api.deleteByID}/${student._id}`);
        if (res.code === 200) {
          alert("學生資料刪除成功！");
          setStudent(null); 
        } else {
          alert("刪除學生資料失敗！");
        }
      } catch (error) {
        console.error(error);
        alert("刪除學生資料時發生錯誤。");
      }
    }
  };

  return (
    <div className="container">
      <h2>更新學生資料</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="輸入學生ID (SID)"
          value={sid}
          onChange={(e) => setSid(e.target.value)}  
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "載入中..." : "搜尋"}
        </button>
      </div>
      {student ? (
        <StudentInfo
          {...student}
          submit={handleUpdate}
          deleteHandler={handleDelete}
          title="編輯學生資料"
          submitText="更新學生"
          canDelete={true}
          canEdit={true}
        />
      ) : (
        <p>尚未選擇學生。</p> 
      )}
    </div>
  );
};
