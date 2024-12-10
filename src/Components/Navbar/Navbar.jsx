import React from 'react'
import { Link } from 'react-router'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
export default function Navbar() {
  function handleOpen(){
    const openMenu = document.querySelector('.menu-nav');
    openMenu.style.display='flex';
    const navIcon = document.querySelector('.main-btn');
    navIcon.style.display='none';
  }
  function handleClose(){
    const closeMenu = document.querySelector('.menu-nav');
    closeMenu.style.display='none';
    const navIcon = document.querySelector('.main-btn');
    navIcon.style.display='flex';
  }
  
  return (
    <>
    <nav className='main-nav  flex justify-between items-center w-full h-fit bg-[rgb(175,175,175,0.20)] shadow-lg p-4 fixed z-50 max-lg:justify-between '>
        <h1 className='text-2xl font-bold '>Eco<span className='text-orange-600'>Motive</span></h1>
        <ul className='flex gap-4 max-lg:hidden'>
        <li><Link className='text-md text-white rounded-lg  hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"/"}>Home </Link></li>
         <li><Link className='text-md text-white rounded-lg  hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"#"}>Our Work</Link></li>
         <li><Link className='text-md text-white rounded-lg  hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"rejister"}>Rrgister</Link></li>
         <li><Link className='text-md text-white rounded-lg  hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"#"}>Contact us </Link></li>
        </ul>
        <button onClick={handleOpen} className=' main-btn hidden items-center p-2 text-white bg-black rounded-md hover:text-black hover:bg-slate-200 hover:rounded-xl max-lg:flex '><GiHamburgerMenu/></button>
      </nav>
      <nav className='menu-nav animate-wiggle hidden flex-col justify-center items-center w-[10%] h-full bg-[#232324] font-bold  fixed z-50 right-0 max-lg:w-[30%] max-md:w-[50%] max-lg:justify-start gap-20' >
      <button onClick={handleClose} className=' flex items-center p-1 mt-8 text-2xl text-white bg-black rounded-lg hover:text-black hover:bg-slate-300 hover:rounded-xl max-lg:flex '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
     <div className=''>

      <ul className='flex flex-col gap-4 w-fit h-fit animate-linkk'>
         <li><Link className='flex flex-row items-center text-xl text-white  hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"#"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
Home </Link></li>
         <li><Link className='flex flex-row items-center text-xl text-white  hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"#"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>
Our Work</Link></li>
         <li><Link className='flex flex-row items-center text-xl text-white  hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"rejister"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>

Rrgister</Link></li>
         <li><Link className='flex flex-row items-center text-xl text-white  hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"#"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
</svg>
Contact us </Link></li>
        </ul>
     </div>
        <h1 className='text-2xl font-bold '>Eco<span className='text-orange-600'>Motive</span></h1>

      </nav>
    </>
  )
}
