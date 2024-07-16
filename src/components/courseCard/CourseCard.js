import { useNavigate } from 'react-router-dom';
import courseCardStyles from './CourseCard.module.css'

const CourseCard = ({course}) =>
{
    const navigate = useNavigate();
    
    return(
        <div className={courseCardStyles.container}>
            <p className={courseCardStyles.title}>{course.title}</p>
            <div className={courseCardStyles.footer}>
                <button className={courseCardStyles.buttons} onClick={()=> navigate(`/course/${course._id}`)}>Details</button>
                <button className={courseCardStyles.buttons} onClick={()=> navigate('/register')}>Join now</button>
             </div>
        </div>
    )
}

export default CourseCard