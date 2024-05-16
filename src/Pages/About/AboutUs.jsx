import React from 'react';
import img from '../../assets/Image (1).png'
import img2 from '../../assets/Image (2).png'


const AboutUs = () => {
    return (
        <div className='bg-slate-950'>
            <div className='md:flex bg-slate-950 p-10 mt-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={img} alt="" />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <h2 className='text-3xl text-white font-bold mb-10 mt-4'>The Integrated Power of<br /> Soft Skills</h2>
                    <p className='text-lg  text-white lg:mr-10'>Soft skills are not solitary entities; they are interwoven threads in the fabric of personal and professional success. In today's dynamic world, the ability to seamlessly integrate various soft skills is paramount. It's not just about excelling in one area; it's about harnessing the collective power of multiple skills to navigate diverse challenges and opportunities.
                        Moreover, soft skills extend beyond the workplace—they enrich every facet of life. Whether it's fostering strong relationships, resolving conflicts amicably, or navigating life's complexities with grace, the integrated power of soft skills enhances your overall well-being. By embracing this holistic approach, each skill complements and strengthens the others, unlocking vast possibilities for growth. So, invest in cultivating this diverse skill set to witness remarkable personal and professional development.</p>
                </div>
            </div>
            <div className='md:flex bg-slate-950 p-8'>
                <div className='lg:w-1/2 w-full'>
                    <h2 className='text-3xl text-white font-bold mb-10 mt-4'>Embrace Growth, Enrich Your Journey!</h2>
                    <p className='text-lg  text-white lg:mr-10'>As you embark on your journey to excel in soft skills, remember that every step forward enriches your professional and personal life. Embrace the opportunity for growth and development that soft skills training offers. By honing your communication, leadership, and problem-solving skills, and fostering empathy and adaptability in your interactions, you not only enhance your career prospects but also enrich your journey through life. Seize the moment, embrace growth, and embark on a path towards greater success and fulfillment.</p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <img src={img2} alt="" />
                </div>

            </div>

        </div>
    );
};

export default AboutUs;