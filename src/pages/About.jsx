import React from 'react'
import AboutMe from '../assets/rajabimage.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const About = () => {
    const mainVariant = {
        initial:{opacity:0,x:100},
        animation:{opacity:1,x:0},
        exit:{opacity:0,x:-100},
      }
  return (
    <motion.div  variants={mainVariant} initial="initial" animate="animation" exit="exit" transition={{ duration:0.5}}  className='py-10 bg-[#e6e6e6] w-full min-h-[90vh]' >
        <div className='w-[90%] mx-auto'>
            <h1 className='text-[#002057] font-bold leading-loose text-[34px] text-center pb-10'>About Me</h1>
             <div className='my-10 flex flex-col lg:flex-row md:gap-12 items-center lg:items-start w-full md:w-[80%] md:mx-auto '>
                <motion.img initial={{scale:0, y:100}} animate={{scale:1, y:0}} transition={{delay:1, type:'tween', duration:1}}  src={AboutMe} alt="About Me image" className=' md:w-[350px] md:h-[350px] object-cover rounded-lg md:mt-16 ' />
                <motion.div inherit={{y:200, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:1.3, type:'tween', duration:0.5}}  className='py-6 px-3 '>
                    <h2 className='text-center font-bold leading-loose text-[22px]'> I'm Ali, Chaudhry Rajab </h2>
                    <p className='mt-4 font-semibold text-sm'>
                    A passionate web developer with a year of hands-on experience in the dynamic world of web development. Armed with a Bachelor's degree in Software Engineering from COMSATS Islamabad, Pakistan, I've honed my skills in crafting engaging and user-friendly web applications. My expertise lies in the intricacies of JavaScript frameworks, particularly React and Vue, where I leverage my knowledge to create seamless and responsive user interfaces.
                    </p>
    <p className=' mt-2 font-semibold text-sm'>
My journey in the realm of technology began at COMSATS, where I cultivated a solid foundation in software engineering. Since then, I've been on an exciting adventure, exploring the ever-evolving landscape of web development. I thrive on staying up-to-date with the latest trends and technologies, ensuring that my projects are not just functional but also at the forefront of innovation.
</p>
<p className='mt-2 mb-4 font-semibold text-sm' >
In my spare time, you'll find me immersed in coding challenges, contributing to open-source projects, or simply enjoying a cup of coffee while brainstorming new ideas for my next web endeavor. I believe in the power of collaboration and continuous learning, and I'm always excited to take on new challenges that push the boundaries of what's possible in the digital space.

                    </p>

                    <p className='font-semibold mt-8'>
                        Let's build the future of the web together! 🚀
                    </p>
                    <p className='font-semibold text-blue-600 my-3 '>Email: <span className='ml-3 text-black font-normal'>chrajabali810@gmail.com</span> </p>
                    <br />
                    
                    <Link  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to={'https://drive.google.com/drive/folders/1SXQij215kc5nWNK_5ssjzvhYLCFerFnX?usp=sharing'} >Resume</Link>
                </motion.div>
            </div>
        </div>
    </motion.div>
  )
}

export default About