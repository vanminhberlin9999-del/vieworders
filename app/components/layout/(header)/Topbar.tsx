import {Phone, LucideMail, Contact} from "lucide-react";
import styles from "@/app/components/layout/(header)/Topbar.module.css";
import clsx from "clsx";
import ThemeToogle from "@/app/components/ui/ThemeToggle";
export default function Topbar() {
    return (
        <>
        <div className="topbar bg-[var(--topbar-light-bg)] dark:bg-[var(--topbar-dark-bg)]">
            <div className="container mx-auto flex flex-row justify-between items-center">
                <div className="left flex flex-row items-center">
                    <p className="flex items-center text-xs m-1">
                        <Phone className="text-xs p-1"/>
                        <span className="p-1 pl-0">+49 176 3014 4518</span>
                    </p>
                    <p className="flex items-center text-xs m-1">
                        <LucideMail className="text-xs p-1"/>
                        <span className="p-1 pl-0"><a href="mail:info@minhshop.de">info@minhshop.de</a></span>
                    </p>

                    <p className={clsx('flex items-center text-xs bg-black text-white', styles.anfrageStellen)}>
                        <Contact className="text-xs p-1 pr-1"/>
                        <span className="p-1 pl-0 text-xs">
                            <a href="/contact">Submit a request</a>
                        </span>
                    </p>
                </div>
                <div className="right flex flex-row items-center space-x-4">
                    <ThemeToogle/>
                    <div className="social flex flex-row items-center space-x-4">

                        <a href="https://www.facebook.com/minhshop.de" target="_blank" rel="noreferrer" className="text-sx p-1 hover:text-[#000]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6 text-sx p-1"
                            >
                                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
                            </svg>
                        </a>

                        <a href="https://instagram.com/ten-instagram" target="_blank"
                           className="hover:text-[#000] transition text-sx p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 fill="currentColor" className="w-6 h-6 text-sx p-1">
                                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.41.6.23 1.03.5 1.48.95.45.45.73.88.95 1.48.18.46.36 1.26.41 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.43-.23.6-.5 1.03-.95 1.48-.45.45-.88.73-1.48.95-.46.18-1.26.36-2.43.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.41-.6-.23-1.03-.5-1.48-.95-.45-.45-.73-.88-.95-1.48-.18-.46-.36-1.26-.41-2.43C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.43.23-.6.5-1.03.95-1.48.45-.45.88-.73 1.48-.95.46-.18 1.26-.36 2.43-.41C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.8.36 3.98.7 3.12 1.05 2.4 1.5 1.69 2.21.98 2.92.53 3.64.18 4.5c-.34.82-.57 1.8-.63 3.07C-.01 8.33 0 8.74 0 12s-.01 3.67.05 4.95c.06 1.27.29 2.25.63 3.07.35.86.8 1.58 1.51 2.29.71.71 1.43 1.16 2.29 1.51.82.34 1.8.57 3.07.63C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.05c1.27-.06 2.25-.29 3.07-.63.86-.35 1.58-.8 2.29-1.51.71-.71 1.16-1.43 1.51-2.29.34-.82.57-1.8.63-3.07.06-1.28.05-1.69.05-4.95s.01-3.67-.05-4.95c-.06-1.27-.29-2.25-.63-3.07-.35-.86-.8-1.58-1.51-2.29-.71-.71-1.43-1.16-2.29-1.51-.82-.34-1.8-.57-3.07-.63C15.67.01 15.26 0 12 0z"/>
                                <path d="M12 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8z"/>
                                <circle cx="18.41" cy="5.59" r="1.44"/>
                            </svg>
                        </a>

                        <a href="tiktok.com/minhshop" className="text-sx p-1 hover:text-[#000]" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 fill="currentColor" className="w-6 h-6 text-sx p-1">
                                <path d="M17.5 2h-3.2v12.1c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.3 0 .6.1.9.2V8.2c-.3 0-.6-.1-.9-.1-3.2 0-5.8 2.6-5.8 5.8S8.3 20 11.5 20s5.8-2.6 5.8-5.8V8.7c1 .7 2.1 1.1 3.3 1.2V6.8c-1.8-.1-3.1-1.5-3.1-3.3V2z"/>
                            </svg>

                        </a>

                    </div>
                    <div className="switch"></div>
                </div>
            </div>
        </div>
        </>
    )
}