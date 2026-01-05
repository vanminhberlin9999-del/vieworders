'use client'

import Topbar from "@/app/components/layout/(header)/Topbar";
import Navbar from "@/app/components/layout/(header)/Navbar";

export default function Header() {


    return (
        <div className="header">
            <Topbar />
            <Navbar />
        </div>
    )
}

