import React, {useState, useEffect} from 'react'
import Typewriter from '../components/Typewriter/Typewriter';
import { FaLinkedinIn, FaGithub, FaGoogle } from "react-icons/fa";
import ProfileImage from '../assets/rajab.gif'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Home = () => {
  const mainVariant = {
    initial:{opacity:0,x:100},
    animation:{opacity:1,x:0},
    exit:{opacity:0,x:-100},
  }
  return (
    <motion.div variants={mainVariant} initial="initial" animate="animation" exit="exit" transition={{duration:0.5}} className='py-10 bg-[#e6e6e6] w-full min-h-[90vh]  '>
        <div className='w-[90%] mx-auto my-5 flex gap-4 lg:justify-around  items-center flex-col-reverse lg:flex-row '>
            <motion.div initial={{x:-50, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1, type:'tween', duration:0.5}}  className='mt-10 md:mt-16'>
                <h1 className='text-[#002057] font-bold leading-loose text-[30px] md:text-[40px] '>Hey There,</h1>
                <h2 className='mt-[-16px] text-[#002057] font-bold leading-loose text-[30px] md:text-[40px]'>I'm Ali, <span className='text-[#FF7B00] '> Chaudhry Rajab </span> </h2>
                <div className='flex items-center gap-2'>
                    <p className='text-[20px] md:text-[26px] '>I am into </p> 
                    <Typewriter  />
                </div>
            
                <div className='mt-4 mx-auto flex gap-6 items-center '>
                <Link to={'http://www.linkedin.com/in/ch-rajab-ali'}  >
                <motion.div whileHover={{scale:1.25}} whileTap={{scale:0.9}}  className='p-3 rounded-full text-center bg-black hover:bg-blue-500 cursor-pointer'>
                 <FaLinkedinIn  className='text-white' />
                </motion.div>
                </Link>

                <Link  to={'https://github.com/Rajab-Ali'} >
                  <motion.div whileHover={{scale:1.25}} whileTap={{scale:0.9}}  className='p-3 rounded-full text-center bg-black hover:bg-blue-500 cursor-pointer'>
                    <FaGithub  className='text-white' />
                  </motion.div>
                </Link>    
            
                <Link to={''} >
                <motion.div whileHover={{scale:1.25}} whileTap={{scale:0.9}}  className='p-3 rounded-full text-center bg-black hover:bg-blue-500 cursor-pointer'>
                <FaGoogle  className='text-white' />
                </motion.div>
                </Link> 
                </div>
            </motion.div>
            < motion.img initial={{scale:0}} animate={{scale:1}} transition={{delay:1.7,type:'tween', duration:0.5 }} src={ProfileImage} alt='Image'  className=' md:mt-10 sm:w-[370px] sm:h-[370px] rounded-full' />

        </div>
    </motion.div>
  )
}

export default Home