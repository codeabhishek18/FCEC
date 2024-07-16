import moduleCardStyles from './ModuleCard.module.css'
import deleteIcon from '../../assets/delete.png' 

const ModuleCard = ({data, removeModule}) =>
{
    return(
        <div className={moduleCardStyles.container}>
            <div className={moduleCardStyles.header}>
                <p className={moduleCardStyles.title}>{data.title}</p>
                <img className={moduleCardStyles.delete} src={deleteIcon} alt='delete' onClick={() => removeModule(data._id)}/>
            </div>
            <div className={moduleCardStyles.footer}>
                <p className={moduleCardStyles.agenda}>{data.agenda}</p> 
            </div>
        </div>
    )
}

export default ModuleCard