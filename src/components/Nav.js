import React, { useState } from 'react'
import Alex from '../layouts/Alex'

const Nav = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
  return (
    <div className='nav md:min-h-15vh flex flex-row justify-between items-center px-4 py-4 md:px-16 lg:px-20 bg-[#FFF8E7]'>
        <div className='name flex items-center gap-7 w-1/2 md:w-2/7'>
            <span className='text-3xl cursor-pointer md:hidden block z-20 px-2'>
                <ion-icon name={isMenuOpen ? 'close-outline' : 'menu-outline'}  onClick={toggleMenu}></ion-icon>
            </span>
            <Alex Menu={isMenuOpen}/> 
        </div>
        <ul className={`navAnchors w-auto md:w-3/7 md:flex md:justify-center md:items-center  md:z-auto z-[-1] md:static md:pl-0
                    ${isMenuOpen ? 'opacity-100 min-h-screen fixed inset-0 z-10 pl-7 bg-[#FFF8E7] pt-16' : 'opacity-0'} md:opacity-100 top[-400] transition-all ease-in opacity-0 duration-500 left-0 absolute text-[#34495E]`}>
           <li><a href='#' className='md:px-3 hover:text-[#1ABC9C]'>Home</a></li>
           <li><a href='#' className="ingredients md:px-3 hover:text-[#1ABC9C]">About</a></li>
           <li><a href='#' className="studies md:px-3 hover:text-[#1ABC9C]">Work</a></li>
           <li><a href='#' className="faq md:px-3 hover:text-[#1ABC9C]">Menu</a></li>
        </ul>
        <div className={`${isMenuOpen ? 'hidden' :'talk flex flex-row justify-end  gap-4 w-1/2 md:w-2/7 text-sm sm:text-base md:text-lg lg:text-xl'}`}>
            <div className='text-[#34495E]'>Resume</div>
            <div className='bg-[#34495E] px-2 rounded-full text-[#FFF8E7]'>Let's talk</div>
        </div>
    </div>
  )
}

export default Nav