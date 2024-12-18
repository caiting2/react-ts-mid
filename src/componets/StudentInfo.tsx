import { useState } from "react";
import { Student } from "../interface/Student";
import React from 'react';

type Info = {
    onClick?: Function;
    canEdit?: boolean;
    submit?: (info: Student) => Promise<any>;
    title?: string;
    submitText?: string;
    canDelte?: boolean;
    deleteHandler?: Function;
};

export const StudentInfo: React.FC<Student & Info> = (student: Student & Info) => {

    const clickHandler = () => {
        if (student.onClick) {
            student.onClick();
        }
    };

    // 初始化 student 資料到 state
    const [info, setInfo] = useState<Student>({
        _id: student._id || "",
        userName: student.userName || "",
        sid: student.sid || "",
        name: student.name || "",
        department: student.department || "",
        grade: student.grade || "",
        class: student.class || "",
        email: student.email || "",
        absences: student.absences || 0
    });

    const submit = () => {
        if (student.submit) {
            student.submit(info); // 提交更新的資料
        }
    };

    return (
        <div className="studentEdit" key={info._id} onClick={clickHandler}>
            <div className="info">
                <h1>{student.title}</h1>
                <p>帳號:</p>
                <input
                    type="text"
                    value={info.userName}
                    onChange={(e) => {
                        setInfo((prevInfo) => ({ ...prevInfo, userName: e.target.value }));
                    }}
                />
            </div>
            <div className="info">
                <p>姓名:</p>
                <input
                    type="text"
                    value={info.name}
                    onChange={(e) => {
                        setInfo((prevInfo) => ({ ...prevInfo, name: e.target.value }));
                    }}
                />
            </div>
            <div className="info">
                <p>院系:</p>
                <input
                    type="text"
                    value={info.department}
                    onChange={(e) => {
                        setInfo((prevInfo) => ({ ...prevInfo, department: e.target.value }));
                    }}
                />
            </div>
            <div className="info">
                <p>年級:</p>
                <input
                    type="text"
                    value={info.grade}
                    onChange={(e) => {
                        setInfo((prevInfo) => ({ ...prevInfo, grade: e.target.value }));
                    }}
                />
            </div>
            <div className="info">
                <p>班級:</p>
                <input
                    type="text"
                    value={info.class}
                    onChange={(e) => {
                        setInfo((prevInfo) => ({ ...prevInfo, class: e.target.value }));
                    }}
                />
            </div>
            <div className="info">
                <p>Email:</p>
                <input
                    type="text"
                    value={info.email}
                    onChange={(e) => {
                        setInfo((prevInfo) => ({ ...prevInfo, email: e.target.value }));
                    }}
                />
            </div>
            <div className="info">
                <p>缺席次數:</p>
                <input
                    type="number"
                    value={info.absences || 0}
                    onChange={(e) => {
                        setInfo((prevInfo) => ({ ...prevInfo, absences: Number(e.target.value) }));
                    }}
                />
            </div>
            <div className="btn">
                <button className="submit" onClick={submit}>
                    {student.submitText || "確認新增"}
                </button>
            </div>
        </div>
    );
};
