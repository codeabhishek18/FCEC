import styles from './Enrollment.module.css'

const Enrollment = ({student}) =>
{

    return(
        <div className={styles.container}>
            <p className={styles.name}>{student.firstname +' ' +student.lastname}</p>
            <p className={styles.email}>{student.email}</p>
            <p className={styles.contact}>{student.contactNumber}</p>
        </div>
    )
}

export default Enrollment