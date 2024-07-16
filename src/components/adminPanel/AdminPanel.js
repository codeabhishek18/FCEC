import { useNavigate } from 'react-router-dom'
import { adminPanelList } from '../../utility/adminPanelList'
import adminPanelStyles from './AdminPanel.module.css'
import { useState } from 'react';

const AdminPanel = () =>
{
    const navigate = useNavigate();
    const [active, setActive] = useState(0);

    return(
        <ul className={adminPanelStyles.container}>
            {adminPanelList.map((list) =>
                <li className={active === list.id ? `${adminPanelStyles.list} ${adminPanelStyles.active}` : adminPanelStyles.list} 
                    key={list.id}onClick={()=> { setActive(list.id); navigate(list.navigation)}}>{
                    list.title}
                </li>
            )}
        </ul>
    )
}

export default AdminPanel