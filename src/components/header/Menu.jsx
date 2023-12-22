import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Menu = ({setIsHeaderAnimate}) => {
    const [data,setData] = useState([
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "Education", url: "/education" },
        { id: 3, name: "Experience",  url:'/experience'},
        { id: 4, name: "About", url: '/about'},
        { id: 5, name: "Skills", url: '/skills'},
        { id: 7, name: "Contact", url: '/contact'},
    ])
    const [showMenu, setShowMenu] = useState(1)

    return (
    <motion.ul initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} onAnimationComplete={()=>{
        setIsHeaderAnimate(true)
    }}  className='px-3 hidden lg:flex items-center gap-8 font-normal'>
        {
            data.map(item=>(
                
                            <li key={item.id} onClick={()=>{ setShowMenu(item.id)}}  className={`cursor-pointer ${showMenu===item.id?'border-b-2 border-[#011AFF] text-[#011AFF]':'text-black'}`}>
                                <Link to={item?.url+''} >
                                     {item.name} 
                                     </Link>
                            </li>
            ))
        }
    </motion.ul>
  )
}

export default Menu;