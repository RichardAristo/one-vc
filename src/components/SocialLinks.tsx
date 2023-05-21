import React from 'react';
import {BsWhatsapp} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {FiMail} from 'react-icons/fi';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                 Twitter <BsTwitter/>
                </>
            ),
            href: 'https://twitter.com/Aristo97505018?t=8RNLPjlbzHkXdjaVue_iMg&s=08',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                Instagram <BsInstagram/>
                </>
            ),
            href: 'https://instagram.com/ricard_aristo?igshid=ZGUzMzM3NWJiOQ==',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                 Whatsapp <BsWhatsapp/>
                </>
            ),
            href: 'https://wa.me/qr/C7KLCVA5U3CAF1',
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>
                 Mail <FiMail/>
                </>
            ),
            href: 'mailto:richardaristo3@gmail.com',
            style: 'rounded-tr-md'
        }
    ] 

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'> 
        <ul>

            {links.map(({id, child, href, style, }) => (
                <li key={id} className= {"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +" "+ style}>
            <a href={href}
                className="flex justify-between items-center w-full text-white"  target="_blank" rel="noreferrer"
            >
                {child}
            </a>
            </li> 
            ))}
           
        </ul>
    </div>
  );
};

export default SocialLinks