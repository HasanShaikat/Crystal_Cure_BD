import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const Services = () => {
    return (
        <div id='services' className='mb-2'>
            <h1 className='text-3xl py-4 font-semibold text-center uppercase text-gray-800 mb-4'>Services</h1>

            <div className='container mx-auto md:px-8 sm:px-4 grid grid-cols-1 md:grid-cols-3 max-w-full h-auto gap-y-4 gap-x-4 justify-items-center md:justify-between'>                
                
                <Card className="mt-6 hover:shadow">
                    <CardHeader color="" className="relative h-56">
                        <img className='h-56 lg:w-8/12 sm:w-1/2 md:w-fit mx-auto'
                        src="../images/bed-bugs.png"
                        alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" className="mb-2 text-gray-800 uppercase">
                        Bed Bugs
                        </Typography>
                        <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button className='bg-red-800'>Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="mt-6 hover:shadow">
                    <CardHeader className="relative h-56">
                        <img className='h-56 lg:w-8/12 sm:w-1/2 md:w-fit mx-auto'
                        src="../images/termite.png"
                        alt="card-image" 
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" className="mb-2 text-gray-800">
                        Termites
                        </Typography>
                        <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button className='bg-red-800'>Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="mt-6 hover:shadow">
                    <CardHeader className="relative h-56">
                        <img className='h-56 lg:w-8/12 sm:w-1/2 md:w-fit mx-auto'
                        src="../images/cockroach.png"
                        alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" className="mb-2 text-gray-800 uppercase">
                        Cockroach
                        </Typography>
                        <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button className='bg-red-800'>Read More</Button>
                    </CardFooter>
                </Card>
                
                <Card className="mt-6 hover:shadow">
                    <CardHeader color="" className="relative h-56">
                        <img className='h-56 lg:w-8/12 sm:w-1/2 md:w-fit mx-auto'
                        src="../images/rat.png"
                        alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5"  className="mb-2 text-gray-800 upprcase">
                        Rat
                        </Typography>
                        <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button className='bg-red-800'>Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="mt-6 hover:shadow">
                    <CardHeader className="relative h-56">
                        <img className='h-56 lg:w-8/12 sm:w-1/2 md:w-fit mx-auto'
                        src="../images/mosquito.png"
                        alt="card-image" 
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" className="mb-2 text-gray-800 uppercase">
                        Mosquito
                        </Typography>
                        <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button className='bg-red-800'>Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="mt-6 hover:shadow">
                    <CardHeader className="relative h-56">
                        <img className='h-56 lg:w-8/12 sm:w-1/2 md:w-fit mx-auto'
                        src="../images/flies.png"
                        alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5"  className="mb-2 text-gray-800 uppercase">
                        Flies
                        </Typography>
                        <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button className='bg-red-800'>Read More</Button>
                    </CardFooter>
                </Card>
                
            </div>
        </div>
    );
};

export default Services;