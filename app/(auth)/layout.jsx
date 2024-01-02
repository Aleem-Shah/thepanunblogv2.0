import { ClerkProvider } from "@clerk/nextjs"
import {Inter} from "next/font/google"
import '../globals.scss' 
export const metadata={
    title:'The Panun Blog',
    description:"A social media for geeks and young einsteins",
    
}

const inter=Inter({subsets:["latin"]})
export default function RootLayout({children}){
    return (
  
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>


    )
}