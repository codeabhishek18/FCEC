import axios from 'axios'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Register from '../../components/register/Register'
import { baseUrl } from '../../constants'
import checkout from './Checkout.module.css'
import { useEffect, useState } from 'react'

const Checkout = () =>
{
    const [ batches, setBatches ] = useState(null)

    const getUpcomingBatches = async () =>
    {
        try
        {
            const url = `${baseUrl}/batch/upcoming/batches`
            const batches = await axios.get(url);
            setBatches(batches.data);
        }
        catch(error)
        {
            console.log(error)
        }
    }

    useEffect(()=>
    {
        getUpcomingBatches()
    },[])

    return(
        <div className={checkout.wrapper}>
            <Header/>
            <div className={checkout.container}>
                <div className={checkout.register}>
                    <Register batches={batches}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Checkout