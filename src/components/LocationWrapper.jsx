import React from 'react'
import { AnimatePresence } from 'framer-motion'
const LocationWrapper = ({children}) => {
  return (
    <AnimatePresence>{children}</AnimatePresence>
  )
}

export default LocationWrapper