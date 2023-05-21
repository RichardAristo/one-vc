import React from 'react'

const About = () => {
  return (
  <div id="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full "> 
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-blue-500">About</p>
            </div>

            <p className='text-xl mt-20'>
            Hi, I'm Richard Aristobulus.N, i'am a student from SMK Wira Harapan, majoring in Software Engineering (RPL). The
            reason I chose this major is because I have an interest in
            the world of IT, I think these skills will be very useful in
            the future because of technological developments, the languages ​​that I learned were Html, CSS, C++, JavaScript, and php.

            </p>
        </div>

  </div>
  );
};

export default About;