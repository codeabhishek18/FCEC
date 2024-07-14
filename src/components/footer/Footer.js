import footer from './Footer.module.css'
import email from '../../assets/email.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'

const Footer = () =>
{

    return(
        <div className={footer.container}>
            <h1 className={footer.title}>Fin-Crime Compliance Education & Consultancy</h1>
            <div className={footer.details}>
                <div className={footer.contact}>
                    <img className={footer.icons} src={email} alt='icon'/>
                    <p className={footer.description}>admin@fceandc.com</p>
                </div>
                <div className={footer.policies}>
                    <span>About</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                </div>
                <div className={footer.social}>
                    <img className={footer.icons} src={linkedin} alt='icon'/>
                    <img className={footer.icons} src={youtube} alt='icon'/>
                    <img className={footer.icons} src={instagram} alt='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Footer
