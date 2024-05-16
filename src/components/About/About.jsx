import React from 'react';
import img from '../../assets/Image.png'
const About = () => {
    return (
        <div className='md:flex bg-slate-950 p-8'>
            <div className='w-1/2'>
                <h1 className='font-bold mb-3 text-lg' style={{ background: 'linear-gradient(45deg, #2CD4F8,#9747FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>- About us</h1>
                <h2 className='text-3xl text-white font-bold mb-10 mt-4'>Navigate Work<br /> Dynamics</h2>
                <p className='text-lg text-white mr-10'>In the complexity of today's workplace, effective communication acts as your guiding light. It's not merely about conveying information; it's about crafting connections and fostering understanding. Our soft skills courses delve deep into the art of communication, equipping you with the tools to navigate diverse work dynamics with finesse. Learn to articulate your ideas with clarity, listen attentively to others, and communicate persuasively to influence outcomes. Whether in meetings, presentations, or daily interactions, harness the power of communication to propel your career forward.</p>
            </div>
            <div className='w-1/2'>
                <img src={img} alt="" />
            </div>

        </div>
    );
};

export default About;