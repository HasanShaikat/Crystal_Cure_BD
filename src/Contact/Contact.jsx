import { Button, Input, Textarea } from "@material-tailwind/react";
import { useRef, useState } from "react";

const Contact = () => {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbw9xMkIezDFQqMIFCq4Vii1xKm1zZ-1XQpqFbyWzvUolyeCgx3WY0jzCkRcp5Rf_DDj/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(formRef.current)

    }).then(res =>
            setLoading(false)
        )
        .catch(err => console.log(err))
    }
    return (
        <section className="my-4" id='contact'>
            <div className="text-center my-4">
                <h1 className='text-3xl font-semibold uppercase text-gray-800'>Get In Touch</h1>
                <p className="text-gray-600">Ask How We Can Help You!</p>
            </div>          
            
            <div className="grid md:grid-cols-2 gap-4 container mx-auto items-center px-4">
                <form ref={formRef} onSubmit={handleSubmit} name="google-sheet" className="grid gap-4 h-full">
                    <div className="flex w-full flex-col gap-6">
                        <Input name="Name" type="text" label="Name" required />
                    </div>
                    <div className="flex w-full flex-col gap-6">
                        <Input name="Email" type="email" label="Email" required/>
                    </div>
                    <div className="flex w-full flex-col gap-6">
                        <Input type="number" name="Phone" label="Phone" required/>
                    </div>
                    <div className="flex w-full flex-col gap-6">
                        <Textarea name="Message" type="text" label="Message" required />
                    </div>
                    <div className="flex gap-6">
                        <Button value={loading ? "Loading..." : "Submit"} type="submit" variant="outlined" color="green" className="text-md w-full">Submit</Button>
                        <Button type="reset" variant="outlined" color="green" className="text-md w-full">Reset Form</Button>
                    </div>

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