import React from 'react';
import './Banner.css'
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <div className="bg-black text-gradient   text-white p-8 text-center">
        <h1 className="lg:text-5xl md:text-3xl sm:text-3xl  font-semibold mb-2">Maximize Your Potential with Our Soft </h1>
        <Slide triggerOnce>
        <h1 className="lg:text-4xl sm:text-3xl font-bold mb-2 mt-6" style={{ background: 'linear-gradient(45deg, #2CD4F8,#9747FF,)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Skills Courses!</h1>
        </Slide>
        <p className='mb-3 font-thin text-md mt-6'>Discover the key to unlocking your full potential through our comprehensive soft skills courses. Elevate your<br/> career prospects, enhance personal growth, and excel in every aspect of life. </p>
        <div>
          <Link
          className=" border-gradient inline-block text-md mt-8   font-thin text-white pt-4 px-6  btn border rounded-full transition duration-300 "
        >Get Started
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;