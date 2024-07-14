import { useEffect, useState } from 'react'
import AdminPanel from '../../components/adminPanel/AdminPanel'
import Header from '../../components/header/Header'
import batchStyles from './Batches.module.css'
import { baseUrl } from '../../constants'
import axios from 'axios'

const options = { day: 'numeric', month: 'long', year: 'numeric' };

const Batches = () =>
{

    const [ batchData, setBatchData ] = useState({title: '', courseId: '' , mentorId: '', startDate: '', endDate: ''})
    const [ courses, setCourses ] = useState(null);
    const [ mentors, setMentors ] = useState(null);
    const [ batches, setBatches ] = useState(null);

    const getCourses = async () =>
    {
        const url = `${baseUrl}/course/all`
        const response = await axios.get(url);
        setCourses(response.data);
    }

    const getMentors = async () =>
    {
        const url = `${baseUrl}/mentor/all`
        const response = await axios.get(url);
        setMentors(response.data);
    }

    const getBatches = async () =>
    {
        const url = `${baseUrl}/batch/all`
        const response = await axios.get(url);
        setBatches(response.data);
    }

    useEffect(()=>
    {
       getCourses();
       getMentors();
       getBatches();
    },[])

    const handleChange = (e) =>
    {
        const {name, value} = e.target;
        setBatchData({...batchData, [name] : value})
    }

    const hadleSubmit = async (e) =>
    {
        try
        {
            e.preventDefault();
            const url = `${baseUrl}/batch/create`
            await axios.post(url, batchData)
            getBatches();
        }
        catch(error)
        {
            console.log(error)
        }
    }

    return(
        <div className={batchStyles.wrapper}>
            <Header/>
            <div className={batchStyles.container}>
                <div className={batchStyles.panel}>
                </div>
                <div className={batchStyles.view}>
                    <div className={batchStyles.createBatch}>
                        <input name='title' value={batchData.title} placeholder='Batch Title' onChange={handleChange}/>
                        <select name="courseId" value={batchData.course} onChange={handleChange}>
                            <option value=''>Choose course</option>
                            {courses?.map((course) =>
                            (
                                <option value={course._id}>{course.title}</option>
                            ))}
                        </select>

                        <select name="mentorId" value={batchData.mentor} onChange={handleChange}>
                            <option value=''>Choose mentor</option>
                            {mentors?.map((mentor) =>
                            (
                                <option value={mentor._id}>{mentor.name}</option>
                            ))}
                        </select>
                        <input name='startDate' value={batchData.startDate} placeholder='Start date' onChange={handleChange}/>
                        <input name='endDate' value={batchData.endDate} placeholder='End Date' onChange={handleChange}/>
                        <button className={batchStyles.createButton} onClick={hadleSubmit}>Create Batch</button>
                    </div>
                    <div className={batchStyles.list}>
                        {batches?.map((batch) =>
                        (
                            <div className={batchStyles.batchCard}>
                                <p className={batchStyles.header}>{batch.title}</p>
                                <div className={batchStyles.footer}>
                                    <p className={batchStyles.course}>{batch.courseId.title}</p> 
                                    <p className={batchStyles.status}>{batch.status}</p>
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

export default Batches