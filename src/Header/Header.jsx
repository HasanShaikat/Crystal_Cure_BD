import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { BiPhone } from "react-icons/bi";


 
const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="px-2 md:px-0 mb-4 mt-2 flex flex-col gap-1 md:mb-0 md:mt-0 md:flex-row md:items-center lg:gap-6">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#services" className="flex items-center">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Contact
        </a>
      </Typography>
      <Button variant="gradient" size="lg" className="hidden md:inline-block" color="red">
          <span className="whitespace-pre ... md:text-sm  flex items-center"><BiPhone className="text-lg"></BiPhone>  +880 1904480448</span>
        </Button>
    </ul>
  );
 
  return (
    <Navbar className="border-0 border-spacing-0 sticky top-0 z-10 container rounded-none shadow-none mx-auto py-2 px-4 md:px-8 md:py-4 ">

      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="logo">
            <a href="#" className="flex items-center font-semibold text-gray-800 uppercase">
                <img className="w-24" src="../../images/crystal-cure-final-logo.png" alt="" />
                Crystal Cure Pest Control
            </a>
        </div>
        <div className="hidden md:block">{navList}
        
        </div>
        
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto ">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2 " color="red">
          <span className="whitespace-pre ... flex items-center justify-center"><BiPhone className="text-lg"></BiPhone>  Call Now     +880 190448 0448</span>
          </Button>
        </div>
      </MobileNav>

    </Navbar>
  );
}

export default Header;