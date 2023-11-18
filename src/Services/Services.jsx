import { useEffect, useState } from 'react';

import ServiceCard from '../component/ServiceCard';

  const API = "../../Data/ServiceCard.json";

const Services = () => {
    const [cards, setCards] = useState([]);

    const fetchServiceCards = async(url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            if(data.length > 0){
                setCards(data);
            }return(data);
        }catch(e){
            return(e)
        }
    }

    useEffect(()=>{
        fetchServiceCards(API);
    })

    return (
       
        <div id="services" className='mb-4 container mx-auto md:px-8 px-4'>
         
            <div className='text-center text-gray-800 pt-4 pb-8'>
                <h1 className='text-3xl font-semibold uppercase'>Services</h1>
                <p>We provide the best in class services for our customers</p>
            </div>
            <div className=''> 
            
                <ServiceCard cards={cards} />
            
            </div>

        </div>
    );
};

export default Services;