import React from 'react'

const Footer = () => {
  return (
    <div
      style={{ borderTop: '2px solid white' }}
      className=" flex justify-between text-white mb-2 px-2 gap-5"
    >
      <div className=" mt-2">
        {' '}
        <span className=" text-[16px] sm:text-2xl">Resources</span>{' '}
        <ul className=" text-[10px] sm:text-[13px]">
          <li className=" list-none"> Getting Started</li>{' '}
          <li className=" list-none">Documentation</li>{' '}
          <li className=" list-none">Tutorials</li>{' '}
          <li className=" list-none">API Reference</li>{' '}
          <li className=" list-none">Community Forms</li>
        </ul>
      </div>
      <div className=" mt-2">
        {' '}
        <span className="text-[16px] sm:text-2xl">Platfrom</span>{' '}
        <ul className=" text-[10px] sm:text-[13px]">
          <li className=" list-none">Features</li>{' '}
          <li className=" list-none">Supported Devices</li>{' '}
          <li className=" list-none">System Requirements</li>{' '}
          <li className=" list-none">Downloads</li>{' '}
          <li className=" list-none">Release Notes</li>
        </ul>
      </div>
      <div className=" mt-2">
        {' '}
        <span className=" text-[16px]  sm:text-2xl">Community</span>{' '}
        <ul className=" text-[10px] sm:text-[13px]">
          <li className=" list-none">Events</li>{' '}
          <li className=" list-none">Meetups</li>{' '}
          <li className=" list-none">Conferences</li>{' '}
          <li className=" list-none">Hackathons</li>{' '}
          <li className=" list-none">Jobs</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
