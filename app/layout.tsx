import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Providers from "./providers";
import Header from "@/app/components/layout/(header)/Header";
import {Roboto_Slab, Open_Sans} from "next/font/google";
import {ThemeProvider} from "next-themes";

const roboto_slab = Roboto_Slab({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap"
})

const open_sans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap"
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${roboto_slab.variable} ${open_sans.variable}`}>

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
    </head>

    <body className="font-body">
        <Providers>
            <ThemeProvider attribute="class" enableSystem={true} defaultTheme={'system'}>
                <Header/>
                <main className="w-full mx-auto">
                    {children}
                </main>
            </ThemeProvider>

        </Providers>
      </body>
    </html>
  );
}
