import { Button, Input, Textarea } from "@material-tailwind/react";

const Contact = () => {
    return (
        <section className="my-4" id='contact'>
            <div className="text-center my-4">
                <h1 className='text-3xl font-semibold uppercase text-gray-800'>Get In Touch</h1>
                <p className="text-gray-600">Ask How We Can Help You!</p>
            </div>          
            
            <div className="grid md:grid-cols-2 gap-4 container mx-auto items-center px-4">
                <form className="grid gap-4 h-full">
                    <div className="flex w-full flex-col gap-6">
                        <Input name="name" type="text" label="Name" required />
                    </div>
                    <div className="flex w-full flex-col gap-6">
                        <Input name="email" type="email" label="Email" required/>
                    </div>
                    <div className="flex w-full flex-col gap-6">
                        <Input name="phone " type="tel" label="Phone" required/>
                    </div>
                    <div className="flex w-full flex-col gap-6">
                        <Textarea name="message" type="text" label="Message" required />
                    </div>
                    <Button type="submit" variant="outlined" color="green" className="text-md w-2/4">Submit</Button>

                </form>

                <div className='grid gap-y-8 md:justify-center'>
                        <div>
                            <h4 className='font-bold'>Mail Address</h4>
                            <span>crystalcurebd@gmail.com</span>
                        </div>
                        <div>
                            <h4 className='font-bold'>Phone</h4>
                            <span>+880 1891971990 <br /> +880 1904480448</span>
                        </div>
                        <div>
                            <h4 className='font-bold'>Address</h4>
                            <span>678/5-A, North Kafrul, Kafrul, Dhaka-1206</span>
                        </div>
                        <div>
                            <h4 className='font-bold'>Website</h4>
                            <span>www.ccpestcontrolbd.com</span>
                        </div>
                        
                </div>
            </div>
            

        </section>
    );
};

export default Contact;