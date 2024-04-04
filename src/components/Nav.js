import React, { useState } from 'react'
import Alex from '../features/layouts/Alex'
import Doc from '../svg/doc-icon.svg'
import { Link } from 'react-scroll';

const Nav = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        if(isMenuOpen) {
            toggleMenu();
        }
    }

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
           <Link 
                activeClass="active" 
                to="home" 
                spy={true}
                hashSpy={true}
                delay={80}
                smooth={true} 
                offset={-80} 
                duration={500}
                onClick={handleLinkClick} 
                >
                <li className='md:px-3 hover:text-[#1ABC9C]'>Home</li>
            </Link>
            <Link 
                activeClass="active" 
                to="about" 
                spy={true}
                hashSpy={true}
                delay={80}
                smooth={true} 
                offset={-80} 
                duration={500}
                onClick={handleLinkClick} 
                >
                <li className="md:px-3 hover:text-[#1ABC9C]">About</li>
            </Link>
            <Link 
                activeClass="active" 
                to="home" 
                spy={true}
                hashSpy={true}
                delay={80}
                smooth={true} 
                offset={0} 
                duration={500}
                onClick={handleLinkClick}  
                >
                <li className="md:px-3 hover:text-[#1ABC9C]">Work</li>
            </Link>
            <Link 
                activeClass="active" 
                to="contact" 
                spy={true}
                hashSpy={true}
                delay={80}
                smooth={true} 
                offset={-80} 
                duration={500}
                onClick={handleLinkClick}  
                >
                <li className="md:px-3 hover:text-[#1ABC9C]">Contact</li>
            </Link> 
        </ul>
        <div className={`${isMenuOpen ? 'hidden' :'talk flex flex-row justify-end  gap-4 w-1/2 md:w-2/7 text-sm sm:text-base md:text-lg lg:text-xl'}`}>
            
            <a href='/Alexanders-CV.pdf' target='_blank' className='flex text-[#34495E] text-lg'><img src={Doc} alt="Document icon" className='flex items-center w-[1.5rem] h-[1.5rem]' />&nbsp;Résumé</a>
            <p className='bg-[#34495E] px-2 rounded-full text-lg text-[#FFF8E7] hidden md:block'>Find me</p>
        </div>
    </div>
  )
}

export default Nav