import { useState } from 'react'
import register from './Register.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const headers = [
    {
        id: 1,
        name: 'Register'
    },
    {
        id: 2,
        name: 'Login'
    }
]

const Register = () =>
{
    const [ form, setForm ] = useState({firstname: '', lastname: '', email: '', password: ''})
    const [ active, setActive ] = useState(1);
    const navigate = useNavigate();

    const handleChange = (e) =>
    {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handleForm = async (e) =>
    {
        e.preventDefault();
        if(active === 1)
        {
            try
            {
                const url = 'http://localhost:8080/v1/user/register'
                const response = await axios.post(url,form);
                console.log(response);
                setActive(2);
            }
            catch(error)
            {
                console.log(error);
            }
        }
        else
        {
            try
            {
                const url = 'http://localhost:8080/v1/user/login'
                const response = await axios.post(url, {email: form.email, password: form.password});
                console.log(response);
                navigate('/home')
            }
            catch(error)
            {
                console.log(error);
            }
        }
    }

    return(
        <div className={register.container}>
            <div className={register.header}>
                {headers.map((header)=>
                (
                    <p className={header.id === active ? `${register.row} ${register.active}` : register.row} onClick={()=> setActive(header.id)} key={header.id}>{header.name}</p>
                ))}                
            </div>
            <form className={register.form} onSubmit={handleForm}>
                {active === 1 && <input name='firstname' value={form.firstname} placeholder='Firstname' onChange={handleChange}/>}
                {active === 1 && <input name='lastname' value={form.lastname} placeholder='Lastname' onChange={handleChange}/>}
                <input name='email' value={form.email} placeholder='Email' onChange={handleChange}/>
                <input name='password' value={form.password} placeholder='Password' onChange={handleChange}/>
                <button className={register.submit} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register