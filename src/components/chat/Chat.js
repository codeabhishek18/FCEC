import chat from './Chat.module.css'
import user from '../../assets/user.png'

const Chat = () =>
{

    return(
        <div className={chat.wrapper}>
            <div className={chat.container}>
                <div className={chat.header}>
                    <img className={chat.admin} src={user} alt='user'/>
                    <h3 className={chat.title}>FCEC</h3>
                </div>
                <div className={chat.footer}>
                    <input className={chat.box} placeholder='Type a message'/>
                </div>
            </div>
        </div>
    )
}

export default Chat