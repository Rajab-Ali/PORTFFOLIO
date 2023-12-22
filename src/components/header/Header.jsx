import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//images

import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

//components
import Wrapper from "../Wrapper";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import { motion, useAnimation } from "framer-motion";

const Header = ({setIsHeaderAnimate}) => {
  const controls = useAnimation();
  const variants = {
    start: { opacity: 0, x: -50 },
    closed: { opacity: 1, x: 0 },
  }
  // Function to trigger animations
  const startAnimation = async () => {
    // You can customize animation properties as needed
    await controls.start({
      y: 0, // Drop from top
      scale: 1, // Fade in
      transition: {
        duration: 1,
      },
    });
  };

  // Trigger animation when the component mounts
  React.useEffect(() => {
    startAnimation();
  }, []);

  const [headAnimation, setHeadAnimation] = useState(false)
  const [logoAnimation, setLogoAnimation] = useState(false)

  const [show, setShow] = useState("translate-y-0");
  const [lastYScroll, setLastYScroll] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const controlNav = () => {
    if (window.scrollY > 200 && window.innerWidth >= 768) {
      if (window.scrollY > lastYScroll) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else setShow("translate-y-0");

    setLastYScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNav);

    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, [lastYScroll, controlNav]);

  return (
    <motion.header
      initial={{ y: -100, scale: 0 }}
      animate={controls}
      onAnimationComplete={async () => {
        await new Promise((resolve)=> setTimeout(resolve,200))
        console.log('here in header');
        setHeadAnimation(true)
      }}
      className={`w-full h-[50px] lg:h-[80px] bg-white flex items-center 
            justify-between z-20 sticky top-0 transition-transform duration-300 ${show} `}
    >
      <Wrapper className="flex justify-between items-center">
        <Link to={"/"}>
          <motion.h1 variants={variants}
           animate={headAnimation?"closed":"start"}
           transition={{type:'tween', duration:1}}
           onAnimationComplete={async()=>{
            if(headAnimation){
                await new Promise((resolve)=> setTimeout(resolve,300))
                console.log('here in logo');
                setLogoAnimation(true)
            }
          }}  className="text-xl font-bold hover:text-[#FF7B00]">
            Ali, Chaudhry Rajab
          </motion.h1>
        </Link>
        {logoAnimation && <Menu setIsHeaderAnimate={setIsHeaderAnimate} />}
        {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}

        <div className="lg:hidden flex items-center gap-2 text-black  ">
          <div
            className="lg:hidden h-8 w-8 lg:h-12 lg:w-12 rounded-full flex  justify-center items-center relative
                 hover:bg-black/[0.04] cursor-pointer"
          >
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </motion.header>
  );
};

export default Header;
