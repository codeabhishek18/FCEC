import { useEffect, useState } from 'react'
import { baseUrl } from '../../constants'
import axios from 'axios'
import AdminPanel from '../../components/adminPanel/AdminPanel'
import Header from '../../components/header/Header'
import batchStyles from './Batches.module.css'
import BatchForm from '../../components/batchForm/BatchForm'
import BatchCard from '../../components/batchCard/BatchCard'

const Batches = () =>
{
    const [ batchData, setBatchData ] = useState({title: '', courseId: '' , mentorId: '', startDate: '', endDate: ''})
    const [ courses, setCourses ] = useState([]);
    const [ mentors, setMentors ] = useState([]);
    const [ batches, setBatches ] = useState([]);
    const [ batchForm, setBatchForm ] = useState(false)

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

    const handleSubmit = async (e) =>
    {
        try
        {
            e.preventDefault();
            const url = `${baseUrl}/batch/create`
            await axios.post(url, batchData)
            getBatches();
            setBatchForm(false)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    const removeBatch = async (id) =>
    {
        try
        {
            const url = `${baseUrl}/batch/delete/${id}`
            const response = await axios.delete(url, batchData)
            setBatches(response.data)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    console.log(batches)

    return(
        <div className={batchStyles.wrapper}>
            <Header/>
            <div className={batchStyles.container}>
                <div className={batchStyles.panel}>
                </div>
                <AdminPanel/>
                <div className={batchStyles.view}>
                    {batchForm && <BatchForm batchData={batchData} courses={courses} mentors={mentors} handleChange={handleChange} handleSubmit={handleSubmit} setBatchForm={setBatchForm}/>}
                    <div className={batchStyles.header}>
                        <h1>Batches</h1>
                        <button className={batchStyles.add} onClick={()=> setBatchForm(true)}>+ Add Batch</button>
                    </div>
                    <div className={batchStyles.list}>
                    {batches?.map((batch) =>
                    (
                        <BatchCard key={batch._id} data={batch} removeBatch={removeBatch}/>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Batches