import batchCardStyles from './BatchCard.module.css'
import deleteIcon from '../../assets/delete.png' 
import { useNavigate } from 'react-router-dom';

const BatchCard = ({data, removeBatch}) =>
{
    const navigate = useNavigate();

    return(
        <div className={batchCardStyles.container}>
            <div className={batchCardStyles.header}>
                <p className={batchCardStyles.title}>{data.title}</p>
                <img className={batchCardStyles.delete} src={deleteIcon} alt='delete' onClick={() => removeBatch(data._id)}/>
            </div>
            <div className={batchCardStyles.content}>
                <p className={batchCardStyles.course}>{data.courseId.title}</p> 
                <p className={batchCardStyles.course}>Enrollments : {data.students.length}</p>
            </div> 
            <div className={batchCardStyles.footer}>
                <p className={batchCardStyles.status}>{data.status}</p>
                <p className={batchCardStyles.details} onClick={()=> navigate(`/batches/${data._id}`)}>Details</p>
            </div>
        </div>
    )
}

export default BatchCard