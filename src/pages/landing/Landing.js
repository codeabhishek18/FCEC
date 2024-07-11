import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import landing from './Landing.module.css'
import compliance from '../../assets/compliance.png'

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

const Landing = () =>
{
const navigate = useNavigate();

    return(
        <div className={landing.container}>
            <Header/>
            <div className={landing.intro}>
                {/* <img className={landing.heroImage} src={compliance} alt='img'/> */}
                <p>Mission of FinCrime Compliance Education & Consultancy (FCE&C) is to offer financial crime prevention education and training to college students and employees working in compliance field.
                We offer training on transaction monitoring, KYC, and compliance international standards. This program intends to help compliance professionals and college students who aspire to work in the financial compliance industry.
                </p>
            </div>
            <div className={landing.courses}>
                {courses.map((course) =>
                (
                    <div className={landing.courseCard} key={course.id}>
                        <h1 className={landing.title}>{course.title}</h1>
                        <p className={landing.more}>Read more</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Landing