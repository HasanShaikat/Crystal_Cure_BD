import { MdFacebook } from "react-icons/md";
import { RiLinkedinFill, RiArrowUpDoubleLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";


// let form = document.querySelector("form");
// form.addEventListener('submit', (e)=>{
// e.preventDefault();
// let data = new FormData(form);
// fetch('https://script.google.com/macros/s/AKfycbyLTAyihyBp0NqOs4OLoSu_1G9EAcWKmDuS602vG6HMo8j0aS7SRluPc-3gjDhY2OW9KQ/exec',{
//   method: "POST",
//   body: data
// })
// .then(res => res.text())
// .then(data => console.log(data))
// })

const Footer = () => {

 
    return (
        <div className='text-gray-800 mt-4' id='contact'>
            
            <div className='container mx-auto px-8 grid md:grid-cols-3 gap--4 items-center'>
                <div className="mt-4">
                    <img src="../images/about.png" alt="" />
                </div>

                <div>
                    <p>another one</p>
                </div>


                <div className='grid grid-cols-1 gap-y-12 mt-4'>
                        {/* <img className="" src="../images/map.png" alt="Google Map" /> */}
                        <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1085.3814106298078!2d90.38046187111321!3d23.791084018843968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1699819257057!5m2!1sen!2sbd" style={{border:0, width:"auto", height:"auto"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-x-8 text-3xl'>
                                <a href="https://www.facebook.com/ccpcsbd" target="blank" ><MdFacebook className="text-blue-600"/></a> 
                                <a href="https://www.linkedin.com/in/crystal-cure-pest-control-9654a328b/" target="blank"><RiLinkedinFill className="text-blue-800"/></a>
                                <a href="https://mail.google.com/" target="blank"><BiLogoGmail className="text-red-700"/></a>
                            </div>
                            <div className='border rounded-full p-2 shadow-xl'>
                                <a href="#" className=''>
                                    <RiArrowUpDoubleLine className="text-4xl text-red-600 bg-white rounded-full p-2"></RiArrowUpDoubleLine>
                                </a>
                            </div>

                        </div>
                        
                    </div>
            </div>

            <div className="bg-red-700 text-center text-white py-2">
                <span>Copyright &copy; 2023 Design by <a href="https://www.linkedin.com/in/mehedi910/" target="blank" className="font-bold  italic uppercase"> Mehedi Hasan </a> </span>
            </div>
        </div>
    );
};

export default Footer;