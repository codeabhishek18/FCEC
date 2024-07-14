import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import home from './Home.module.css'
import chat from '../../assets/chat.png'
import certificate from '../../assets/certificate.png'
import agenda from '../../assets/agenda.png'
import complete from '../../assets/complete.png'
import pending from '../../assets/pending.png'
import close from '../../assets/close.png'
import PieChartWithPaddingAngle from '../../components/piechart/PieChart'
import Chat from '../../components/chat/Chat'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const sessions = [
    {
        id: 1,
        name: 'Session 1',
        src: complete,
        status: 'Completed'
    },
    {
        id: 2,
        name: 'Session 2',
        src: complete,
        status: 'Completed'
    },
    {
        id: 3,
        name: 'Session 3',
        src: pending,
        status: 'Pending'
    },
    {
        id: 4,
        name: 'Session 4',
        src: pending,
        status: 'Pending'
    },
]

const Home = () =>
{
    const [showChat, setShowChat] = useState(false)
    const [ user, setUser] = useState(null);

    useEffect(()=>
    {
        const user = localStorage.getItem('user');
        if(user)
            setUser(JSON.parse(user));
    },[])

    console.log(user);

    return(
        <div className={home.container}>
            <Header/>
            <Navbar/>
            <div className={home.content}>
                <div className={home.tracker}>
                    <div className={home.header}>
                        <p className={home.title}>Financial Crime Compliance</p>
                    </div>
                    <div className={home.progress}>
                        <p className={home.progressTitle}>Progress</p>
                        <PieChartWithPaddingAngle/>
                    </div>
                    <div className={home.footer}>
                        <p className={home.mentor}>Sprint Mentor | <span>Lokesh Naik</span></p>
                        <p className={home.pendingSessions}>2 more sessions to unlock your certification</p>
                        <p className={home.certificate}><img src={certificate} alt='certificate'/>Download Certificate</p>
                    </div>
                </div>
                <div className={home.sessions}>
                {sessions.map((session)=>
                (
                    <div className={home.sessionDiv} key={session.id}>
                        <div className={home.sessionHeader}>
                            <img className={home.agenda} src={agenda} alt='agenda'/>
                            <p className={home.sessionName}>{session.name}</p>
                        </div>
                        <div className={home.sessionContent}>
                            <p className={home.status}>{session.status}</p>
                            <img className={home.statusIcon} src={session.src} alt='img'/>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <img className={home.support} src={showChat ? close : chat} alt="chat" onClick={()=> setShowChat(!showChat)}/>
            {showChat && <Chat/>}
        </div>
    )
}

export default Home