// import React, { useState } from 'react'
import Alex from '../layouts/Alex'

const Nav = () => {
    // const[isMenuOpen, setIsMenuOpen] = useState(false);

    
  return (
    <div className='nav min-h-10vh flex flex-row justify-between items-center px-20'>
        <div className='name '>
            <Alex />
        </div>
        <ul className='navAnchors flex items-center text-[#34495E]'>
           <li><a href='/food' className='md:px-3 font-bold hover:text-[#1ABC9C]'>Home</a></li>
           <li><a href='/ingredients' className="ingredients md:px-3 font-bold hover:text-[#1ABC9C]">About</a></li>
           <li><a href='/studies' className="studies md:px-3 font-bold hover:text-[#1ABC9C]">Work</a></li>
           <li><a href='/faq' className="faq md:px-3 font-bold hover:text-[#1ABC9C]">Menu</a></li>
          
            
            
            
        </ul>
        <div className='flex gap-4'>
            <div className='text-[#34495E]'>Resume</div>
            <div className='bg-[#34495E] px-2 rounded-full text-[#FFF8E7]'>Let's talk</div>
        </div>
    </div>
  )
}

export default Nav