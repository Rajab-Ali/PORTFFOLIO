import { useEffect, useState } from 'react'
import './App.css'
import {HashRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import Layout from './appLayout/Layout'
import LocationWrapper from './components/LocationWrapper'
import RouteWrapper from './components/RouteWrapper'
import Header  from './components/header/Header'
import Footer from './components/footer/Footer'
function App() {
  const [isHeaderAnimate, setIsHeaderAnimate] = useState(false)
  const [isBodyAnimate, setIsBodyAnimate] = useState(false)
  const delayfunction =async ()=>{
    console.log('delay function');
    await new Promise(resolve=>setTimeout(resolve,200))
  }
  useEffect(()=>{
    if(isHeaderAnimate){
      delayfunction()
      setIsBodyAnimate(true)
    }
  },[isHeaderAnimate])
  return (
    <>
      <Router>
      <Header setIsHeaderAnimate={setIsHeaderAnimate} />
     {
     isHeaderAnimate && <Layout >
      <LocationWrapper>
        <RouteWrapper />
      </LocationWrapper>   

      </Layout>  
    }
    {
     isBodyAnimate && <Footer />
    }   
      </Router>
    </>
  )
}

export default App
