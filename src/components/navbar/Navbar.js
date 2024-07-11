import navbar from './Navbar.module.css'
import dashboard from '../../assets/dashboard.png'
import test from '../../assets/test.png'
import forum from '../../assets/forum.png'
import chat from '../../assets/chat.png'
import settings from '../../assets/settings.png'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import logout from '../../assets/logout.png'
import {useState} from 'react'
import Header from '../header/Header'

export const navItems = [
    {
        id: 0,
        name: 'Dashboard'
    },
    {
        id: 1,
        name: 'Tests'
    },

    {
        id: 2,
        name: 'Forum'
    },
    {
        id: 3,
        name: 'Support'
    },
    {
        id: 4,
        name: 'Settings'
    },
]

export const navIcons = [
    {
        id: 0,
        src: dashboard
    },
    {
        id: 1,
        src: test
    },
    {
        id: 2,
        src: forum
    },
    {
        id: 4,
        src: settings
    },
    
]

const Navbar = () =>
{

    const [slide, setSlide] = useState(true)
    const [active, setActive] = useState(0)

    return(
        <div className={navbar.container}>
            <div className={navbar.icons}>
                {navIcons.map((icon)=>
                (
                    <img className={navbar.icon} src={icon.src} alt='icon' onClick={()=>setActive(icon.id)} key={icon.id}/>
                ))}
            </div>
            <div className={navbar.fixed}>
                
            </div>
            {/* <div className={slide ? `${navbar.pointers} ${navbar.show}` : navbar.hide}>
                {navItems.map((item)=>
                (
                    <div className={navbar.pointerContainer}>
                        <p className={item.id === active ? `${navbar.pointer} ${navbar.dot}`: navbar.pointer}></p>
                    </div>
                ))}
            </div> */}
            {/* <div className={slide ? `${navbar.slide} ${navbar.headers}` : navbar.headers}>
                {navItems.map((item) =>
                (
                    <p className={item.id === active ? `${navbar.name} ${navbar.active}` : navbar.name} key={item.id} onClick={()=> setActive(item.id)}>{item.name}</p>
                ))}
            </div> */}
            {/* <img className={navbar.arrow} src={slide ? right : left} alt='left' onClick={()=> setSlide(!slide)}/> */}
            {/* <img className={navbar.logout} src={logout} alt='logout'/> */}
        </div>
    )
}

export default Navbar