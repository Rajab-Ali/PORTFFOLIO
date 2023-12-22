import React ,{useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
const Experience = () => {
    const mainVariant = {
        initial:{opacity:0,x:100},
        animation:{opacity:1,x:0},
        exit:{opacity:0,x:-100},
      }
      
  return (
    <motion.div  variants={mainVariant} initial="initial" animate="animation" exit="exit" transition={{ duration:0.5}}  className="py-10 bg-[#e6e6e6] w-full min-h-[90vh]">

      <div className="w-[80%] mx-auto">
        <h1 className="text-[#002057] font-bold leading-loose text-[34px] text-center pb-10">
          My Experience
        </h1> 

{/* timeline main div */}
        <motion.div  >

            {/* first timeline div */}
          <motion.div initial={{y:-50,opacity:0}} animate={{y:0, opacity:1}} transition={{delay:1, type:"tween", duration:0.5}} class="relative pl-8 sm:pl-32 py-6 group ">
            <motion.div  class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time class="sm:absolute left-[-55px]  translate-y-0.5 flex items-center justify-center text-xs font-semibold uppercase w-36 h-6 mb-3  text-emerald-600 bg-emerald-100 rounded-full">
                Dec, 2022 - Nov, 2023
              </time>
              <div class="font-caveat font-bold text-xl text-indigo-500 mb-1 sm:mb-0">
                Full Stack developer
              </div>
            </motion.div>
            <div class="text-l font-medium text-slate-900 ml-4">
              Soft Geeks Digital LTD | Full-time | Remote
            </div>

            <div class="text-slate-500 mt-4 ml-4">
              As a Full Stack Developer at Soft Geek Digital Ltd. I spearheaded
              the development of TrackifyX, a cutting-edge Shopify extension.
              Focused on Vue.js for the frontend and Laravel for the backend, I
              played a pivotal role in crafting Project Journey Analytics—a
              standout feature providing invaluable insights for Shopify store
              owners. This experience showcases my expertise in creating
              seamless, data-driven solutions at the intersection of e-commerce
              and technology.
            </div>
          </motion.div>

            {/* second timeline div */}
          <motion.div initial={{y:-50,opacity:0}} animate={{y:0, opacity:1}} transition={{delay:1.4, type:"tween", duration:0.5}} class="relative pl-8 sm:pl-32 py-6 group ">
            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time class="sm:absolute left-[-55px]  translate-y-0.5 flex items-center justify-center text-xs font-semibold uppercase w-36 h-6 mb-3  text-emerald-600 bg-emerald-100 rounded-full">
                May, 2022 - Jan, 2023
              </time>
              <div class="font-caveat font-bold text-xl text-indigo-500 mb-1 sm:mb-0">
                Frontend developer
              </div>
            </div>
            <div class="text-l font-medium text-slate-900 ml-4">
              NextHills LTD | Full-time | Hybrid
            </div>
            <div class="text-slate-500 mt-4 ml-4">
              As a Frontend Developer at Nexthills Ltd., I honed my skills in
              React.js, mastering Redux for efficient state management.
              Proficient in crafting reusable components and implementing
              responsive web design, I contributed to elevating user experiences
              and driving innovation in web development.
            </div>
          </motion.div>

            {/* third timeline div */}
          <motion.div initial={{y:-50,opacity:0}} animate={{y:0, opacity:1}} transition={{delay:2, type:"tween", duration:0.5}}  class="relative pl-8 sm:pl-32 py-6 group ">
            <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time class="sm:absolute left-[-55px]  translate-y-0.5 flex items-center justify-center text-xs font-semibold uppercase w-36 h-6 mb-3  text-emerald-600 bg-emerald-100 rounded-full">
                Jan, 2022 - May, 2022
              </time>
              <div class="font-caveat font-bold text-xl text-indigo-500 mb-1 sm:mb-0">
                Internship | Frontend developer
              </div>
            </div>
            <div class="text-l font-medium text-slate-900 ml-4">
              NextHills LTD | Full-time | Hybrid{" "}
            </div>
            <div class="text-slate-500 mt-4 ml-4">
              As a Frontend Developer intern at Nexthills Ltd., I swiftly
              mastered React.js and Redux for state management. Specializing in
              crafting dynamic user interfaces and ensuring responsive design, I
              contributed to cutting-edge web development during my impactful
              3-month internship.
            </div>
          </motion.div>

        </motion.div>

      </div>
    </motion.div>
  );
};

export default Experience;
