import e from 'cors';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logout from './common/Logout';

export const Navbar = () => {
  const [cookie, setCookie] = useState()
  const [open, setOpen] = useState('hidden')

  useEffect(() => {
    const token = window?.localStorage.getItem("token") || window.sessionStorage.getItem("token");
    setCookie(token)
  })

  const lists = [
    { menu: 'Home', link: '/' },
    { menu: 'Services', link: '/service' },
    { menu: 'About us', link: '/' },
    { menu: 'Contact us', link: '/' },
    { menu: 'Landing', link: '/landing' },
    { menu: cookie ? <Logout /> : 'Login', link: cookie ? '' : '/auth/login' },
  ]

  function handleOpen() {
    if (open === 'hidden') {
      setOpen('visible')
    } else {
      setOpen('hidden')
    }
  }


  return (
    < >
      <nav className='flex items-center flex-wrap bg-white-400 p-3 border overflow-hidden shadow-lg top-0'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>

            < img
              alt="..."
              src="/images/icon/apple-touch-icon.png"
              className="shadow-xl rounded-full h-8 align-middle border-none absolute "
            />
              <span className='text-xl text-black font-bold pl-10 uppercase tracking-wide'>
                Blog
              </span>

          </a>
        </Link>
        <button
          onClick={() => handleOpen()}
          className=' inline-flex p-3 hover:bg-cyan-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
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
        <div className={` w-full lg:inline-flex lg:flex-grow lg:w-auto ${open}`}>
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