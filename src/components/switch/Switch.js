import { useState } from 'react'
import styles from './Switch.module.css'
import { baseUrl } from '../../constants'
import axios from 'axios'

const Switch = ({id, status, updateSessionStatus}) =>
{
    const [slide, setSlide] = useState(status)

    const handleClick = async () =>
    {
        setSlide((prev) => prev === 'Pending' ? 'Completed' : 'Pending');
    }

    console.log(status)

    return(
        <div className={styles.container} onClick={()=> {handleClick(); updateSessionStatus(id, status)}}>
            <div className={slide === 'Pending' ? `${styles.slider} ${styles.left}` : `${styles.slider} ${styles.right}`}></div>
        </div>
    )
}

export default Switch