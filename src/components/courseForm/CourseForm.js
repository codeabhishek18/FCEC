import courseFormStyles from './CourseForm.module.css'

const CourseForm = ({data, handleChange, handleSubmit, setCourseForm}) =>
{    
    return(
        <div className={courseFormStyles.wrapper}>
            <div className={courseFormStyles.container}>
                <h1 className={courseFormStyles.header}>Add course</h1>
                <input className={courseFormStyles.title} name='title' value={data.title} placeholder='Course Title' onChange={handleChange}/>
                <textarea className={courseFormStyles.description} name='description' value={data.description} placeholder='Description' onChange={handleChange}/>
                <textarea className={courseFormStyles.curriculum} name='curriculum' value={data.curriculum} placeholder='Curriculum' onChange={handleChange}/>
                <button className={courseFormStyles.createButton} onClick={handleSubmit}>Create Course</button>
                <span className={courseFormStyles.close} onClick={()=> setCourseForm(false)}>X</span>
            </div>
        </div>
    )
}

export default CourseForm