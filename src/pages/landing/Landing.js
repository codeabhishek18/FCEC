import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import landing from './Landing.module.css'
import compliance from '../../assets/compliance.jpg'
import Footer from '../../components/footer/Footer'
import Chat from '../../components/chat/Chat'
import Stats from '../../components/stats/Stats'

const courses = [
    {
        id: 1,
        title : 'Financial Crime Compliance',
        description : 
        'This Certificate offers a practical grasp of anti-money laundering, fraud prevention, and regulatory compliance. Participants gain essential skills to expertly manage financial crime risks, safeguard institutions, and uphold ethical standards in todays dynamic regulatory environment'
    },
    {
        id: 2,
        title : 'Know Your Customer (CDD & EDD)',
        description : 'This Certificate provides focused expertise in customer due diligence and enhanced due diligence, equipping professionals with essential skills to navigate regulatory requirements and ensure compliance. This program offers practical insights for effectively assessing and managing customer risks in todays dynamic business environment.'
    },
    {
        id: 3,
        title : 'Transaction Monitoring & Screening',
        description : 'This certificate imparts specialized expertise in vigilant transaction surveillance, risk detection, reporting to FIU, and regulatory compliance. Participants gain essential skills to navigate the process of monitoring financial transactions, ensuring institutions are safeguarded from potential illicit activities.'
    },
    {
        id: 4,
        title : 'Fincrime-International Standards',
        description : 'This Certificate provides an in-depth exploration of global financial standards, covering BSA, US Patriot Act, FATF, OFAC, EU Directive, Wolfsberg, Basel, and Egmont group. Gain comprehensive insights into these critical frameworks, ensuring adept compliance and risk management on an international scale.'
    }
]

const benifits = [
    {
        id: 1,
        name : 'Career Advancement',
        description : 'Gain expertise sought after by employers in banking, compliance and cybersecurity.'
    },
    {
        id: 2,
        name : 'Practical Skills',
        description : 'Learn real-world strategies for detecting and preventing money laundering, cybercrime.'
    },
    {
        id: 3,
        name : 'Flexible Learning',
        description : 'Access modules at your own pace with live classes and interactive sessions.'
    },
    {
        id: 4,
        name : 'Global Perspective',
        description : 'Understand international regulations and best practices in financial crime prevention.'
    },
    // {
    //     id: 5,
    //     name : 'Expert Guidance',
    //     description : 'Learn from industry experts with hands-on experience in combating financial crime.'
    // },
]

const features = [
    {
        id: 1,
        name : 'Live Classes',
        description : 'Engage with instructors and peers in real-time discussions.'
    },
    {
        id: 2,
        name : 'Interactive Module',
        description : 'Dive deep into case studies and simulations for practical learning.'
    },
    {
        id: 3,
        name : 'Certification',
        description : 'Earn a recognized certificate upon course completion.'
    },
    {
        id: 4,
        name : 'Community',
        description : 'Join a network of passionate financial professionals.'
    }
]

const Landing = () =>
{
const navigate = useNavigate();

    return(
        <div className={landing.container}>
            <Header/>
            <img className={landing.heroImage} src={compliance} alt='img'/>
            <div className={landing.header}>
                <h1 className={landing.heading}>Master Financial Crime Detection & Prevention</h1>
                <p className={landing.subheading}>Unlock Your Potential with Expert-Led Online Training</p>
            </div>
            <Stats/>
            <p className={landing.about}>
                Welcome to Fin-Crime Compliance Education & Consultancy, where we empower individuals with essential knowledge 
                to combat financial crime. Our comprehensive e-learning course equips you with the skills and insights
                needed to thrive in today's dynamic financial landscape.
                Our courses are meticulously designed to equip you with practical knowledge and strategic insights
                necessary to combat fraud, money laundering, and cybercrime effectively. Whether you're looking to advance 
                your career in compliance, banking, law enforcement, or cybersecurity, this course provides the expertise 
                and credentials to excel.
            </p>
            <h1 className={landing.why}>Why you should join us!</h1>
            <div className={landing.introduction}>
                {benifits.map((content)=>
                (
                    <div key={benifits.id} className={landing.benifits}>
                        <span className={landing.head}>{content.name}</span>
                        <p className={landing.description}>{content.description}</p>
                    </div>
                ))}
            </div>
            <h1 className={landing.why}>Courses offered</h1>
            <div className={landing.courses}>
                {courses.map((course) =>
                (
                    <div className={landing.courseCard} key={course.id}>
                        <p className={landing.title}>{course.title}</p>
                        <div className={landing.courseFooter}>
                            <p className={landing.more}>Explore</p>
                            <p className={landing.more}>Join now</p>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className={landing.why}>Course Features</h1>
            <div className={`${landing.introduction} ${landing.footer}`}>
                {features.map((content)=>
                (
                    <div key={benifits.id} className={landing.benifits}>
                        <span className={landing.head}>{content.name}</span>
                        <p className={landing.description}>{content.description}</p>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}

export default Landing