import loginStyles from './Login.module.css'
import registerIcon from '../../assets/register.png'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';


const Login = ({setShowForm}) =>
{
    const [ form, setForm ] = useState({firstname: '', lastname: '', email: '', password: ''})
    const navigate = useNavigate();

    const handleChange = (e) =>
    {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handleForm = async (e) =>
    {
        e.preventDefault();
        try
        {
            const url = 'http://localhost:8080/v1/user/login'
            const response = await axios.post(url, {email: form.email, password: form.password}, { withCredentials: true });
            localStorage.setItem('user', JSON.stringify(response.data.loggedUser));
            navigate('/home')
            enqueueSnackbar(`Logged in`, {variant: 'success'})
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return(
        <div className={loginStyles.container}>
            <div className={loginStyles.loginImage}>
                <img className={loginStyles.icon} src={registerIcon} alt='img'/>
            </div>
            <form className={loginStyles.form} onSubmit={handleForm}>
                <p className={loginStyles.welcome}>Welcome back!</p>
                <input name='email' value={form.email} placeholder='Email' onChange={handleChange}/>
                <input name='password' value={form.password} placeholder='Password' onChange={handleChange}/>
                <button className={loginStyles.submit} type='submit'>Login</button>
                <p className={loginStyles.forgotpassword}>Forgot password ?</p>
            </form>
            <p className={loginStyles.close} onClick={() => setShowForm(false)}>X</p>
        </div>
    )
}

export default Login