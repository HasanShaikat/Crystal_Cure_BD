
const About = () => {
    return (
        <div className='container mx-auto px-6 md:px-4 py-4' id='about'>
            <h1 className='text-center uppercase text-3xl'>About us</h1>
            <div className='grid md:grid-cols-2 gap-4 pt-6'>
                <div className='flex justify-center'>
                    <img src="../images/man-pest.png" alt="" className=''/>
                </div>
                <div className='text-justify '>
                    <span className='font-regular text-lg '>
                    Crystal Cure Pest Control is a dedicated and reliable pest management service that aims to provide comprehensive solutions for residential and commercial spaces. With a focus on quality and customer satisfaction, our expert team employs modern and eco-friendly methods to address and eliminate various pest issues.
                    <br /> <br />

                    We understand that each pest problem is unique, which is why our approach is personalized to suit the specific needs of our clients. From common household pests like ants, cockroaches, and rodents to more complex issues involving termites or bed bugs, we are equipped to handle a wide range of infestations.
                    <br /> <br />

                    Our services are not just about extermination but also about prevention. We believe in educating our clients about proactive measures to prevent future infestations. Crystal Cure Pest Control is committed to creating pest-free environments, ensuring the safety and well-being of our customers.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;