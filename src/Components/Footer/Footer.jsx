import React from 'react'
import { Link } from 'react-router'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
export default function Footer() {
  return (
    <div className='footer flex justify-center items-center w-full h-full text-black my-12 p-5 bg-slate-300 '>
        
            <div className='grid grid-cols-3 gap-12 max-lg:grid max-lg:grid-cols-1'>
                <div className='adress flex flex-col justify-evenly gap-4 items-center '>
                <h1 className='text-2xl font-bold '>Eco<span className='text-orange-600'>Motive</span></h1>
                <h2 className='text-xl font-bold'>Adress :tgamo3 share3 el ts3een </h2>
                <h3 className='text-xl font-bold'>Phone : 01151440004</h3>
                </div>
                <div className='services flex flex-col justify-evenly gap-4 items-center '>
                <h1 className='text-2xl font-bold text-orange-600 '>Services</h1>
                <h2 className='text-xl font-bold'>Polishing</h2>
                <h3 className='text-xl font-bold'>Paint</h3>
                <h3 className='text-xl font-bold'>Mechanical Services</h3>
                <h3 className='text-xl font-bold'>Spare Parts</h3>
                </div>
                <div className='social flex flex-col justify-around gap-2 items-center '>
                    <h1 className='text-2xl font-bold text-orange-600 '>Connect</h1>
                    <Link to={'https://www.facebook.com/profile.php?id=61560095597816'} className='text-xl hover:text-blue-800'><TiSocialFacebookCircular /></Link>
                    <Link to={'https://www.instagram.com/projectx.egy/?hl=ar'} className='text-xl hover:text-red-800'><SlSocialInstagram /></Link>
                    <Link to={'https://wa.me/+201151440004'} className='text-xl hover:text-green-800'><IoLogoWhatsapp /></Link>
                </div>
            </div>
        </div>
      
  )
}
