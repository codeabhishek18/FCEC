import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import home from './Home.module.css'

const Home = () =>
{

    return(
        <div className={home.container}>
            <Header/>
            <Navbar/>
        </div>
    )
}

export default Home