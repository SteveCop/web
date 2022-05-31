import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logout from './common/Logout';

export const Navbar = () => {
  const [cookie, setCookie] = useState()

  useEffect(() => {
    const token = window?.localStorage.getItem("token") || window.sessionStorage.getItem("token");
    setCookie(token)
  }, [])

  const lists = [
    {menu: 'Home', link: '/'},
    {menu: 'Services', link: '/'},
    {menu: 'About us', link: '/'},
    {menu: 'Contact us', link: '/'},
    {menu: cookie ? <Logout /> : 'Login', link: cookie ? '' : '/auth/login'},
  ]

  return (
    < >
      <nav className='flex items-center flex-wrap bg-white-400 p-3 border overflow-hidden shadow-lg'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-black font-bold uppercase tracking-wide'>
              Blog
            </span>
          </a>
        </Link>
        <button className=' inline-flex p-3 hover:bg-cyan-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            {lists.map((list, index) => (
            <Link href={list?.link} key={index}>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-cyan-600 hover:text-white '>
                {list?.menu}
              </a>
            </Link>

            ))}
          </div>
        </div>
      </nav>
    </>
  );
};