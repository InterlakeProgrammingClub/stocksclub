import React from 'react';
import { motion } from 'framer-motion';
import headerimg from '../assets/headerimg.jpg';
import bg2 from '../assets/headerimg.jpg';

const Home = () => {
  return (
    <div className="text-center" style={{ fontFamily: 'Poppins' }}>
      <motion.div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${headerimg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center sm:items-start sm:pl-14 sm:pr-10 sm:py-20">
          <h1 className="text-white text-6xl font-bold text-center sm:text-left mr-2 px-3 pb-2" >
            Your Club Name
          </h1>
          <h3 className="text-white  text-2xl pr-2 mb-4 text-center sm:text-left" >
            A short bio about your<span className='italic'> specific club</span>.
          </h3>
          <motion.div
            whileHover={{ scale: 1.1, translateZ: 50, perspective: 1000, boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.4)", transition: { duration: 0.2 } }}
            className="inline-block mb-4 text-center sm:text-left"
          >
            <a href="" className="bg-white text-[#0C2340] px-4 py-2 rounded font-bold flex items-center space-x-1 text-xl">
              <span>An action button for your club</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col pb-6">
          <h3 className="text-white text-3xl font-bold px-4 mt-8 text-center underline underline-offset-2" >
            Our leadership team:
          </h3>
          <ul className=''>
            <li className="text-white text-lg font-bold px-4 mt-4 text-center"> President: Name of President</li>
            <li className="text-white text-lg font-bold px-4 mt-4 text-center"> Vice President: Name of Vice President</li>
            <li className="text-white text-lg font-bold px-4 mt-4 text-center"> Secretary: Name of Secretary</li>
            <li className="text-white text-lg font-bold px-4 mt-4 text-center"> Treasurer: Name of Treasurer</li>
            <li className="text-white text-lg font-bold px-4 mt-4 text-center"> Add or remove as many as you'd like</li>
          </ul>
          <motion.div
            whileHover={{ scale: 1.1, translateZ: 50, perspective: 1000, boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.4)", transition: { duration: 0.2 } }}
            className="inline-block mb-4 text-center sm:text-left"
          >
            <a href="" className="bg-white text-[#0C2340] px-3 py-2 rounded font-bold flex items-center space-x-1 text-lg mt-0">
              <span>Another action button</span>
            </a>
          </motion.div>
          
        </div>
      </motion.div>
    </div>

  );
};

export default Home;
