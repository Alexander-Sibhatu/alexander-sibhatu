import React from 'react'

const Skills = () => {
  return (
    <div className='py-4 sm:py-6 px-12 sm:px-16 lg:px-20 
    mx-auto bg-[#FFF8E7] text-[#34495E] h-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='w-4/5'>
          <h1 className='text-left text-xl md:text-3xl font-bold py-4'>Tech Stacks .</h1>
          <p className='text-left text-sm md: pb-4'>Despite having just one year of experience gained through online courses, 
            I've successfully took part in the initiation, enhancement, and deployment of 
            multiple projects from inception, taking charge of both the back-end and 
            front-end code development.</p>
          <div className='text-sm'>
            <div className='flex flex-row space-x-1 items-baseline'>
              <h3 className='font-semibold text-base'>Fast&nbsp;-</h3>
              <p className='text-sm'> 
                robust and delay-free interaction.
              </p>
            </div>
            <div className='flex space-x-1 items-baseline'>
              <h3 className='font-semibold text-base'>Responsive&nbsp;-</h3>
              <p className='text-sm flex'>
                My design function seamlessly on any device, regardless of its’ size.
              </p>
            </div>
            <div className='flex space-x-1 items-baseline pb-4'>
              <h3 className='font-semibold text-base'>Dynamic&nbsp;-</h3>
              <p className='text-sm'>I bring websites to life, creating dynamic experiences for users.</p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <h2 className='text-sm lg:text-lg font-bold'>Below are some tools, libraries, and platforms I have 
            gained valuable experience with</h2>
          <div className='flex gap-10 pt-4'>
            <div>
              <h3 className='font-bold text-md lg:text-lg'>Frameworks</h3>
              <ul className='list-disc pl-5 text-md py-1'>
                <li>React</li>
                <li>Node.js | Express.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Material-UI</li>
                <li>Ant Design</li>
              </ul>
            </div>
            <div>
              <h3 className='font-bold text-md lg:text-lg'>Tools</h3>
              <ul className='list-disc pl-5 text-md py-1'>
                <li>Jira</li>
                <li>Redux Tookit</li>
                <li>Figma | Inkscape</li>
                <li>Git | Github</li>
                <li>MongoDB</li>
                <li>Netlify | Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills