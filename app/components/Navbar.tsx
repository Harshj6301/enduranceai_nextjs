'use client'

import React, {useState} from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

const Navbar = () => {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
      setisClick(!isClick)

    }
  return (
    <>
    <nav className='bg-transparent'>
      <div className='max-w-10xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
         <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <a href='/' className='text-white flex items-center'>
              <Image src={'/assets/Logos/e.png'} alt='Endurance logo' height={32} width={32} className='p-1'/>
              <h1>Endurance aI</h1>
            </a>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='ml-4 flex items-center space-x-4'>
            <Link href='/about' className='text-2xl hover:bg-gray-200  hover:text-black p-1 rounded-md text-white font-mono'>
                          About
                        </Link>
                        <Link href='/contact' className='text-2xl hover:bg-gray-200  hover:text-black p-1 rounded-md text-white font-mono'>
                          Contact
                        </Link>
                        <Link href='#pricing' className='text-2xl hover:bg-gray-200  hover:text-black p-1 rounded-md text-white font-mono'>
                          Pricing
                        </Link>
                        <Link href='https://github.com/Harshj6301/Endurance' className='text-2xl hover:bg-gray-200  hover:text-black p-1 rounded-md text-white font-mono'>
                          Docs
                        </Link>
              </div>
            </div>
            <div className='md:hidden flex items-center'>
              <button
              className='inline-flex items-center justify-center text-2xl p-2 w-10 rounded-md text-white md:text-white
              hover:bg-slate-200 hover:text-black'
              onClick={toggleNavbar} >

                {isClick ? ('-'): ('+')}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link href='/about' className='text-2xl block hover:bg-gray-200  hover:text-black p-1 rounded-md text-white font-mono'>
                          About
                        </Link>
                        <Link href='/contact' className='text-2xl block hover:bg-gray-200  hover:text-black p-1 rounded-md text-white font-mono'>
                          Contact
                        </Link>
                        <Link href='#pricing' className='text-2xl block hover:bg-gray-200  hover:text-black p-1 rounded-md text-white font-mono'>
                          Pricing
                        </Link>
                        <Link href='https://github.com/Harshj6301/Endurance' className='text-2xl block hover:bg-gray-200  hover:text-black p-1 rounded-md text-white font-mono'>
                          Docs
                        </Link>

            </div>
          </div>
        )}
    </nav>
    </>
  );
  };

  export default Navbar;