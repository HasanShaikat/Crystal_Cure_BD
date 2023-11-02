import { MdFacebook } from "react-icons/md";
import { RiLinkedinFill, RiGlobalLine, RiArrowUpDoubleLine } from "react-icons/ri";



const Footer = () => {
    return (
        <div className='shadow bg-white text-gray-800 pt-6'>
            
            <div className='container mx-auto px-8 grid md:grid-cols-3 gap-y-4 gap-x-8 items-center'>
                <div>
                    <img src="../images/about.png" alt="" />
                </div>

                <div>
                    <form action="" className="relative h-15 w-full min-w-[200px] grid gap-y-6">

                        <div className=''>
                        <input
                        className="peer h-full w-full border-b bg-transparent pt-4 pb-2 font-sans text-sm font-normal text-red-500 outline outline-0 transition-all  
                        placeholder-shown:border-red-600 focus:border-red-600 focus:outline-0 disabled:border-0"
                        placeholder=" "
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 -top-3 flex h-10 w-full select-none text-[11px] font-normal leading-tight text-red-500 transition-all after:absolute after:-bottom-3 after:block after:w-full after:scale-x-0 after:border-b-2 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-red-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:after:scale-x-100 peer-focus:after:border-red-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-red-500">
                        Name
                        </label>
                        </div>

                        <div className=''>
                        <input
                        className="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-red-500 outline outline-0 transition-all placeholder-shown:border-red-600 focus:border-red-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        type='email'
                        placeholder=" "
                        required
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 top-12 flex h-11 w-full select-none text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-3.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-red-600 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-red-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:after:scale-x-100 peer-focus:after:border-red-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-red-500">
                        Email
                        </label>
                        </div>

                        <div className=''>
                        <textarea
                        className="peer h-full w-full border-b border-red-600 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-red-500 outline outline-0 transition-all placeholder-shown:border-red-600 focus:border-red-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        required
                        />
                        <label className="after:content[' '] pointer-events-none absolute left-0 top-28 flex h-11 w-full select-none text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-11 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-red-600 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-red-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:after:scale-x-100 peer-focus:after:border-red-600 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-red-500">
                        Message 
                        </label>
                        </div>
                        <button type="submit" className='text-red-600 border border-red-100 py-2 rounded text-lg uppercase tracking-widest font-semibold'>Submit</button>

                    </form>
                </div>

                <div className='grid md:gap-y-2 gap-y-4'>
                    <div>
                        <h4 className='font-bold'>Mail Address</h4>
                        <span>crystalcurebd@gmail.com</span>
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <span>+880 1891971990 <br /> +880 1904480448</span>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <span>678/5-A, West Shewrapara, Dhaka, Bangladesh</span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-x-4 text-2xl'>
                            <a href="facebook.com"><MdFacebook/></a> 
                            <a href="#"><RiLinkedinFill/></a>
                            <a href="#"><RiGlobalLine/></a>
                        </div>
                        <div className='border rounded-full p-2 shadow-xl'>
                            <a href="#" className=''>
                                <RiArrowUpDoubleLine className="text-4xl text-red-600 bg-white rounded-full p-2"></RiArrowUpDoubleLine>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;