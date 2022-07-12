import e from 'cors';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { removeToken } from '../lib/token'
import Router from 'next/router'

export const Navbar = () => {
    const [cookie, setCookie] = useState()
    const [hidden, setHidden] = useState('hidden')

    useEffect(() => {
        const token = window?.localStorage.getItem("token") || window.sessionStorage.getItem("token");
        setCookie(token)
    })



    function handleOpen() {
        if (hidden === 'hidden') {
            setHidden('visible')
        } else {
            setHidden('hidden')
        }
    }


    function handleLogout() {

        removeToken();
        Router.push("/auth/login");
    }

    function redirectToProfile() {
        Router.push("/profile");
    }


    return (
        < >
            <nav className='flex items-center flex-wrap bg-white p-3  overflow-hidden  top-0'>
                {/* <Link href='/'>
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
                </Link> */}
                <div className="relative w-80 max-w-md sm:-ml-2 flex items-center px-5">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <input
                        type="text"
                        role="search"
                        placeholder="Search..."
                        className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
                    />
                </div>
                <div className="flex flex-shrink-0 items-center ml-auto ">
                    <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg" onClick={() => handleOpen()}>
                        <span className="sr-only">User Menu</span>
                        <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                            <span className="font-semibold">Stevanie</span>
                            <span className="text-sm text-gray-600">Admin</span>
                        </div>
                        <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden" >
                            <img
                                src="/images/picture.jfif"
                                alt="user profile photo"
                                className="h-full w-full object-cover"
                            />
                        </span>
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="hidden sm:block h-6 w-6 text-gray-300"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <div className={`absolute z-50 shadow-2xl text-base bg-white rounded divide-gray-100  right-8 top-16 mt-2 w-56 divide-y ${hidden} `}>
                        <ul className="py-1" aria-labelledby="dropdown">
                            <li>
                                <a className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" onClick={redirectToProfile} >Profile</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Setting</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Help</a>
                            </li>
                        </ul>
                    </div>
                    <div className="border-l pl-3 ml-3 space-x-1">
                        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                            <span className="sr-only">Notifications</span>
                            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                            <svg
                                aria-hidden="true"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </button>
                        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full" onClick={handleLogout}>
                            <span className="sr-only">Log out</span>
                            <svg
                                aria-hidden="true"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <button
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
        </div> */}
            </nav>
        </>
    );
};