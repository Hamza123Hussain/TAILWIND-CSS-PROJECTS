import React from 'react'

const Herosection = () => {
  return (
    <div className=" text-white border-2 border-r-red-200 flex flex-col items-center  sm:p-5">
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
    </div>
  )
}

export default Herosection
