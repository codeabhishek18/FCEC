import { useEffect, useState } from 'react'
import { baseUrl } from '../../constants'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AdminPanel from '../../components/adminPanel/AdminPanel'
import Header from '../../components/header/Header'
import moduleStyles from './Modules.module.css'
import ModuleForm from '../../components/moduleForm/ModuleForm'
import ModuleCard from '../../components/moduleCard/ModuleCard'

const Modules = () =>
{
    const [ moduleData, setModuleData ] = useState({title: '', agenda: ''})
    const [ modules, setModules ] = useState([]);
    const [ moduleForm, setModuleForm ] = useState(false);
    const [ courseTitle, setCourseTitle ] = useState(null)
    const {id} = useParams();

     const getCourseModules = async () =>
    {
        try
        {
            const url = `${baseUrl}/course/${id}`
            const response = await axios.get(url)
            setCourseTitle(response.data.title)
            setModules(response.data.modules)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    useEffect(()=>
    {
        getCourseModules()
    },[])

    const handleChange = (e) =>
    {
        const {name, value} = e.target;
        setModuleData({...moduleData, [name] : value})
    }

    const handleSubmit = async (e) =>
    {
        try
        {
            e.preventDefault();
            const url = `${baseUrl}/module/create/${id}`
            await axios.post(url, moduleData)
            setModuleForm(false)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    const removeModule = async (moduleId) =>
    {
        try
        {
            const url = `${baseUrl}/module/delete/${id}/${moduleId}`
            const response = await axios.delete(url)
            setModules(response.data)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    return(
        <div className={moduleStyles.wrapper}>
            <Header/>
            <div className={moduleStyles.container}>
                <div className={moduleStyles.panel}>
                </div>
                <AdminPanel/>
                <div className={moduleStyles.view}>
                    {moduleForm && <ModuleForm data={moduleData} handleChange={handleChange} handleSubmit={handleSubmit} setModuleForm={setModuleForm}/>}
                    <div className={moduleStyles.header}>
                        <h1>Modules</h1>
                        <button className={moduleStyles.add} onClick={()=> setModuleForm(true)}>+ Add Module</button>
                    </div>
                    <p className={moduleStyles.courseTitle}>{courseTitle}</p>
                    {modules.length && <div className={moduleStyles.list}>
                    {modules?.map((batch) =>
                    (
                        <ModuleCard key={batch._id} data={batch} removeModule={removeModule}/>
                    ))}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Modules