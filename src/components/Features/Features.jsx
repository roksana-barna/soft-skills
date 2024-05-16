import React from 'react';
import img1 from '../../assets/Property 1=Industry-Relevant Content.png'
import img2 from '../../assets/Property 1=Real-world Scenarios.png'
import img3 from '../../assets/Property 1=Flexibility.png'
import img4 from '../../assets/Property 1=Diverse Topics.png'

const Features = () => {
  return (
    <div className='bg-black mb-6 p-8 text-center mt-10'>
      <h1  className='font-bold mb-3 text-lg'style={{ background: 'linear-gradient(45deg, #2CD4F8,#9747FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>- Features</h1>
      <h2 className='text-3xl text-white font-bold mb-10'>Explore Our Standout Featuresa</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center ">
        <div className="group text-center bg-slate-950 text-slate-300 p-10 rounded-xl transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
          <img className="text-4xl text-purple-700 lg:ml-52  my-6" src={img4} />
          <h3 className="text-xl font-bold mb-2">Diverse Topics</h3>
          <p className=' mb-3 font-thin text-sm mt-5'>Explore an extensive array of subjects covering essential soft skills, enabling learners to develop a well-rounded skill set and thrive in diverse personal and professional contexts.</p>
        </div>
        <div className="group bg-slate-950 text-slate-300 p-10 rounded-xl transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
          <img className="text-4xl text-purple-700 lg:ml-52  my-6" src={img2} />
          <h3 className="text-xl font-bold mb-2">Real-world Scenarios</h3>
          <p className=' mb-3 font-thin text-sm mt-5'> Immerse yourself in hands-on learning through practical examples that closely mirror real-life situations, ensuring immediate application and retention of skills.</p>
        </div>
        <div className="group bg-slate-950 text-slate-300 p-4 rounded-xl transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
          <img className="text-4xl text-purple-700 lg:ml-56  my-6" src={img1} />
          <h3 className="text-xl font-bold mb-2">Industry-Relevant Content</h3>
          <p className=' mb-3 font-thin text-sm mt-5'>Our curriculum is meticulously crafted to meet the specific demands and challenges of various industries, ensuring that learners gain practical skills that are directly applicable in professional settings.</p>
        </div>
        <div className="group bg-slate-950 text-slate-300 p-10 rounded-xl transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
          <img className="text-4xl text-purple-700 lg:ml-48  my-6 text-center" src={img3} />
          <h3 className="text- xl font-bold mb-2">Flexibility</h3>
          <p className=' mb-3 font-thin text-sm mt-5'>Our courses provide students with a range of flexible options, allowing them to tailor their learning experience to fit their unique schedules and preferences.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;