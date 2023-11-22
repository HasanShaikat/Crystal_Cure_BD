import { MdFacebook } from "react-icons/md";
import { RiLinkedinFill, RiArrowUpDoubleLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";


const Footer = () => {

 
    return (
        <div className='text-gray-800 mt-4'>
            
            <div className='container mx-auto px-8 grid md:grid-cols-3 gap-6 items-center'>
                <div className="mt-4">
                    <img src="../images/about.png" alt="" />
                </div>

                <div className="text-justify grid gap-6">
                    <h3 className="font-bold text-lg">
                    Why Choose Crystal Cure?
                    </h3>
                    <p className="text-gray-600">At <span className="font-bold">Crystal Cure Pest Control</span>, we understand that the well-being of your home and business is paramount. <br />We don&apos;t believe in one-size-fits-all solutions. Every pest problem is unique, and our expert team tailors our services to meet your specific needs.</p>
                    <p className="text-gray-600">We stand by the quality of our services. Crystal Cure offers guarantees and follow-up inspections to ensure the long-term effectiveness of our pest control solutions.</p>
                </div>


                <div className='grid grid-cols-1 gap-y-12 mt-4'>
                        <img className="object-cover" src="../images/map.png" alt="Google Map" />
                        
                        <div className='flex justify-between'>
                            <div className='flex gap-x-8 text-3xl'>
                                <a href="https://www.facebook.com/ccpcsbd" target="blank" ><MdFacebook className="text-blue-600 rounded-full"/></a> 
                                <a href="https://www.linkedin.com/in/crystal-cure-pest-control/" target="blank"><RiLinkedinFill className="text-blue-800"/></a>
                                <a href="https://mail.google.com/" target="blank"><BiLogoGmail className="text-red-700"/></a>
                            </div>
                            <div className='border rounded-full p-2 shadow-xl'>
                                <a href="#">
                                    <RiArrowUpDoubleLine className="animate-bounce w-8 h-8 pt-2 scroll-smooth"></RiArrowUpDoubleLine>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="bg-red-900 text-center text-white py-2 ">
                <span>Copyright &copy; 2023 Design by <a href="https://www.linkedin.com/in/mehedi910/" target="blank" className="font-bold  italic uppercase"> Mehedi Hasan </a> </span>
            </div>
        </div>
    );
};

export default Footer;