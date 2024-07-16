import { useEffect, useState } from 'react'
import { baseUrl } from '../../constants'
import axios from 'axios'
import AdminPanel from '../../components/adminPanel/AdminPanel'
import Header from '../../components/header/Header'
import batchStyles from './Batch.module.css'
import BatchForm from '../../components/batchForm/BatchForm'
import BatchCard from '../../components/batchCard/BatchCard'
import { useParams } from 'react-router-dom'
import SessionCard from '../../components/sessionCard/SessionCard'
import Progress from '../../components/progress/Progress'
import Enrollment from '../../components/enrollment/Enrollment'

const Batch = () =>
{
    const [ batchData, setBatchData ] = useState({title: '', courseId: '' , mentorId: '', startDate: '', endDate: ''})
    const [ batches, setBatches ] = useState(null);
    const [ batchForm, setBatchForm ] = useState(false)
    const {id} = useParams();
   
    const getBatches = async () =>
    {
        const url = `${baseUrl}/batch/${id}`
        const response = await axios.get(url);
        setBatches(response.data);
    }

    const updateSessionStatus = async (sessionId, status) =>
    {
        const updatedStatus = status === 'Pending' ? 'Completed' : 'Pending'
        const url = `${baseUrl}/session/update/${sessionId}`
        await axios.put(url, {newStatus : updatedStatus});
        getBatches();
    }

    useEffect(()=>
    {
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
            {batches && <div className={batchStyles.container}>
                <div className={batchStyles.panel}>
                </div>
                <AdminPanel/>
                <div className={batchStyles.view}>
                    <div className={batchStyles.batchDiv}>
                        <div className={batchStyles.batches}>
                            <Progress data={batches}/>
                        </div>
                        {/* {batchForm && <BatchForm batchData={batchData} courses={courses} mentors={mentors} handleChange={handleChange} handleSubmit={handleSubmit} setBatchForm={setBatchForm}/>} */}
                        <div className={batchStyles.list}>
                            {batches.sessions.map((session, index) =>
                            (
                                <SessionCard key={session._id} session={session} index={index} updateSessionStatus={updateSessionStatus}/>
                            ))}
                        </div>
                    </div>
                    <div className={batchStyles.enrollmentDiv}>
                        {
                            batches.students.map((student)=>
                            (
                                <Enrollment student={student}/>
                            ))
                        }
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Batch