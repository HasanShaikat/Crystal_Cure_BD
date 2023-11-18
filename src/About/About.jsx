
const About = () => {
    return (
        <div className='container mx-auto px-6 md:px-4 py-4' id='about'>
            <h1 className='text-3xl py-4 font-semibold text-center uppercase text-gray-800'>About Crystal Cure</h1> 
            <div className='grid md:grid-cols-2 gap-4 pt-6'>
                <div className='flex justify-center'>
                    <img src="../images/man-pest.png" alt="" className=''/>
                </div>
                <div className='text-justify '>
                    <p className='font-regular text-md text-gray-800 '>
                    <span className="font-semibold">Crystal Cure Pest Control</span> since 2019.
                    <br /> <br />
                    <span className="font-semibold">Crystal Cure Pest Control</span> is a dedicated and reliable pest management service that aims to provide comprehensive solutions for residential and commercial spaces. With a focus on quality and customer satisfaction, Your satisfaction is our priority. our expert team employs modern and eco-friendly methods to address and eliminate various pest issues.
                    <br /> <br />

                    We understand that each pest problem is unique, which is why our approach is personalized to suit the specific needs of our clients. From common household pests like ants, cockroaches, and rodents to more complex issues involving termites or bed bugs, we are equipped to handle a wide range of infestations.
                    <br /> <br />

                    Our services are not just about extermination but also about prevention. We believe in educating our clients about proactive measures to prevent future infestations. <span className="font-semibold">Crystal Cure Pest Control</span> is committed to creating pest-free environments, ensuring the safety and well-being of our customers.

                    <br /><br />
                    No hidden surprises. <span className="font-semibold">Crystal Cure</span> maintains transparent communication throughout the process, from the initial inspection to the final treatment, keeping you informed every step of the way.
                    <br /><br />
                    <em>Thank you</em> <br />
                    <em className="font-bold">Crystal Cure Pest Control</em>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;