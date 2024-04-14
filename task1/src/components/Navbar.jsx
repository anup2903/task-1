import React from 'react'
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <div className='flex justify-between absolute w-full z-10 px-10 mt-[2rem] nav'>
      <img src={logo}  className='ml-[55px] logo'/>
      <h1 className='rounded-2xl p-2 py-2 text-white border-[#FFFFFF] border-solid border-[1px] h-10 flex items-center '>Get in touch</h1>
    </div>
  );
}

export default Navbar