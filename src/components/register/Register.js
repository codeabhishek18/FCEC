import { useEffect, useState } from 'react'
import styles from './Register.module.css'
import { baseUrl } from '../../constants';
import axios from 'axios';

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const Register = ({batches}) =>
{
    const [ user, setUser ] = useState({firstname: '', lastname: '', email: '', password: '', contactNumber: '', batch: ''})
    const [ course, setCourse ] = useState('');
    const [ courseBatch, setCourseBatch ] = useState(null);

    const handleChange = (e) =>
    {
        const {name, value} = e.target;
        setUser({...user, [name] : value});
    }

    const handleCourse = (e) =>
    {
        setCourse(e.target.value);
        const filteredBatches = batches.filter((batch)=> batch.courseId._id === e.target.value);
        setCourseBatch(filteredBatches);
    }

    const handleSubmit = async (e) =>
    {
        try
        {
            e.preventDefault();
            const url = `${baseUrl}/user/register`
            await axios.post(url, user);
        }
        catch(error)
        {
            console.log(error)
        }
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Register</h1>
            <input name="firstname" value={user.firstname} placeholder='Firstname' onChange={handleChange}/>
            <input name="lastname" value={user.lastname} placeholder='Lastname' onChange={handleChange}/>
            <input name="email" value={user.email} placeholder='Email' onChange={handleChange}/>
            <input name="contactNumber" value={user.contactNumber} placeholder='Contact number' onChange={handleChange}/>
            <input name="password" value={user.password} placeholder='Password' onChange={handleChange}/>
            <select onChange={handleCourse}>
                <option value="">Choose course</option>
                {batches?.map((batch) =>
                (
                    <option value={batch.courseId._id}>{batch.courseId.title}</option>
                ))}
            </select>
            <select name='batch' onChange={handleChange} value={user.batch}>
                <option value="">Choose Batch</option>
                {courseBatch?.map((batch) =>
                (
                    <option value={batch._id}>{batch.title} - Starts from {new Date(batch.startDate).toLocaleDateString('en-US', options)}</option>
                ))}
            </select>

            <button className={styles.register} onClick={handleSubmit}>Register</button>
        </div>
    )
}

export default Register