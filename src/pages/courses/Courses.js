import { useEffect, useState } from 'react'
import AdminPanel from '../../components/adminPanel/AdminPanel'
import Header from '../../components/header/Header'
import courseStyles from './Courses.module.css'
import { baseUrl } from '../../constants'
import axios from 'axios'
import deleteIcon from '../../assets/delete.png' 
import CourseForm from '../../components/courseForm/CourseForm'
import { useNavigate } from 'react-router-dom'

const Courses = () =>
{

    const [ courseData, setCourseData ] = useState({title: '', description: ''})
    const [ courses, setCourses ] = useState(null);
    const [ courseForm, setCourseForm ] = useState(false)
    const navigate = useNavigate();

    const getCourses = async () =>
    {
        const url = `${baseUrl}/course/all`
        const response = await axios.get(url);
        setCourses(response.data);
    }

    useEffect(()=>
    {
       getCourses();
    },[])

    const handleChange = (e) =>
    {
        const {name, value} = e.target;
        setCourseData({...courseData, [name] : value})
    }

    const handleSubmit = async (e) =>
    {
        try
        {
            e.preventDefault();
            const url = `${baseUrl}/course/create`
            await axios.post(url, courseData)
            getCourses();
            setCourseForm(false)
        }
        catch(error)
        {
            console.log(error)
        }

    }

    const removeCourse = async (id) =>
    {
        try
        {
            const url = `${baseUrl}/course/delete/${id}`
            const response = await axios.delete(url)
            setCourses(response.data)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    return(
        <div className={courseStyles.wrapper}>
            <Header/>
            <div className={courseStyles.container}>
                <div className={courseStyles.panel}>
                </div>
                <div className={courseStyles.view}>
                    {courseForm && <CourseForm data={courseData} handleChange={handleChange} handleSubmit={handleSubmit} setCourseForm={setCourseForm}/>}
                    <div className={courseStyles.listHeader}>
                        <h1>Courses</h1>
                        <button className={courseStyles.add} onClick={()=> setCourseForm(true)}>+ Add courses</button>
                    </div>
                    <div className={courseStyles.list}>
                        {courses?.map((course) =>
                        (
                            <div className={courseStyles.courseCard} key={course._id}>
                                <div className={courseStyles.header}>
                                    <p className={courseStyles.title}>{course.title}</p>
                                    <img className={courseStyles.deleteIcon} src={deleteIcon} alt='delete' onClick={()=> removeCourse(course._id)}/>
                                </div>
                                <p className={courseStyles.moduleCount}>Modules : {course.modules.length}</p>
                                <div className={courseStyles.footer}>
                                    <p className={courseStyles.details} onClick={()=> navigate(`/course/${course._id}`)}>Details</p> 
                                    <p className={courseStyles.modules} onClick={()=> navigate(`/modules/${course._id}`)}>Modules</p> 
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <AdminPanel/>
            </div>
        </div>
    )
}

export default Courses