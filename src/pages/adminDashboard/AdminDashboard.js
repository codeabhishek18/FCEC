import AdminPanel from '../../components/adminPanel/AdminPanel'
import Header from '../../components/header/Header'
import adminStyles from './AdminDashboard.module.css'

const AdminDashboard = () =>
{

    return(
        <div className={adminStyles.wrapper}>
            <Header/>
            <div className={adminStyles.container}>
                <div className={adminStyles.panel}>
                </div>
                <div className={adminStyles.view}>
                </div>
                <AdminPanel/>
            </div>
        </div>
    )
}

export default AdminDashboard