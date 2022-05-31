import { useState } from "react"

export default function Logout () {
    const [ hidden, setHidden] = useState('hidden')
    function handleHidden () {
        if (hidden === 'hidden') {
            setHidden('visible')
        } else {
            setHidden('hidden')
        }

    }
    return (

        // <div className={`w-10 h-10 bg-red-500 rounded-full`} onClick={() => handleHidden()}>
        //     <img class="inline object-cover w-10 h-10 mr-2 rounded-full" src="/images/picture.jfif" alt="Profile image"/>
        //     <div className={` ${hidden === 'hidden' ? 'hidden' : 'visible' } z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`} >
        //         {/* Logout */}
        //         <div class="py-3 px-4">
        //             <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
        //             <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        //         </div>
        //     </div>
        // </div>
        <div className={'flex items-center w-10 h-8'} onClick={() => handleHidden()} >
            <img class="inline object-cover w-10 h-9 rounded-full" src="/images/picture.jfif" alt="Profile image"/>
            <div className={` ${hidden === 'hidden' ? 'hidden' : 'visible' } text-base bg-white rounded divide-gray-100 shadow origin-top-right absolute right-8 top-20 mt-2 w-56  ring-1 ring-black ring-opacity-5 divide-y focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"`}>
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
                    <a href="/auth/login" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" >Sign out</a>
                </li>
                </ul>
            </div>
        </div>
    )
}