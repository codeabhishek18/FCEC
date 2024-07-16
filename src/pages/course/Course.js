import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import course from './Course.module.css'
import { useEffect, useState } from 'react'
import { baseUrl } from '../../constants'
import axios from 'axios'

const Course = () =>
{
    const {id} = useParams();
    const [courseDetails, setCourseDetails] = useState([]);
    const [curriculum, setCurriculum] = useState(null);

    const getCourse = async () =>
    {
        try
        {
            const url = `${baseUrl}/course/${id}`
            const response = await axios.get(url)
            setCourseDetails(response.data)
            const points = response.data.curriculum
                .split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)(?=\s|$)/)
                .filter(sentence => sentence.trim().length > 0);
            setCurriculum(points);
        }
        catch(error)
        {
            console.log(error)
        }
    }
    
    useEffect(()=>
    {
        getCourse();
    },[])

    return (
        <div className={course.wrapper}>
            <Header/>
            <div className={course.container}>
                <h1 className={course.header}>{courseDetails.title}</h1>
                <div className={course.description}>
                    {courseDetails.description}
                </div>
                <h3 className={course.syllabus}>Curriculum</h3>
                <ul className={course.curriculum}>
                    {curriculum?.map((item, index) =>
                    (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button className={course.join}>Join Now</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Course