import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import checkout from './Checkout.module.css'

const Checkout = () =>
{

    return(
        <div className={checkout.wrapper}>
            <Header/>
            <div className={checkout.container}>

            </div>
            <Footer/>
        </div>
    )
}

export default Checkout