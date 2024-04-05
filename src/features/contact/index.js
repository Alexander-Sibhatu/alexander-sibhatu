import React from 'react'
import Gmail from '../../svg/Gmail-logo.svg'
import Didu from './photo-Didu.jpg'
import { socialIcons } from '../../data/data'

const ContactMe = () => {
  return (
    <div className='flex flex-col items-center justify-center py-4 sm:py-6 px-12 sm:px-16 lg:px-20 
    mx-auto bg-[#FFF8E7] text-[#34495E] h-auto' id='contact'>
        <h1 className='text-[16px] text-[#1ABC9C] font-semibold'>What's next</h1>
        <h2 className='text-xl md:text-3xl font-bold pt-1 md:pt-2 md:pb-1'>Let's Collaborate</h2>
        <h3 className='flex text-center pb-6 md:pb-6'>Feel free to reach out for project collaborations or just to say hello</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 w-3/6 md:w-3/6 items-end mb-[5rem]'>
          <div className='grid grid-cols-1 mb-2 md:mb-0 gap-2 w-full md:w-4/6'>
            {socialIcons.map((icon) => (
                <a
                  href={icon.url}
                  key={icon.id}
                  rel='noreferrer'
                  target='_blank'
                  className='flex justify-left items-center hover:translate-x-1 transition transform ease-in-out duration-400 bg-[#FFEBAF] py-1 mb-2 rounded-sm shadow-md w-full'
                >&nbsp;
                    <img src={icon.image} alt={icon.alt} className='w-[1.5rem] h-[1.5rem]'></img>
                    <p>&nbsp;{icon.text}</p>
                </a>
            ))}
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold hidden md:block'>Do you prefer an email?</h3>
            <p className='mb-4 hidden md:block'>Get in touch at  my address below</p>
            <button className='flex justify-left items-center hover:translate-x-1 transition transform ease-in-out duration-400 bg-[#FFEBAF] py-1 mb-2 w-full md:w-4/6 rounded-sm shadow-md'>&nbsp;
              <img src={Gmail} alt='gmail' className='w-[1.5rem] h-[1.5rem]'></img>
              <a href="mailto:sibhatualexander77@gmail.com">&nbsp;Gmail</a>
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3 w-full'>
          <div className='flex items-center justify-center'>
            <div className=' w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden'>
              <img src={Didu} alt="Me" className='w-full h-full object-cover object-center' />
            </div>
            <div className='grid grid-cols-1'>
              <p>&nbsp;Alexander Sibhatu</p>
              <p>&nbsp;Full Stack Developer <br />
              &nbsp;& UX/UI Designer</p>
            </div>
          </div>
          <div className='flex flex-wrap px-6'>Designed & Developed by
                                Alexander Sibhatu © 2024
                                Made with <span className='text-[#1ABC9C]'>React</span>&nbsp;and&nbsp;<span className='text-[#1ABC9C]'>Tailwind CSS</span></div>
          <div className='hidden lg:block'>
            <p className='font-semibold'>Let’s get social</p>
            <p>Connect with me on <a href={socialIcons[0].url} rel='noreferrer' target='_blank' className='font-semibold cursor-pointer text-[#1ABC9C]'>Github</a>,<br />
              <a href={socialIcons[1].url} rel='noreferrer' target='_blank' className='font-semibold cursor-pointer text-[#1ABC9C]'>LinkedIn</a>, 
              or <a href={socialIcons[2].url} rel='noreferrer' target='_blank' className='font-semibold cursor-pointer text-[#1ABC9C]'>Instagram</a></p>
          </div>
        </div>
    </div>
  )
}

export default ContactMe

