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
    <nav className='main-nav flex justify-between items-center w-full h-fit bg-slate-300 shadow-lg p-4 fixed z-50 max-lg:justify-between '>
        <h1 className='text-2xl font-bold '>Eco<span className='text-orange-600'>Motive</span></h1>
        <ul className='flex gap-4 max-lg:hidden'>
        <li><Link className='text-md text-black rounded-lg bg-slate-200 hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"/"}>Home </Link></li>
         <li><Link className='text-md text-black rounded-lg bg-slate-200 hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"#"}>Our Work</Link></li>
         <li><Link className='text-md text-black rounded-lg bg-slate-200 hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"rejister"}>Rrgister</Link></li>
         <li><Link className='text-md text-black rounded-lg bg-slate-200 hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"#"}>Contact us </Link></li>
        </ul>
        <button onClick={handleOpen} className=' main-btn hidden items-center p-2 text-white bg-black rounded-md hover:text-black hover:bg-slate-200 hover:rounded-xl max-lg:flex '><GiHamburgerMenu/></button>
      </nav>
      <nav className='menu-nav hidden flex-col justify-evenly items-center w-[10%] h-full bg-slate-200 font-bold  fixed z-50 right-0 max-lg:w-[30%] max-md:w-[50%] max-lg:justify-start gap-40' >
      <button onClick={handleClose} className=' flex items-center p-2 mt-8  text-white bg-black rounded-md hover:text-black hover:bg-slate-300 hover:rounded-xl max-lg:flex '><FaRegCircleXmark/></button>
      <ul className='flex flex-col gap-4 w-fit h-fit'>
         <li><Link className='text-2xl text-black bg-slate-200 hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"#"}>Home </Link></li>
         <li><Link className='text-2xl text-black bg-slate-200 hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"#"}>Our Work</Link></li>
         <li><Link className='text-2xl text-black bg-slate-200 hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"rejister"}>Rrgister</Link></li>
         <li><Link className='text-2xl text-black bg-slate-200 hover:text-white hover:bg-black p-2 hover:rounded-xl' to={"#"}>Contact us </Link></li>
        </ul>
        <h1 className='text-2xl font-bold '>Eco<span className='text-orange-600'>Motive</span></h1>

      </nav>
    </>
  )
}
