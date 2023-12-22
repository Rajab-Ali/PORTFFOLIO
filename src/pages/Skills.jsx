import React from 'react'
import { motion } from 'framer-motion'
import ReactIcon from '../assets/react-icon.png'
import NodeIcon from '../assets/nodejs-logo.svg'
import JSICON from '../assets/js-icon.png'
import ReduxIcon from '../assets/redux.png'
import VueIcon from '../assets/vue.png'
import TsIcon from '../assets/ts.png'
import JsIcon from '../assets/js.png'
import VuexIcon from '../assets/vuex.png'
import Tailwind from '../assets/tailwind.png'
import Vuetify from '../assets/vuetify.png'
import php from '../assets/php.png'
import laravel from '../assets/laravel.jpg'
import bootstrap from '../assets/bootstrap.png'
import Polaris from '../assets/shopify.webp'
import css from '../assets/css.png'
import html from '../assets/html.png'
import Mongodb from '../assets/mongo.jpg'
import mysql from '../assets/mysql.png'
import postgre from '../assets/postgre.png'
import firebase from '../assets/firebase.png'
import heroku from '../assets/heroku.png'
import netlify from '../assets/netlify.png'
import git from '../assets/git.png'
import postman from '../assets/postman.svg'
import github from '../assets/github.png'
const Skills = () => {
  const mainVariant = {
    initial:{opacity:0,x:100},
    animation:{opacity:1,x:0},
    exit:{opacity:0,x:-100},
  }

  return (
    <motion.div variants={mainVariant} initial="initial" animate="animation" exit="exit" transition={{ duration:0.5}}  className='py-10 bg-[#e6e6e6] w-full min-h-[90vh]' >
        <motion.div initial={{opacity:0, y:200}} animate={{opacity:1, y:0}} transition={{duration:1, type:'tween', delay:1}} Tailwind='w-[90%] mx-auto'>
        <h1 className='text-[#002057] font-bold leading-loose text-[34px] text-center pb-8'>Skills</h1>
        <p className='text-[#5B5D5E] text-[20px] text-center font-semibold'>I have expertise in these technologies</p>
        <div className='mt-5 flex gap-6 md:gap-x-14 md:gap-y-10 items-center flex-wrap w-[80%] mx-auto'>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={ReactIcon} alt="React Icon" className='w-[100px] h-[100px] rounded-full bg-transparent ' />
              <p className='text-[18px] font-bold'>REACT JS</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={NodeIcon} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>NODE JS</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={JSICON} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>EXPRESS JS</p>
            </div>
            
            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={ReduxIcon} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>REDUX</p>
            </div>
            
            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={VueIcon} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>VUE JS</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={TsIcon} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>TYPESCRIPT</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={JsIcon} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>JAVASCRIPT</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={VuexIcon} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>VUEX</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={php} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>PHP</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={laravel} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>LARAVEL</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={Tailwind} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
            <p 
              className='text-[18px] font-bold'>TAILWIND</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={Vuetify} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>VUETIFY</p>
            </div>
            
            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={bootstrap} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>BOOTSTRAP</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={Polaris} alt="Node JS" className='w-[100px] h-[90px] object-contain ' />
              <p className='text-left text-[18px] font-bold leading-none w-[60px]'>SHOPIFY POLARIS</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={css} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
            <p 
              className='text-[18px] font-bold'>CSS</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={html} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
            <p 
              className='text-[18px] font-bold'>HTML</p>
            </div>
        </div>
        <br />
        <p className='my-[36px] text-[#5B5D5E] text-[20px] text-center font-semibold'>Databases and Tools I know</p>
        <div className='mt-10 flex gap-6 md:gap-x-14 md:gap-y-10 items-center flex-wrap w-[80%] mx-auto'>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={Mongodb} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>MONGO DB</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={mysql} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>MY SQL</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={postgre} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>POSTGRESQL</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={firebase} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>FIREBASE</p>
            </div>

            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={heroku} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>HEROKU</p>
            </div>
            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={netlify} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>NETLIFY</p>
            </div>
            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={git} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>GIT</p>
            </div>
            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={postman} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>POSTMAN</p>
            </div>
            <div className='py-3 px-5 bg-white text-center font-semibold flex flex-col items-center rounded-lg shadow-md'>
              <img src={github} alt="Node JS" className='w-[100px] h-[100px] object-contain ' />
              <p className='text-[18px] font-bold'>GITHUB</p>
            </div>
          </div>
        </motion.div>
    </motion.div>
  )
}

export default Skills