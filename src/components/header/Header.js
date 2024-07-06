import header from './Header.module.css'
import user from '../../assets/user.png'

const Header = () =>
{

    return(
        <div className={header.container}>
            <img className={header.conatiner} src={user} alt='profile'/>
            <h3>Abhishek</h3>
        </div>
    )
}

export default Header