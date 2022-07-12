
import { faUserFriends, faRocket, faAward, faRetweet, faFingerprint, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

export  const Sidebar = () =>  {
    const [hidden, setHidden] = useState('hidden')


    function handleOpen() {
        if (hidden === 'hidden') {
            setHidden('visible')
        } else {
            setHidden('hidden')
        }
    }


    return (
        <div>
            <div className='absolute w-10 h-full pt-1'>
                <div className="w-60 h-full shadow-md bg-white px-1 absolute pt-[1rem]" >
                    <div className="items-center ml-auto w-auto " onClick={() => handleOpen()}>
                        <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg ">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-gray-500/70 bg-blue-100/100 mr-3">
                                    <FontAwesomeIcon icon={faPaperPlane}
                                        style={{
                                            height: '15px', width: '15px'
                                        }}
                                    />
                                </span>
                            </div>
                            <div>
                                <h4 className="text-gray-500/70">
                                    Dashboard
                                </h4>
                            </div>
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="hidden sm:block h-6 w-6 text-gray-300 ml-auto"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <div className={`relative ${hidden} `}>
                        <ul>
                            <li className="relative">
                                <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Link 3</a>
                            </li>
                            <li className="relative">
                                <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Link 4</a>
                            </li>
                        </ul>
                            {/* <ul className="py-1" aria-labelledby="dropdown">
                                <li>
                                    <a className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" >User</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Setting</a>
                                </li>
                                <li>
                                    <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Help</a>
                                </li>
                                <li>
                                    <a className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" >Sign out</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    {/* <ul className="relative">
                        <li className="relative" >
                            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" >
                                <span className="text-xs font-semibold inline-block py-1  uppercase text-gray-500/70  mr-3">
                                    <FontAwesomeIcon icon={faFingerprint}
                                        style={{
                                            height: '15px', width: '15px'
                                        }}
                                    />
                                </span>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="relative" id="sidenavEx2" onClick={() => handleOpen()}>
                            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer">
                                <span className="text-xs font-semibold inline-block py-1  uppercase  text-gray-500/70  mr-3">
                                    <FontAwesomeIcon icon={faFingerprint}
                                        style={{
                                            height: '15px', width: '15px'
                                        }}
                                    />
                                </span>
                                <span>Click here 2</span>
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="hidden sm:block h-6 w-6 text-gray-300 ml-auto"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <ul className={'relative ${hidden}'}   >
                                <li className="relative">
                                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Link 3</a>
                                </li>
                                <li className="relative">
                                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Link 4</a>
                                </li>
                            </ul>
                        </li>
                        <li className="relative" >
                            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" >
                                <span className="text-xs font-semibold inline-block py-1  uppercase  text-gray-500/70  mr-3">
                                    <FontAwesomeIcon icon={faFingerprint}
                                        style={{
                                            height: '15px', width: '15px'
                                        }}
                                    />
                                </span>
                                <span>Click here 3</span>
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="hidden sm:block h-6 w-6 text-gray-300 ml-auto"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <ul className="relative " >
                                <li className="relative">
                                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" >Link 5</a>
                                </li>
                                <li className="relative">
                                    <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" >Link 6</a>
                                </li>
                            </ul>
                        </li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}