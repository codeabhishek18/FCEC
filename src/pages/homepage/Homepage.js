import Header from '../../components/header/Header'
import Stats from '../../components/stats/Stats'
import compliance from '../../assets/compliance.jpg'
import homepageStyles from './Homepage.module.css' 
import Footer from '../../components/footer/Footer'
import FeatureCard from '../../components/featureCard/FeatureCard'
import CourseCard from '../../components/courseCard/CourseCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { about } from '../../utility/about'
import { baseUrl } from '../../constants'
import { courseBenefits } from '../../utility/courseBenefits'
import { courseFeatures } from '../../utility/courseFeatures'
import { header } from '../../utility/header'


const Homepage = () =>
{
    const [courses, setCourses] = useState(null);

    useEffect(() =>
    {
        async function getCourses()
        {
            const url = `${baseUrl}/course/all`
            const response = await axios.get(url);
            setCourses(response);
        }
        getCourses();
    },[])

    return(
        <div className={homepageStyles.wrapper}>
            <Header/>

            <img className={homepageStyles.heroImage} src={compliance} alt='img'/>
            <div className={homepageStyles.container}>

                <div className={homepageStyles.header}>
                    <h1 className={homepageStyles.heading}>{header.heading}</h1>
                    <p className={homepageStyles.subheading}>{header.subheading}</p>
                </div>

                <Stats/>
                <p className={homepageStyles.about}>
                    {about}
                </p>

                <h1 className={homepageStyles.commonHeaders}>Courses offered</h1>
                <div className={homepageStyles.courses}>
                    {courses?.data.map((course) =>
                    (
                        <CourseCard course={course}/>
                    ))}
                </div>

                <h1 className={homepageStyles.commonHeaders}>Why choose us ?</h1>
                <div className={homepageStyles.benefits}>
                    {courseBenefits.map((data) =>
                    (
                        <FeatureCard data={data}/>
                    ))}
                </div>
                
                <h1 className={homepageStyles.commonHeaders}>Course Features</h1>
                <div className={homepageStyles.features}>
                    {courseFeatures.map((data) =>
                    (
                        <FeatureCard data={data}/>
                    ))}
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Homepage