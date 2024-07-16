import styles from './Progress.module.css'
import certificate from '../../assets/certificate.png'
import PieChartWithPaddingAngle from '../piechart/PieChart'

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const pendingSessions = (sessions) =>
{
    return sessions.filter((session) => session.status === 'Pending').length
}

const Progress = ({data}) =>
{

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.courseTitle}>{data.courseId.title}</h1>
                <h1 className={styles.batchCode}><span>{data.title}</span></h1>
                <p className={styles.dates}>{new Date(data.startDate).toLocaleDateString('en-US', options)} - {new Date(data.endDate).toLocaleDateString('en-US', options)} </p>
            </div>
            <div className={styles.progress}>
                <p className={styles.progressTitle}>Progress</p>
                <PieChartWithPaddingAngle sessionData={data}/>
            </div>
            <div className={styles.footer}>
                <p className={styles.mentor}>Sprint Mentor | <span>{data.mentorId.name}</span></p>
                <p className={styles.pendingSessions}>{pendingSessions(data.sessions) === 0 ? 'Unlock certification now' : pendingSessions(data.sessions) +' more session(s) to unlock certification'}</p>
                <p className={styles.certificate}><img src={certificate} alt='certificate'/>Download Certificate</p>
            </div>
        </div>
    )
}

export default Progress