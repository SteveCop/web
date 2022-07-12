
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();

    const menuItems = [
        {
            href: '/',
            title: 'Homepage',
        },
        {
            href: '/about',
            title: 'About',
        },
        {
            href: '/contact',
            title: 'Contact',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col p-1">
            <div className="flex flex-col md:flex-row flex-1">
                <aside className="shadow-md bg-white px-1 absolute h-full w-full md:w-60">
                <nav>
                        <ul>
                            {menuItems.map(({ href, title }) => (
                                <li className='m-2' key={title}>
                                    <Link href={href}>
                                        <a
                                            className={`flex p-4 bg-white rounded hover:bg-blue-400 cursor-pointer`}
                                        >
                                            {title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1">{children}</main>
                   
            </div>
        </div>
    )
}