import header from './Header.module.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import userIcon from '../../assets/user.png'
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import Login from '../login/Login';

const Header = () =>
{
    const navigate = useNavigate();
    const [ showForm, setShowForm ] = useState(false);
    const [ user, setUser ] = useState(null);

    useEffect(()=>
    {
        const user = localStorage.getItem('user');
        if(user)
            setUser(JSON.parse(user));
    },[])

    const logUserOut = async () =>
    {
        try
        {
            const url = 'http://localhost:8080/v1/user/logout'
            await axios.post(url, {} ,{ withCredentials: true });
            localStorage.removeItem('user');
            setUser(null);
            navigate('/')
            enqueueSnackbar('Logged out', {variant: 'success'})
        }
        catch(error)
        {
            console.log(error.message)
        }
    }

    return(
        <div className={header.container}>
            <h1 className={header.title} onClick={() => navigate('/')}>FCEC</h1>
            {user ? <div className={header.user}> 
                <p>{user}</p>
                <img className={header.profile} src={userIcon} alt='profile'/>
                <p className={header.logout} onClick={logUserOut}>Logout</p>
            </div> :
            <p className={header.logout} onClick={()=> setShowForm(true)}>Login</p>}
            {showForm && 
            <div className={header.form}>
                <Login setShowForm={setShowForm}/>
            </div>}            
        </div>
    )
}

export default Header