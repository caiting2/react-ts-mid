import { useState} from "react"
import { Student} from "../interface/Student"

type info ={
    onClick?: Function
    canEdit?: boolean
    submit?: (info:Student) => Promise<any>
    title?: string,
    submitText?: string,
    canDelte?: boolean,
    deleteHandler?: Function, 
}

export const StudentInfo: React.FC<Student & info> =(Student: Student& info) =>{

    const clickHandler = () =>{
        if (Student.onClick){
            Student.onClick()
        }
    }

    if(Student.canEdit){

        const  [info, setInfo]= useState<Student>(Student)

        const submit = () =>{
            if(Student.submit){
                Student.submit(info)
            }
        }

        return (
            <div className='studentEdit' key={info._id} onClick={clickHandler}>
                <div className="info">
                    <h1>{Student.title}</h1>
                    <p>帳號:</p>
                    <input type="text" value={info.userName} onChange={
                        (e) => {
                            const temp = {...info}
                            temp.userName = e.target.value
                            setInfo(temp);
                        }
                    }/>
                </div>
                <div className="info">
                    <p>姓名:</p>
                    <input type="text" value={info.name} onChange={
                        (e) => {
                            const temp = {...info}
                            temp.name = e.target.value
                            setInfo(temp);
                        }
                    }/>
                </div>
                <div className="info">
                    <p>院系:</p>
                    <input type="text" value={info.department} onChange={
                        (e) => {
                            const temp = {...info}
                            temp.department = e.target.value
                            setInfo(temp);
                        }
                    }/>
                </div>
                <div className="info">
                    <p>年級:</p>
                    <input type="text" value={info.grade} onChange={
                        (e) => {
                            const temp = {...info}
                            temp.grade = e.target.value
                            setInfo(temp);
                        }
                    }/>
                </div>
                <div className="info">
                    <p>班級:</p>
                    <input type="text" value={info.class} onChange={
                        (e) => {
                            const temp = {...info}
                            temp.class = e.target.value
                            setInfo(temp);
                        }
                    }/>
                </div>
                <div className="info">
                    <p>Email:</p>
                    <input type="text" value={info.email} onChange={
                        (e) => {
                            const temp = {...info}
                            temp.email = e.target.value
                            setInfo(temp);
                        }
                    }/>
                </div>
                <div className="info">
                    <p>缺席次數:</p>
                    <input type="number" name="" id="" value={info.absences ? info.absences : 0} onChange={
                        (e) => {
                            const temp = {...info}
                            temp.absences = Number(e.target.value)
                            setInfo(temp);
                        }
                    }/>
                </div>
                <div className="btn">
                    <div className="submit" onClick={submit}>
                        {Student.submitText}
                    </div>
                </div>
            </div>
        )
    }
}