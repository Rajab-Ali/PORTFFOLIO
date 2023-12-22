import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    

<footer class="bg-[#00012B]">
    <div class="mx-auto w-full md:w-[90%] max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div className='px-3'>
                  <h2 class="mb-6 text-2xl font-semibold text-white ">ALI's Portfolio</h2>
                  <p className='text-md font-medium text-white'>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
              </div >
              <div>
                  <h2 class="mb-6 text-2xl font-semibold  text-white ">Quick Links</h2>
                  <ul class="text-gray-200  font-medium">
                      <li class="mb-3">
                          <Link to={'/'}  class="hover:text-[#FFAE00] ">Home</Link>
                      </li>
                      <li className='mb-3'>
                          <Link to={'/about'}  class="hover:text-[#FFAE00]">About</Link>
                      </li>
                      <li className='mb-3'>
                          <Link to={'/experience'}  class="hover:text-[#FFAE00]">Experience</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-2xl font-semibold text-white ">Contact Info</h2>
                  <ul class="text-gray-200  font-medium w-fit">
                      <li class=" flex gap-3 items-center mb-4">
                      <FiPhoneCall size={18} color='#FFAE00' />
                        <p> +852-9137-2700</p>
                      </li>
                      <li class="flex gap-3 items-center mb-4">
                      <MdOutlineEmail size={20} color='#FFAE00' />
                        <p> chrajabali810@gmail.com</p>
                      </li>
                      <li class="flex gap-3 items-center mb-4">
                        <MdLocationOn  size={28} color='#FFAE00'  />
                        <p> Kwai chung, NT, Hong Kong </p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center ">© 2023, Design by Rajab
          </span>
          
      </div>
    </div>
</footer>

  )
}

export default Footer