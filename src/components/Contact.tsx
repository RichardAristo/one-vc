import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='w-full h-screen bg-white p-4 text-black'>
    <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/23d06a84-7ea4-4d85-8913-a04feb935296" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name="name" placeholder='Enter your name' className=' p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'/>

                <input type="text" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'/>

                <textarea placeholder='Enter your message'rows={10} name="message"  className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none'></textarea>

                <button className='text-white font-semibold w-fit px-6 py-3 my-8 mx-auto flex items-center  rounded-md cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500  hover:scale-110 duration-300 hover:ease-in-out drop-shadow-lg'>Let's talk</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Contact