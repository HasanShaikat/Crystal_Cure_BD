import { Carousel, Typography } from "@material-tailwind/react";
import './Banner.css'
const Banner = () => {
    return (
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
              Keep pests under control, stay better.
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