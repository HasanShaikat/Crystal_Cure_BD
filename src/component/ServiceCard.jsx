import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
  } from "@material-tailwind/react";
import { useState } from "react";

  
  const ServiceCard = ({cards}) => {
    const [open, setOpen] = useState(false);
      
    const handleOpen = () => setOpen(!open);
      
    
      return (
        <div className="container mx-auto md:px-8 sm:px-4 grid grid-cols-1 md:grid-cols-3 max-w-full h-auto gap-y-4 gap-x-4 justify-items-center md:justify-between">
            {
                cards.map((cards)=>{
                    const {id,img,name,description,button}=cards;
                    return(
                        
                            
                        <Card key={id} className="mt-6 hover:shadow">
                            <CardHeader className="relative h-56">
                                <img className='h-56 lg:w-8/12 sm:w-1/2 md:w-fit mx-auto'
                                src={img}
                                alt="card-image"
                            />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" className="mb-2 text-gray-800 uppercase">
                                    {name}
                                </Typography>
                                    <Typography>
                                        {description}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button className='bg-red-800' onClick={handleOpen}>
                                    {button}
                                    </Button>
                                    {/* <Dialog open={open} handler={handleOpen}animate={{
                                        mount: { scale: 1, y: 0 },
                                        unmount: { scale: 0.9, y: -100 },}}>
                                    <DialogHeader>Its a simple dialog.</DialogHeader>
                                    <DialogBody>
                                    {description}
                                    </DialogBody>
                                    
                                    </Dialog> */}
                                </CardFooter>
                        </Card>
                       
                    )
                })
            }
        </div>
    );
};

export default ServiceCard;