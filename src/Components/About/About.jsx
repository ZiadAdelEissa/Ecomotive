import React from 'react'
import aboutimg from '../imgs/about.jpg'
export default function About() {
  return (
    <div className='about flex justify-center items-center w-[99%] h-full mx-5 text-white my-9 '>
      <div className='about-grid grid grid-cols-2 justify-self-center self-center max-lg:gap-10 max-lg:grid max-lg:grid-cols-1 w-full h-full '>
        <div className='about-left gap-4 flex flex-col justify-center items-center'>
          <h2 className='text-4xl font-bold text-orange-600'>About Us</h2>
          <p className='text-2xl leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel felis non mauris ultricies
            condimentum. Vestibulum auctor, justo non fermentum consectetur, metus felis
            consectetur neque, sed pulvinar sapien nisi vel velit.
          </p>
        </div>
        <div className='about-right '>
          <img src={aboutimg} alt='About Us' className=' about-img  w-[95%] h-full ' />
        </div>
      </div>
    </div>
  )
}
