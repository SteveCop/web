import { useState } from "react"
import Router from 'next/router'
import { removeToken } from '../../../lib/token'
import { useRouter } from "next/router";

export default function Logout () {
    const router = useRouter()
    const [ hidden, setHidden] = useState('hidden')
    function handleHidden () {
        if (hidden === 'hidden') {
            setHidden('visible')
        } else {
            setHidden('hidden')
        }
    }
    function redirectToLogin() {
        Router.push("/auth/login");
        }   

    function handleLogout() {

        removeToken();
        Router.push("/auth/login");
        }

    return (
        <div className={'flex items-center w-10 h-8'} onClick={() => handleHidden()} >
            <img class="inline object-cover w-10 h-9 rounded-full" src="/images/picture.jfif" alt="Profile image"/>
            <div className={` ${hidden === 'hidden' ? 'hidden' : 'visible' } text-base bg-white rounded divide-gray-100 shadow absolute right-8 top-16 mt-2 w-56 divide-y`}>
                <div class="px-4 py-3 text-black" >
                    <span class="block text-sm">Bonnie Green</span>
                    <span class="block text-sm font-medium truncate">name@flowbite.com</span>
                </div> 
                <ul class="py-1" aria-labelledby="dropdown">
                <li>
                    <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Setting</a>
                </li>
                <li>
                    <a href="#" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Help</a>
                </li>
                <li>
                    <button onClick={handleLogout} ><a className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a></button>
                </li>
                </ul>
            </div>
        </div>
    )
}