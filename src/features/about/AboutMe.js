import React from 'react'
import { Link } from 'react-scroll'

const AboutMe = () => {
  return (
    <div className='py-4 sm:py-6 px-12 sm:px-16 lg:px-20 
    mx-auto bg-[#FFF8E7] text-[#34495E]' id='about'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className=''>
            <h2 className='text-[16px] text-[#1ABC9C] font-semibold'>My skill set</h2>
            <h3 className='text-left text-xl md:text-2xl font-bold pb-4'>Full Stack Developer and<br />
              UI/UX Designer
            </h3>
            <Link 
              activeClass="active" 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className='lg:block hidden'>
                <button className='border-2 w-content hover:border-[#1ABC9C] hover:translate-x-1 transition transform ease-in-out duration-350 rounded-md bg-[#1ABC9C] px-4 py-1 my-4 font-4xl font-semibold text-[#FFF8E7] hover:text-[#1ABC9C] hover:bg-[#FFF8E7] drop-shadow-lg cursor-pointer'>
                  <p>Contact me</p>
                </button>
            </Link>
          </div>
          <div>
              <p className='py-4 text-sm'>I actively pursue new opportunities for collaboration on 
                projects involving captivating dashboards, innovative design 
                systems, or impactful landing pages.</p> 
              
              <p className='pb-4 text-sm'>As a Software developer, I leverage my meticulous attention 
                to detail, my unwavering passion for creation, and my 
                mission-oriented work ethic to effect meaningful change in the world. 
                I am enthusiastic about making a significant impact at a rapidly growing company.</p>
              
              <p className='pb-4 text-sm'>Fluent in the languages of designers, developers, and users, 
                I foster intelligent collaboration. I am a humble team player 
                who possesses a genuine passion for crafting innovative solutions.</p>
          </div>
          <Link 
              activeClass="active" 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className='lg:hidden block'>
                <button className='border-2 w-content hover:border-[#1ABC9C] hover:translate-x-1 transition transform ease-in-out duration-350 rounded-md bg-[#1ABC9C] px-4 py-1 my-4 font-4xl font-semibold text-[#FFF8E7] hover:text-[#1ABC9C] hover:bg-[#FFF8E7] drop-shadow-lg cursor-pointer'>
                  <p>Message Me</p>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default AboutMe