import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MobileMenu = ({ setMobileMenu }) => {
    const [data,setData] = useState([
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "Education", url: "/education" },
        { id: 3, name: "Experience",  url:'/experience'},
        { id: 4, name: "About", url: '/about'},
        { id: 5, name: "Skills", url: '/skills'},
        { id: 7, name: "Contact", url: '/contact'},
    ])
    const menuvar= {
        initial:{
            scaleY:0,
        },
        animate:{
            scaleY:1,
            transition :{
                duration:0.5,
                ease:[0.12, 0 , 0.39, 0]
            }
        },
        exit:{
            scaleY:0,
            transition :{
                duration:1,
                ease:[0.22, 1 , 0.36, 1]
            }
        }
    }
    const linkvar={
        initial:{
            y:"30vh",
            transition:{
                duration:0.5
            }
        },
        open:{
            y:0,
            transition:{
                duration:0.7
            }
        }
    }
    return (
        <motion.div variants={menuvar} initial='initial' animate='animate' exit='exit'  className='lg:hidden font-bold bg-white text-black border-t absolute top-[50px] left-0 w-full h-screen' >
            <motion.ul initial={{y:-100, opacity:0}} animate={{y:1,opacity:1}} transition={{delay:1}}   className='flex flex-col'>
        {
            data.map(item=>(
                            <motion.li variants={linkvar} initial='initial' animate='open' transition={{delay:1}} key={item.id}  className='py-4 px-5 border-b'>
                                <Link to={item?.url+''} onClick={()=>setMobileMenu(false)} >
                                     {item.name}
                                      </Link>
                            </motion.li>
            ))
        }
            </motion.ul>
        </motion.div>    
  )
}

export default MobileMenu;