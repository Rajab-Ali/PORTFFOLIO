import React from 'react'
import { motion } from 'framer-motion'
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaGoogle } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
    const mainVariant = {
        initial:{opacity:0,x:100},
        animation:{opacity:1,x:0},
        exit:{opacity:0,x:-100},
      }

    return (
    <motion.div  variants={mainVariant} initial="initial" animate="animation" exit="exit" transition={{ duration:0.5}}  className="py-10 bg-[#e6e6e6] w-full min-h-[90vh]">

      <div className="w-full md:w-[80%] mx-auto">
        <h1 className="text-[#002057] font-bold leading-loose text-[34px] text-center pb-10">
          Contact Me
        </h1>
        <motion.div initial={{y:200, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:1, type:'tween'}}  className='w-full md:w-[90%] mx-auto my-10 flex flex-col md:flex-row gap-x-10 gap-y-20 flex-wrap items-center '>
            <div className='bg-white py-4 px-6 flex items-center rounded-lg shadow-lg gap-4 w-[90%] lg:w-[45%]'>
                <MdLocationOn size={40}  color='#002057' />
                <div>
                    <h2 className='font-bold text-[#002057] text-[22px]'>My Address</h2>
                    <p className='font-medium text-[#002057] text-[20px]'>Lai King, Kwai Chung, NT, HONG KONG</p>
                </div>
            </div>
            <div className='bg-white py-4 px-6 flex items-center rounded-lg shadow-lg gap-4 w-[90%] lg:w-[45%]'>
                <IoShareSocialOutline size={40}  color='#002057' />
                <div>
                    <h2 className='font-bold text-[#002057] text-[22px]'>Social Profiles</h2>
                    <div className='mt-4 mx-auto flex gap-6 items-center '>
                <Link target='_blank' to={'http://www.linkedin.com/in/ch-rajab-ali'}  >
                <motion.div whileHover={{scale:1.25}} whileTap={{scale:0.9}}  className='p-3 rounded-full text-center bg-[#002057] hover:bg-blue-500 cursor-pointer'>
                 <FaLinkedinIn  className='text-white' />
                </motion.div>
                </Link>

                <Link target='_blank'  to={'https://github.com/Rajab-Ali'} >
                  <motion.div whileHover={{scale:1.25}} whileTap={{scale:0.9}}  className='p-3 rounded-full text-center bg-[#002057] hover:bg-blue-500 cursor-pointer'>
                    <FaGithub  className='text-white' />
                  </motion.div>
                </Link>    
            
                
                <motion.div 
                onClick={()=>{
                  const toEmail = 'chrajabali810@gmail.com';
                  const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${toEmail}`;
                 window.open(gmailUrl,'_blank')
               }}
                whileHover={{scale:1.25}} whileTap={{scale:0.9}}  className='p-3 rounded-full text-center bg-[#002057] hover:bg-blue-500 cursor-pointer'>
                <FaGoogle  className='text-white' />
                </motion.div>
                
                </div>
                </div>
            </div>
            <div className='bg-white py-4 px-6 flex items-center rounded-lg shadow-lg gap-4 w-[90%] lg:w-[45%]'>
                <MdOutlineEmail size={40}  color='#002057' />
                <div>
                    <h2 className='font-bold text-[#002057] text-[22px]'>My Email Address</h2>
                    <p className='font-medium text-[#002057] text-[20px]'>chrajabali810@gmail.com</p>
                </div>
            </div>
            <div className='bg-white py-4 px-6 flex items-center rounded-lg shadow-lg gap-4 w-[90%] lg:w-[45%]'>
                <FiPhoneCall size={30}  color='#002057' />
                <div>
                    <h2 className='font-bold text-[#002057] text-[22px]'>My Contact No.</h2>
                    <p className='font-medium text-[#002057] text-[20px]'>+852-9137-2700</p>
                </div>
            </div>
        </motion.div>
        </div>
        </motion.div>
  )
}

export default Contact