import React from 'react'
import UniImage from '../assets/uni.webp'
import College from '../assets/college.png'
import { motion } from 'framer-motion'
const Edu = () => {
    const mainVariant = {
        initial:{opacity:0,x:100},
        animation:{opacity:1,x:0},
        exit:{opacity:0,x:-100},
      }
  return (
    <motion.div variants={mainVariant} initial="initial" animate="animation" exit="exit" transition={{ duration:0.5}} className='py-10 bg-[#e6e6e6] w-full min-h-[90vh]'>
        <div className='w-[90%] mx-auto my-4'>
        <motion.h1 className=' text-[#002057] font-bold leading-loose text-[30px] text-center'>My Education</motion.h1>
            <div className=' mt-10 flex flex-col gap-8 '>
            <motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1, type:'tween', duration:1}} className='rounded-md  flex flex-col md:flex-row gap-4 md:h-[200px] w-full md:w-[80%] md:mx-auto bg-white md:py-2 px-4 py-4 md:px-3'>
                <img src={UniImage} alt="University" className='md:h-full md:w-[200px] w-full h-[200px]  rounded-l-md rounded-bl-md object-contain' />
                <div className='py-4 px-4'>
                    <h2 className='text-[#002057] font-bold leading-loose text-[22px] '>Bachelor of Science in Software Engineering</h2>
                    <p className='leading-tight font-semibold'>COMSATS University Islamabad | Pakistan</p>
                    <br />
                    <p className='font-bold text-lg text-green-700'>2017-2022 | Completed</p>
                </div>
            </motion.div> 
            <motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:2, type:'tween', duration:1}} className='rounded-md  flex flex-col md:flex-row gap-4 md:h-[200px] w-full md:w-[80%] md:mx-auto bg-white md:py-2 py-4 md:px-3 px-4'>
                <img src={College} alt="College" className='md:h-full md:w-[200px] w-full h-[200px]  rounded-l-md rounded-bl-md object-contain' />
                <div className='py-4 md:px-4'>
                    <h2 className='text-[#002057] font-bold leading-loose text-[22px] '>Intermediate in Computer Science</h2>
                    <p className='leading-tight font-semibold'>Kallar Kahar Science College | Pakistan</p>
                    <br />
                    <p className='font-bold text-lg text-green-700'>2015-2017 | Completed</p>
                </div>
            </motion.div> 
            
            </div>
        </div>
    </motion.div>
  )
}

export default Edu