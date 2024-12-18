import { StudentInfo} from '../componets/StudentInfo'
import { Student } from '../interface/Student'
import { api } from '../enum/api'
import { resp } from '../interface/resp'
import { asyncGet, asyncPut, asyncDelete} from '../utils/fetch'
import { useParams } from 'react-router'
import { useEffect, useRef, useState } from 'react'

export const Update:React.FC = () => {

    const _id = useParams().id

    const [studentInfo, setStudent] = useState<Student>()

    const cache = useRef<boolean>(false)

    const submit = async (info:Student) =>{
        const res:resp<Student> =await asyncPut(api.updateByID,info)
        if(res.code ==200){
            alert("修改成功");
        }else{
            alert(`修改失敗:${res.message}`)
        }
    }

    const deleteHandler = async () => {
        const res:resp<boolean> =await asyncDelete(`${api.deleteByID}?id=${_id}`)
        if(res.code ==200){
            if(res.body){
                alert("刪除成功")
            }
            alert(`刪除失敗:${res.message}`)
        }else{
            alert(`刪除失敗:${res.message}`)
        }
    }

    useEffect(() => {
        if(!cache.current && _id){
            cache.current = true;
            asyncGet(`${api.findByID}?id=${_id}`).then((res:resp<Student>) => {
                if(res.code == 200){
                    setStudent(res.body)
                }
            });
        }
    },[])

    return (
        <div className="container">
            {
                studentInfo?
                <div className="update">
                    <StudentInfo {...studentInfo} canEdit={true} canDelte={true} submit={submit} deleteHandler={deleteHandler} title="修改學生資料" submitText="確認修改" />
                </div>
                :
                <div className="loading">
                    loading
                </div>
            }
        </div>
    )
}