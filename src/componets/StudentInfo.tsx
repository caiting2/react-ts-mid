import React, { useState } from "react";
import { Student } from "../interface/Student";

type InfoProps = {
  onClick?: () => void;
  canEdit?: boolean;
  submit?: (info: Student) => Promise<void>;
  deleteHandler?: () => void;
  title?: string;
  submitText?: string;
  canDelete?: boolean;
} & Partial<Student>;

export const StudentInfo: React.FC<InfoProps> = ({
  title = "學生資料",
  submitText = "確認新增",
  canEdit = true,
  canDelete = false,
  submit,
  deleteHandler,
  onClick,
  ...initialStudent
}) => {
  
  const [info, setInfo] = useState<Student>({
    _id: initialStudent._id || "",
    userName: initialStudent.userName || "",
    sid: initialStudent.sid || "",
    name: initialStudent.name || "",
    department: initialStudent.department || "",
    grade: initialStudent.grade || "",
    class: initialStudent.class || "",
    Email: initialStudent.Email || "",
    absences: initialStudent.absences || 0,
  });

  const handleChange = (field: keyof Student) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("Submit button clicked!"); 
    if (submit) {
      submit(info);
    }
  };

  const handleDelete = () => {
    if (deleteHandler) {
      deleteHandler();
      console.log("删除成功");
    }
  };

  const handleFormClick = (e: React.MouseEvent) => {
    if (onClick && e.target instanceof HTMLElement && !e.target.closest(".form")) {
      onClick();
    }
  };

  return (
    <div className="student-edit" onClick={handleFormClick}>
      <h2>{title}</h2>
      <div className="form">
        <div className="form-group">
          <label>帳號:</label>
          <input
            type="text"
            value={info.userName}
            onChange={handleChange("userName")}
            disabled={!canEdit}
          />
        </div>
        <div className="form-group">
          <label>姓名:</label>
          <input
            type="text"
            value={info.name}
            onChange={handleChange("name")}
            disabled={!canEdit}
          />
        </div>
        <div className="form-group">
          <label>院系:</label>
          <input
            type="text"
            value={info.department}
            onChange={handleChange("department")}
            disabled={!canEdit}
          />
        </div>
        <div className="form-group">
          <label>年級:</label>
          <input
            type="text"
            value={info.grade}
            onChange={handleChange("grade")}
            disabled={!canEdit}
          />
        </div>
        <div className="form-group">
          <label>班級:</label>
          <input
            type="text"
            value={info.class}
            onChange={handleChange("class")}
            disabled={!canEdit}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={info.Email}
            onChange={handleChange("Email")}
            disabled={!canEdit}
          />
        </div>
        <div className="form-group">
          <label>缺席次數:</label>
          <input
            type="number"
            value={info.absences}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, absences: Number(e.target.value) }))
            }
            disabled={!canEdit}
          />
        </div>
        <div className="button-group">
          {submit && (
            <button className="submit-btn" onClick={handleSubmit}>
              {submitText}
            </button>
          )}
          {canDelete && deleteHandler && (
            <button className="delete-btn" onClick={handleDelete}>
              刪除
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
