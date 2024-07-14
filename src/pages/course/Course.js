import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import course from './Course.module.css'

const Course = () =>
{

    return (
        <div className={course.wrapper}>
            <Header/>
            <div className={course.container}>
                <h1 className={course.head}>Financial Crime Compliance</h1>
                <div className={course.details}>
                    <p>Introduction to Financial Institutions / Non- Financial Institutions</p>
                    <p>Basic understanding of Money Laundering & Terrorist Financing (ML & TF)</p>
                    <p>Techniques of ML & TF</p>
                    <p>The Compliance Function</p>
                    <p>Understanding of Banking Products, red flags & Mitigations</p>
                    <p>Regulatory reporting procedures</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Course