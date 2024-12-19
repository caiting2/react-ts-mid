import React, { useState } from "react";
import { StudentInfo } from "../componets/StudentInfo";
import { Student } from "../interface/Student";
import { api } from "../enum/api";
import { resp } from "../interface/resp";
import { asyncPost } from "../utils/fetch";


export const Insert: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const initInfo: Student = {
    _id: "",
    userName: "",
    sid: "",
    name: "",
    department: "",
    grade: "",
    class: "",
    Email: "",
    absences: 0,  
  };

  const submitHandler = async (info: Student) => {
    setLoading(true);  
    try {
      console.log("Sending request...", info);  
      const res: resp<Student> = await asyncPost(api.insertOne, info);
      console.log(res); 
      if (res.code === 200) {
        alert(res.message);
      } else {
        alert(`新增失敗: ${res.message}`);
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("網絡錯誤，請稍後再試");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="container">
      <StudentInfo
        title="新增學生"
        submitText={loading ? "正在新增..." : "確認新增"}  
        canEdit={true}
        submit={submitHandler}
        {...initInfo}
      />
    </div>
  );
};
