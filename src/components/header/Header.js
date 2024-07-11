import header from './Header.module.css'
import { useNavigate } from 'react-router-dom';
import Register from '../register/Register';
import { useState } from 'react';

const Header = () =>
{
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);

    return(
        <div className={header.container}>
            <h1 className={header.title} onClick={() => navigate('/')}>FCEC</h1>
            <div className={header.user}> 
                {/* <p>Abhishek</p>
                <img className={header.profile} src={user} alt='profile'/> */}
                <p className={header.logout} onClick={()=> setShowForm(true)}>Register</p>
            </div>
            {showForm && 
            <div className={header.form}>
                <Register/>
            </div>}            
        </div>
    )
}

export default Header