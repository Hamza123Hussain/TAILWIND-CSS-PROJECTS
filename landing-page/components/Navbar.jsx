'use client'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false) // used for the burger icon

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* hidden is done so that it can only be seen on smalls screens.
    Items center to make everything vertically align */}
      <div className="sm:hidden flex justify-between items-center p-5 bg-transparent backdrop-blur-sm ">
        {/**the data will be shown same throught all screen sizes */}
        <div className=" flex items-center gap-3">
          <img className="w-auto h-12 sm:h-16" src="1377892.png" alt="Logo" />{' '}
          {/**adjusting the image height according to scrren size. width stays auto */}
          <h3 className="text-white">VirtualR</h3>
        </div>
        <button className="text-white" onClick={toggleMenu}>
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 6h16v2H4v-2zm16 5H4v2h16v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden flex flex-col px-5 bg-transparent backdrop-blur-sm">
          <h5 className="text-white">Features</h5>
          <h5 className="text-white">WorkFlow</h5>
          <h5 className="text-white">Pricing</h5>
          <h5 className="text-white">Testimonials</h5>
          <div className="flex gap-2 mt-4">
            <button className="text-white bg-transparent border-2 border-white px-4 py-2 rounded-md">
              Sign in
            </button>
            <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">
              Create an account
            </button>
          </div>
        </div>
      )}

      {/* this data is hidden from small screens */}
      <div className="hidden sm:flex flex-col sm:gap-5 md:flex-row  justify-between items-center p-5 bg-transparent backdrop-blur-sm">
        <div className="flex items-center">
          <img className="w-auto h-12 sm:h-16" src="1377892.png" alt="Logo" />
          <h3 className="text-white">VirtualR</h3>
        </div>

        <div className="flex gap-5 text-white">
          <h5>Features</h5>
          <h5>WorkFlow</h5>
          <h5>Pricing</h5>
          <h5>Testimonials</h5>
        </div>

        <div className="flex gap-2">
          <button className="text-white bg-transparent border-2 border-white px-4 py-2 rounded-md">
            Sign in
          </button>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">
            Create an account
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
