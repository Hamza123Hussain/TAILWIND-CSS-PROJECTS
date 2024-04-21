import { features } from '@/data'
import React from 'react'

const Featuresection = () => {
  return (
    <div className="mt-10 flex flex-col gap-2 justify-center items-center">
      <h6 className="   text-transparent bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text">
        Feature
      </h6>

      <p className=" text-white text-1xl sm:text-4xl md:text-6xl lg:text-7xl">
        Easily Build{' '}
        <span className=" bg-gradient-to-r from-orange-600 to-white text-transparent bg-clip-text">
          {' '}
          Your Code
        </span>
      </p>

      <div className="grid  grid-cols-1 gap-10 m-5  md:grid-cols-3  ">
        {features.map((ele) => {
          return (
            <div className=" flex flex-col text-neutral-600 justify-center items-center border-2 border-neutral-800 rounded-lg p-4 sm:px-2 sm:py-4">
              <div className=" flex gap-3 sm:gap-2 mb-4">
                <span className=" text-orange-700 text-center -my-1">
                  {ele.icon}
                </span>
                <h5 className=" text-[6px] sm:text-sm">{ele.text}</h5>
              </div>
              <p className="text-[6px] sm:text-sm ">{ele.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Featuresection
