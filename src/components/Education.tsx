import React from "react";
import sd from "../assets/img/sd.jpg";
import smp from "../assets/img/smp.jpg";
import smk from "../assets/img/smk.jpg";

const Education = () => {
    const Edu = [
        {
          id: 1,
          src: sd,
          title: "SDN 29 Pemecutan Elementary School",
          tahun: "(2012 - 2018)",
        },
        {
          id: 2,
          src: smp,
          title: "SMP PGRI 3 Middle School",
          tahun: "(2018 - 2021)",
        },
        {
          id: 3,
          src: smk,
          title: " SMK Wira Harapan Vocational High School",
          tahun: "(2021 - Now)",
        },
      ];
    
  return ( 
    <div id="education"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
           <div className="pb=8">
            <p className="text-4xl font-bold inline border-b-4  border-blue-500">
                Education
            </p>
           </div>
           <div className="w-full grid flex-col sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 text-xl mt-20" >
          {Edu.map(({ id, src, title, tahun }) => (
            <div key={id}>
              <img src={src} alt="" className="rounded-2xl mx-auto w-2/3 md:w-full" />
              <div className="mt-4 text-2xl">{title}</div>
              <div className="text-xl">{tahun}</div>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default Education