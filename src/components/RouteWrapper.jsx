import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Edu from '../pages/Edu'
import About from '../pages/About'
import Experience from '../pages/Experience'
import Skills from '../pages/Skills'
import Contact from '../pages/Contact'

const RouteWrapper = () => {
    const RouteLocation = useLocation()
  return (
    <Routes location={RouteLocation} key={RouteLocation.pathname}>
          <Route exact path='/' element={<Home />} />
          <Route path='/education' element={<Edu />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          
        </Routes>
  )
}

export default RouteWrapper