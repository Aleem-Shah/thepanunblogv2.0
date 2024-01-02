

import { SignOutButton, UserButton, currentUser } from '@clerk/nextjs'
// import { NextUIProvider } from '@nextui-org/react'
import {getBlogs} from "../../sanity/actions"
import Page from "./myprofile/page"
export default async function Home() {
  const revalidate=900;
  
  const user= await currentUser()
  const blogs= await getBlogs()


  return (
   <main>
    <Page user={user}/>
      
    

   
   </main>
  )
}
