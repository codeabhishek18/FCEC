import sessionCardStyles from './SessionCard.module.css'
import agenda from '../../assets/agenda.png'
import complete from '../../assets/complete.png'
import pending from '../../assets/pending.png'
import Switch from '../switch/Switch'
import { useState } from 'react'

const SessionCard = ({session, index, updateSessionStatus}) =>
{
    const [ showAgenda, setShowAgenda ] = useState(false)

    return(
        <div className={sessionCardStyles.container}>
            <div className={sessionCardStyles.header}>
                <img className={sessionCardStyles.agenda} src={agenda} alt='agenda'/>
                <p className={sessionCardStyles.sessionName}>Session {index+1}</p>
                <p></p>
            </div>
            <div className={sessionCardStyles.footer}>
                <p className={sessionCardStyles.status}>{session.status}</p>
                <img className={sessionCardStyles.statusIcon} src={session.status === 'Pending' ? pending : complete} alt='img'/>
            </div>
            {/* <div className={sessionCardStyles.updateStatus}>
                <button onClick={()=> updateSessionStatus(session._id, session.status)}>Update</button>
            </div> */}
            <Switch id={session._id} status={session.status} updateSessionStatus={updateSessionStatus}/>
        </div>
    )
}

export default SessionCard