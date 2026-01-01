'use client'
import Link from "next/link";
import {clearUsername, RootState, setUsername} from "@/lib/store";
import {useDispatch, useSelector} from "react-redux";

export default function Navbar() {
    const username = useSelector( (state:RootState) => state.users?.username);
    const dispatch = useDispatch();

    return (
        <nav className=" dark:bg-gray-600 shadow-md p-4">
            <div className="container mx-auto flex items-center justify-between min-h-2">
                <div className="logo flex items-center justify-center">
                    <img  alt="logo"/>
                </div>

                <div className="nav-links flex space-x-4  flex justify-around">
                    <Link href="/">
                        <span className="px-4 py-2 rounded hover:bg-gray-300 hover:text-black">Home</span>
                    </Link>
                    <Link href="/orders">
                        <span className="px-4 py-2 rounded hover:bg-gray-300 hover:text-black">ViewOrders</span>
                    </Link>
                    <Link href="/about-us">
                        <span className="px-4 py-2 rounded hover:bg-gray-300 hover:text-black">About Us</span>
                    </Link>
                    <Link href="/services">
                        <span className="px-4 py-2 rounded hover:bg-gray-300 hover:text-black">Services</span>
                    </Link>
                    <Link href="/blog">
                        <span className="px-4 py-2 rounded hover:bg-gray-300 hover:text-black">Blog</span>
                    </Link>
                    <Link href="/contact">
                        <span className="px-4 py-2 rounded hover:bg-gray-300 hover:text-black">Contact</span>
                    </Link>
                </div>

                <div className="user-info flex items-center space-x-4 text-black ">
                    {username ? (
                        <>
                            <span className="dark:text-white ">Hi, {username}</span>
                            <button onClick={ () => {
                                dispatch(clearUsername());
                                window.location.href = "/login";
                            }}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link href="/login" className="dark:text-white hover:underline">Login</Link>
                    )}

                </div>
            </div>
        </nav>
    )
}

