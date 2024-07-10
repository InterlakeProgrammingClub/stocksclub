import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import headerimg from '../assets/headerimg.jpg';

const About = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const meetings = [
    {
      date: "#/#/#",
      details: (
        <>
          <p>Talk about what you did in the meeting</p>
        </>
      ),
      image: headerimg,
    },
    {
      date: "#/#/#",
      details: (
        <>
          <p>Talk about what you did in the meeting</p>
        </>
      ),
      image: headerimg,
    },
    {
      date: "#/#/#",
      details: (
        <>
          <p>Talk about what you did in the meeting</p>
        </>
      ),
      image: headerimg,
    },
    {
      date: "#/#/#",
      details: (
        <>
          <p>Talk about what you did in the meeting</p>
        </>
      ),
      image: headerimg,
    },
  ];

  return (
    <div className="text-center">
      <motion.div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${headerimg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-center">
          <h1 className="text-white text-4xl font-bold mb-4 mt-12">About Us</h1>
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } }}
            className="inline-block mb-4"
          >
            <a href="mailto:club@gmail.com" className="bg-[#0C2340] text-white px-4 py-2 rounded font-bold">
              <span>Email or action button</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 underline underline-offset-2">Our Leadership Team:</h2>
        <div className="flex flex-col items-center space-y-4 mb-8">
          <p className="text-lg font-bold">President: Name of President</p>
          <p className="text-lg font-bold">Vice President: Name of Vice President</p>
          <p className="text-lg font-bold">Secretary: Name of Secretary</p>
          <p className="text-lg font-bold">Treasurer: Name of Treasurer</p>
          <p className="text-lg font-bold">Add or remove as many as you'd like</p>
        </div>
        <div className="flex flex-col items-center space-y-4 mb-4">
          <h2 className="text-2xl font-bold underline underline-offset-2">What we do:</h2>
          <p className="text-lg">At our club, we do _______________________________.</p>
        </div>
        <div className="flex flex-col items-center space-y-4 mb-4">
          <h2 className="text-2xl font-bold underline underline-offset-2">When we meet:</h2>
          <p className="text-lg">We meet every _______________________________.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-white px-4 pt-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {meetings.map((meeting, index) => (
            <MeetingOption
              key={index}
              index={index}
              date={meeting.date}
              details={meeting.details}
              image={meeting.image}
              expanded={expanded}
              handleToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const MeetingOption = ({ index, date, details, image, expanded, handleToggle }) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={inViewRef} className="w-full">
      <motion.div
        className="bg-white bg-opacity-25 rounded-md p-4 flex flex-col items-center justify-center text-center hover:bg-opacity-50 transition duration-300 h-40 w-full cursor-pointer"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        whileHover={{
          scale: 1,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        onClick={() => handleToggle(index)}
      >
        <h2 className="text-3xl font-semibold mb-2">{date}</h2>
      </motion.div>
      {expanded === index && (
        <div
          className="bg-white text-black p-4 mt-2 rounded-md"
        >
          {details}
        </div>
      )}
    </div>
  );
};

export default About;
