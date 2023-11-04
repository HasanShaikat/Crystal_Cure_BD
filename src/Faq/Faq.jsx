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

              <div className='grid md:grid-cols-2 gap-2 items-center'>

              <div>
                <img src="../images/faq.svg" alt=""  />
              </div>
            
                <div>
                <Accordion open={alwaysOpen} icon={<Icon id={alwaysOpen} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={handleAlwaysOpen}> What kinds of pests do you handle? </AccordionHeader>
                <AccordionBody className="text-md">
                Crystal Cure Pest Control deals with a wide range of pests, including but not limited to ants, cockroaches, termites, rodents, bed bugs, mosquitoes, and other common household pests.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                Are your methods safe for children and pets?
                </AccordionHeader>
                <AccordionBody>
                Yes, our methods are safe for children and pets. We utilize eco-friendly and approved solutions to ensure the safety of your family and pets.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                How often do I need pest control services?
                </AccordionHeader>
                <AccordionBody>
                The frequency of pest control services depends on various factors like the type of pest problem, the severity of infestation, and the preventive measures in place. We recommend regular inspections and treatments to maintain a pest-free environment.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 3} icon={<Icon id={3} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                Do you offer a guarantee for your services?
                </AccordionHeader>
                <AccordionBody>
                Yes, we stand by the quality of our services. We offer guarantees and follow-up inspections to ensure the effectiveness of our pest control solutions.
                </AccordionBody>
            </Accordion>
            
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                Are your treatments environmentally friendly?
                </AccordionHeader>
                <AccordionBody>
                Absolutely. We use environmentally friendly methods and products to address pest problems. Our commitment is not only to eliminate pests but also to minimize the impact on the environment.
                </AccordionBody>
            </Accordion>
                </div>

              </div>

        </section>
    );
};


export default Faq;