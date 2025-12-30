import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Providers from "./providers";
import Navbar from "@/app/components/Navbar";
import { store, persistor } from '@/lib/store'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
    </head>

    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
                <Navbar/>
                <main className="container mx-auto p-4">
                    {children}
                </main>
        </Providers>
      </body>
    </html>
  );
}
