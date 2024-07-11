import footer from './Footer.module.css'
import call from '../../assets/call.png'
import email from '../../assets/email.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'

const footerData = [
    // {
    //     id:1,
    //     src: call,
    //     description: '+91 8792477568'
    // },
    {
        id:2,
        src: email,
        description: 'admin@fceandc.com'
    },
]

const Footer = () =>
{

    return(
        <div className={footer.container}>
            <div className={footer.contact}>
            {footerData.map((data)=>
            (
                <div className={footer.items}>
                    <img className={footer.icons} src={data.src} alt='icon'/>
                    <p className={footer.description}>{data.description}</p>
                </div>
            ))}
            </div>
            <div>
                <h1 className={footer.title}>Fin-Crime Compliance Education & Consultancy</h1>
                <div className={footer.policies}>
                    <span>About</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                </div>
            </div>
            <div className={footer.social}>
                <img className={footer.icons} src={linkedin} alt='icon'/>
                <img className={footer.icons} src={youtube} alt='icon'/>
                <img className={footer.icons} src={instagram} alt='icon'/>
            </div>
        </div>
    )
}

export default Footer
