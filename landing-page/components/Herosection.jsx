import React from 'react'

const Herosection = () => {
  return (
    <div className=" text-white  border-r-red-200 flex flex-col items-center  sm:p-5">
      <h1 className=" text-center text-xl  sm:text-4xl   md:text-7xl tracking-wide">
        {' '}
        {/**tracking wide helps in providing letter spacing */}{' '}
        {/**we need xs class here for text make it in tailwind */}
        VirtualR build tools{' '}
        {/* bg clip text helps the text to get shape and color of background */}
        {/* gradident to r means gradient starts from right and to end  from is the starting color to is the */}
        <span className=" bg-gradient-to-r bg-clip-text text-transparent from-orange-500 to-red-800">
          for developers
        </span>
      </h1>
      <div className="flex flex-col gap-1 mt-10 text-neutral-500 text-xs sm:text-lg">
        <p>
          Empower your Creativity and bring your VR APP ideas to life with our
          intuitive development tools.
        </p>
        <p className=" text-center mt-3">
          Get started today and turn your imagination into immersive reality
        </p>
      </div>

      <div className=" flex flex-col md:flex-row gap-5 mt-10">
        <button className=" bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-lg px-4 py-2">
          Start for free
        </button>
        <button className=" bg-black text-white border-2 rounded-lg px-4 py-2">
          {' '}
          Documentation
        </button>
      </div>

      <div
        style={{ width: '90vw' }}
        className=" flex flex-col md:flex-row mt-8 md:mt-10 gap-5 justify-center items-center   "
      >
        <video
          className=" w-1/2 border-2 border-orange-600 rounded-lg  shadow-orange-500 h-fit"
          src="3761464-uhd_3840_2160_25fps.mp4"
          autoPlay
          controls
        >
          DEMO 1
        </video>
        <video
          className=" w-1/2 border-2 border-orange-600 rounded-lg  shadow-orange-500"
          src="4496046-uhd_3840_2160_25fps.mp4"
          autoPlay
          controls
        >
          DEMO 2
        </video>
      </div>
    </div>
  )
}

export default Herosection
