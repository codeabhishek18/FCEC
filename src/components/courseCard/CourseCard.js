import courseCardStyles from './CourseCard.module.css'

const CourseCard = ({course}) =>
{
    
    return(
        <div className={courseCardStyles.container}>
            <p className={courseCardStyles.title}>{course.title}</p>
            <div className={courseCardStyles.footer}>
                <button className={courseCardStyles.buttons}>Details</button>
                <button className={courseCardStyles.buttons}>Join now</button>
             </div>
        </div>
    )
}

export default CourseCard