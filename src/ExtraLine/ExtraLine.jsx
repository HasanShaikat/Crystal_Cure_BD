import { MdCall } from "react-icons/md";

const ExtraLine = () => {
    return (
        <div className='bg-red-800 py-4 text-white font-semibold'>
 
          <div className='container mx-auto  grid grid-cols-1 md:grid-cols-2 text-center px-2'>
          <span className="flex justify-center items-center gap-2"><MdCall className="text-lg"></MdCall>  Call Now :  +880 189197 1990 / +880 190448 0448</span>

          <span>crystalcurebd@gmail.com</span>
          </div>
       
        </div>
    );
};

export default ExtraLine;