// import React from 'react';
// import { MdFacebook } from "react-icons/md";
// import { RiLinkedinFill, RiGlobalLine, RiArrowUpDoubleLine } from "react-icons/ri";



// const Contact = () => {
//     return (
//         <div className='shadow bg-red-800 text-white pt-6'>
            
//             <div className='container mx-auto px-8 grid md:grid-cols-3 gap-y-4 gap-x-8'>
//                 <div>
//                     <img src="../images/about.png" alt="" />
//                 </div>

//                 <div>
//                     <form action="" className="relative h-15 w-full min-w-[200px] grid gap-y-6">

//                         <div className=''>
//                         <input
//                         className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-2 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                         placeholder=" "
//                         />
//                         <label className="after:content[' '] pointer-events-none absolute left-0 -top-3 flex h-10 w-full select-none text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//                         Name
//                         </label>
//                         </div>

//                         <div className=''>
//                         <input
//                         className="peer h-full w-full border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                         type='email'
//                         placeholder=" "
//                         required
//                         />
//                         <label className="after:content[' '] pointer-events-none absolute left-0 top-12 flex h-11 w-full select-none text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-3.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white">
//                         Email
//                         </label>
//                         </div>

//                         <div className=''>
//                         <textarea
//                         className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                         type='email'
//                         placeholder=" "
//                         required
//                         />
//                         <label className="after:content[' '] pointer-events-none absolute left-0 top-28 flex h-11 w-full select-none text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-11 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//                         Message 
//                         </label>
//                         </div>
//                         <button type="submit" className='text-red-600 bg-white py-2 rounded text-lg uppercase tracking-widest font-semibold'>Submit</button>

//                     </form>
//                 </div>

//                 <div className='grid gap-y-4'>
//                     <div>
//                         <h4>Mail Address</h4>
//                         <span>crystalcurebd@gmail.com</span>
//                     </div>
//                     <div>
//                         <h4>Phone</h4>
//                         <span>+880 1904480448</span>
//                     </div>
//                     <div>
//                         <h4>Address</h4>
//                         <span>678/5-A, West Shewrapara, Dhaka, Bangladesh</span>
//                     </div>
//                     <div className='flex justify-between'>
//                         <div className='flex gap-x-4 text-2xl'>
//                             <a href="facebook.com"><MdFacebook/></a> 
//                             <a href="#"><RiLinkedinFill/></a>
//                             <a href="#"><RiGlobalLine/></a>
//                         </div>
//                         <div className=''>
//                             <a href="#" className=''>
//                                 <RiArrowUpDoubleLine className="text-4xl text-red-600 bg-white rounded-full p-2"></RiArrowUpDoubleLine>
//                             </a>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;
import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto md:px-4 grid md:grid-cols-2 gap-4 '>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7565545506723!2d90.37825732199892!3d23.791681886043442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7299f13f157%3A0x1b50d5f6bce59656!2sIbrahimpur%20nahar%20bakery%2Cnorth%20kafrul!5e0!3m2!1sen!2sbd!4v1693833297265!5m2!1sen!2sbd" className='w-full mt-4' height={"400px"} allowFullScreen="" loading="lazy"></iframe>
            <img src="../images/contact.png" alt="" />
        </div>
    );
};

export default Contact;