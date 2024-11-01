import React from 'react'

const Experience = () => {
  return (
    <div className='flex flex-col justify-center items-center py-1rem md:py-2rem px-12 sm:px-16 lg:px-20 
    mx-auto bg-[#FFF8E7] h-[26rem] md:h-70vh'>
        <p className="flex text-center text-[#34495E] text-[20px] md:text-[32px]" style={{ fontFamily: "'Fira Code', monospace"}} id='work'>Page is Under Construction</p>
        <script className="mx-[1rem]" src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" alt="under construction image" type="module"></script> 
        <dotlottie-player src="https://lottie.host/e17b01ee-3772-4c5e-9c40-811d126facd1/L1aAKaIMJL.lottie" background="transparent" speed="1" style={{width: '400px', height: '400px'}} loop autoplay>
        </dotlottie-player>
    </div>
  )
}

export default Experience


