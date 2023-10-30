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
            }console.log(data);
        }catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        fetchServiceCards(API);
    })

    return (
       
        <div id="services" className='mb-2'>
         
            <h1 className='text-3xl py-4 font-semibold text-center uppercase text-gray-800 mb-4'>Services</h1>

            <div className='container mx-auto md:px-8 sm:px-4'> 
            
                <ServiceCard cards={cards} />
            
            </div>

        </div>
    );
};

export default Services;