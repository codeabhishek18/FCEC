import { adminPanelList } from '../../utility/adminPanelList'
import adminPanelStyles from './AdminPanel.module.css'

const AdminPanel = () =>
{

    return(
        <ul className={adminPanelStyles.container}>
            {adminPanelList.map((list) =>
                <li className={adminPanelStyles.list} key={list.id}>{list.title}</li>
            )}
        </ul>
    )
}

export default AdminPanel