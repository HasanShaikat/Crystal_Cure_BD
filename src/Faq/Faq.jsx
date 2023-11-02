import { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

const Faq = () => {

    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true);
    
    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);



    return (
        <section className='container mx-auto md:px-4 sm:px-4 w-3/4'>
            <h2 className='text-center my-4 font-bold text-2xl'>FAQ's</h2>
            
                <Accordion open={alwaysOpen} icon={<Icon id={alwaysOpen} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={handleAlwaysOpen}> আমি কেন আপনাদের সেবা নিবো? </AccordionHeader>
                <AccordionBody className="text-md">
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            
        </section>
    );
};


export default Faq;