'use client'

import Image from "next/image";
import Link from "next/link";
import {ChevronDown, GraduationCap, House, Info, Medal, Menu, Send, Settings, Smartphone, User, X} from "lucide-react";
import {clearUsername, RootState} from "@/lib/store";
import clsx from "clsx";
import styles from "@/app/components/layout/(header)/Header.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useRouter} from "next/navigation";
export default function Navbar() {
    const username = useSelector( (state:RootState) => state.users?.username);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const router = useRouter();

    async function Logout(){
        await fetch('/api/auth/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });

        return router.push('/login');
    }

    return (
        <>
            <nav className=" dark:bg-gray-600 shadow-md" >
                <div className="container mx-auto flex items-center justify-between min-h-2">
                    {/* Desktop logo*/}
                    <div className="hidden md:flex logo flex items-center justify-center">
                        <Image
                            src="/minhshop.png"
                            width={100}
                            height={100}
                            alt="Minhshop Logo"
                            unoptimized={true}
                            className="p-2"
                        />
                    </div>

                    {/* Desktop menu*/}
                    <div className="nav-links hidden md:flex space-x-4  flex justify-around text-sm">
                        <Link href="/" className="flex flex-row items-center" >
                            <House />
                            <span className="pl-1 rounded hover:bg-gray-300 hover:text-black">Home</span>
                        </Link>
                        <Link href="/services" className="flex flex-row items-center">
                            <Settings />
                            <span className="pl-1 rounded hover:bg-gray-300 hover:text-black">Services</span>
                            <ChevronDown />
                        </Link>
                        <Link href="/advice" className="flex flex-row items-center">
                            <GraduationCap />
                            <span className="pl-1 rounded hover:bg-gray-300 hover:text-black">Advice</span>
                            <ChevronDown />
                        </Link>

                        <Link href="/app" className="flex flex-row items-center">
                            <Smartphone />
                            <span className="pl-1 rounded hover:bg-gray-300 hover:text-black">App</span>
                            <ChevronDown />
                        </Link>

                        <Link href="/about-us" className="flex flex-row items-center">
                            <Info />
                            <span className="pl-1 rounded hover:bg-gray-300 hover:text-black">About Us</span>
                            <ChevronDown />
                        </Link>

                        <Link href="/references" className="flex flex-row items-center">
                            <Medal />
                            <span className="pl-1 rounded hover:bg-gray-300 hover:text-black">References</span>
                        </Link>
                        <Link href="/contact" className="flex flex-row items-center">
                            <Send />
                            <span className="pl-1 rounded hover:bg-gray-300 hover:text-black">Contact</span>
                        </Link>
                    </div>

                    {/* Desktop user info */}
                    <div className="user-info  hidden md:flex items-center space-x-4 text-black text-sm ">
                        {username ? (
                            <>
                                <span className="dark:text-white ">Hi, {username}</span>
                                <button onClick={ () => {
                                    Logout();
                                    dispatch(clearUsername());
                                    window.location.href = "/login";
                                }}
                                        className="hover:bg-red-700 text-white font-bold p-1 text-sm rounded"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link href="/login" className="dark:text-white hover:underline text-sm">Login</Link>
                        )}
                    </div>

                    {/* Mobile Logo  */}
                    <div className="md:hidden logo flex items-center justify-center">
                        <Image
                            src="/minhshop.png"
                            width={50}
                            height={50}
                            alt="Minhshop Logo"
                            unoptimized={true}
                        />
                    </div>

                    {/* Mobile Hamburger  */}
                    <button className="hamburger md:hidden text-3xl font-bold hover:text-gray-700"
                            onClick={() => setOpen(!open)}
                            aria-label="Menu">
                        <Menu className="w-7 h-7" />
                    </button>

                    {/* Mobile Overlay */}
                    <div
                        className={clsx(styles.overlay, open && styles.open)}
                        onClick={() => setOpen(false)}
                    />

                    {/* Mobile Menu */}
                    <div className={
                        clsx(
                            'fixed top-0 left-0 w-full h-full dark:bg-gray-600 opacity-50 z-20 transition-opacity duration-300 flex flex-col items-center justify-center',
                            styles.mobileMenuSlide,
                            open && styles.open
                        )
                    }>

                        <div className={clsx( 'md:hidden' , styles.closeButton)}
                             onClick={() => setOpen(false)}
                        >
                            <X className="w-7 h-7" />
                        </div>

                        <Link href="/public" className="mt-4" onClick={() => setOpen(false)}>Home</Link>
                        <Link href="/orders" className="mt-4" onClick={() => setOpen(false)}>ViewOrders</Link>
                        <Link href="/about-us" className="mt-4" onClick={() => setOpen(false)}>About Us</Link>
                        <Link href="/services" className="mt-4" onClick={() => setOpen(false)}>Services</Link>
                        <Link href="/blog" className="mt-4" onClick={() => setOpen(false)}>Blog</Link>
                        <Link href="/contact" className="mt-4" onClick={() => setOpen(false)}>Contact</Link>

                        {/* User Info Mobile */}
                        <div className="md:hidden mt-8">
                            { username ?
                                (
                                    <>
                                        <User className="w-5 h-5" />
                                        <span className="block mb-2">Hi {username}</span>
                                        <button onClick={ () => {
                                            Logout();
                                            dispatch(clearUsername());
                                            window.location.href = "/login";
                                        }}
                                                className="block text-red-500 hover:underline"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) :
                                (
                                    <Link href="/login" onClick={() => setOpen(false)} className="block text-blue-600 hover:underline">Login</Link>
                                )}
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}
