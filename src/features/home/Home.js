import React from 'react'
import boy from '../../svg/layer1.svg'
import Button from '../../components/Button'

const Home = () => {
  return (
    <div className='py-4 md:py-6 px-12 sm:px-16 lg:px-20 
     mx-auto bg-[#FFF8E7] md:h-[26rem] h-auto' id='home'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='flex flex-col justify-center items-center md:items-start'>
          <h1 className='text-md md:text-lg md:text-left pb-1 text-[#34495E] font-semibold'>Hello, I'm</h1>
          <div>
            <h2 className='text-left text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff2990] to-[#1ABC9C]'>Alexander Sibhatu .</h2>
          </div>
          <p className='flex w-4/5 py-3 text-center text-sm md:text-left text-[#333333]'>As a junior software developer with one year of experience, 
            my focus is on developing reliable and easy-to-use web solutions. 
            I have refined my expertise in designing, building, and deploying software. 
            I'm excited to collaborate and create something outstanding! 
          </p>
          <Button />
        </div>
        <div className='flex justify-center relative h-[10rem] sm:h-[15rem]  lg:h-[20rem] 2xl:h-[26rem] w-full'>
          <img src={boy} alt="boys illustration" style={{ height: '100%', width: 'auto', objectFit: 'contain' }}/>
        </div>
      </div>
    </div>
  )
}

export default Home