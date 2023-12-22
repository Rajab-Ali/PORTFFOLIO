import React,{useState, useEffect} from 'react'
import {Typewriter as Writer} from 'react-simple-typewriter'
const Typewriter = () => {
    
   
  return (
    <p className=" text-red-700 text-[20px] md:text-[26px] font-semibold">
     <Writer
     words={['Web Development', 'Frontend Development', 'Backend Development','Software designing','Web Designing']}
     loop={0}
     delaySpeed={1000}
     cursor
     cursorBlinking={true}
     cursorStyle='|'
     
     />
    </p>
  );
};

export default Typewriter