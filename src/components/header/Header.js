import header from './Header.module.css'
import user from '../../assets/user.png'
import { useNavigate } from 'react-router-dom';

const Header = () =>
{
    const navigate = useNavigate();

    return(
        <div className={header.container}>
            <h1 className={header.title} onClick={() => navigate('/')}>FCEC</h1>
            <div className={header.user}> 
                <p>Abhishek</p>
                <img className={header.profile} src={user} alt='profile'/>
                <p className={header.logout}>Logout</p>
            </div>
        </div>
    )
}

export default Header