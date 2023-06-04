import React from 'react'
import html from "../assets/img/html.png"
import css from '../assets/img/css.png'
import javascript from '../assets/img/javascript.png'
import github from '../assets/img/github.png'
import tailwind from '../assets/img/tailwind.png'

const Experience = () => {

    return (
    <div id='experience' className='bg-[#292929] w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white pt-36 sm:pt-48'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-blue-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
             </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-12 sm:pt-28 '>
            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg hover:shadow-orange-500 ease-in-out'>
                    <img src={html} alt="" className='w-20 mx-auto' />
                <p className='mt-4 text-white'>HTML</p>
            </div>

            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg hover:shadow-blue-500 ease-in-out'>
                    <img src={css} alt="" className='w-20 mx-auto' />
                <p className='mt-4 text-white'>CSS</p>
            </div>

            <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg hover:shadow-yellow-400 ease-in-out'>
                    <img src={javascript} alt="" className='w-20 mx-auto' />
                <p className='mt-4 text-white'>Javascript</p>
            </div>

            <div className='shadow-md hover:scale-105 py-2 rounded-lg hover:shadow-white duration-300 ease-in-out'>
                    <img src={github} alt="" className='w-20 mx-auto' />
                <p className='mt-4 text-white'>GitHub</p>
            </div>

           
           
        </div>
    </div>
  );
};

export default Experience;
