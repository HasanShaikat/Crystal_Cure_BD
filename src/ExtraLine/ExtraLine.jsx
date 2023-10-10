import React from 'react';
import { MdCall } from "react-icons/md";

const ExtraLine = () => {
    return (
        <div className='bg-red-800 py-4 text-white font-semibold grid md:grid-cols-2 text-center'>
 
          <span className="whitespace-pre ... flex items-center justify-center"><MdCall className="text-lg"></MdCall>  Call Now +880 1891971990, +880 190448 0448</span>

          <span>crystalcurebd@gmail.com</span>
       
        </div>
    );
};

export default ExtraLine;