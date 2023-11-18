import { Button, Carousel, Typography } from "@material-tailwind/react";
import './Banner.css'
const Banner = () => {
    return (
        // <div className="flex justify-between">
        //     <div className="w-full">
        //         <h2>Crystal Cure Pest Control</h2>
        //         <p>
        //         Crystal Cure Pest Control is committed to creating pest-free environments, ensuring the safety and well-being of our customers.
        //         </p>
        //     </div>
        //     <div className="w-full">
        //         <img src="../../images/banner.jpg" alt=""/>
        //     </div>
        // </div>


        // <div className="grid grid-cols-2 justify-between gap-x-4">
        //     <div className="pl-12">
        //         <div>
                    
        //             <Typography variant="h3">Crystal Cure Pest Control</Typography>
        //             <span>Keep pests under control, stay better.</span>
        //         </div>
        //         <p className="py-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nam qui magni nemo, molestias dolorem harum, quam eaque quas ex architecto, suscipit esse soluta laborum?</p>
        //         <button>+880 19044 80448</button>
        //     </div>
        //     <div>
        //         <img className="object-container w-full h-full" src="../../images/Web-banner.jpg" alt=""/>
        //     </div>
        // </div>

        // <div>
        //     <img src="../images/Crystal Cure Pest Control.png" alt="Banner Image" />
        // </div>

<section className="w-full">
<Carousel autoplay>
<div className="relative">
  <img
    src="../images/rat.jpg"
    alt="image 1"
    className="w-full object-cover"
  />
  <div className="absolute inset-0 grid w-full place-items-center bg-black/40 overflow-auto">
    <div className="px-2 text-center grid grid-cols-1">
      <Typography
        variant="h1"
        color="white"
        className="mb-2 md:mb-4 text-lg md:text-3xl lg:text-4xl"
      >
        Crystal Cure Pest Control
      </Typography>
      <Typography
        variant="lead"
        color="white"
        className="mb-2 md:mb-8 opacity-80 text-md content-hidden"
      >
        Crystal Cure Pest Control is a best pest Service company in Bangladesh. Since 2019
      </Typography>
        <Typography size="lg" color="white" variant="h4">
          +880 19044 80448
        </Typography>
      
    </div>
  </div>
</div>
<div className="relative">
  <img
    src="../images/banner2.jpg"
    alt="image 1"
    className="w-full object-cover"
  />
  <div className="absolute inset-0 grid w-full place-items-center bg-black/40 overflow-auto">
    <div className="px-2 text-center grid grid-cols-1">
      <Typography
        variant="h1"
        color="white"
        className="mb-2 md:mb-4 text-lg md:text-3xl lg:text-4xl"
      >
        Crystal Cure Pest Control
      </Typography>
      <Typography
        variant="lead"
        color="white"
        className="mb-2 md:mb-8 opacity-80 text-md content-hidden"
      >
        Crystal Cure Pest Control is a best pest Service company in Bangladesh. Since 2019
      </Typography>
        <Typography size="lg" color="white" variant="h4">
          +880 19044 80448
        </Typography>
      
    </div>
  </div>
</div>


</Carousel>
</section>

    );
};

export default Banner;