import React, {useEffect, useState} from 'react';
import PersonalInformation from '../components/PersonalInformation'
import StudentLevel from '../components/StudentLevel'
import Comment from '../components/Comment'
import Student from '../components/Student.js';

const Form = () =>{

    const [data, setData] = useState(
        new Student("Gary", "English File 1", 5, 10)
    )

    useEffect(() =>{
        console.log(data);
    }, [data])
    const handleFormSubmit = (newStudentData) => {
        setData({...data,
            name: newStudentData.name,
            course: newStudentData.course,
            attendance: newStudentData.attendance,
            totalLessons: newStudentData.totalLessons
        });
    }

    return(
        <div id="content">
            <PersonalInformation props = {data} handle ={handleFormSubmit}/>
            <StudentLevel props = {data}/>
            <Comment props = {data}/>
            <p>{data.name}</p>
        </div>
    )
}
export default Form;