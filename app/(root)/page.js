
import Header from "../../components/index"
import Footer from '../../components/Footer/index'
import Image from 'next/image'
import Selection from '../../components/Selection/Selection'
import BlogCard from '../../components/BlogCard/index'
import AnnouncementCard from '../../components/AnnouncementCard/AnnouncementCard'
import { SignOutButton, UserButton, currentUser } from '@clerk/nextjs'
// import { NextUIProvider } from '@nextui-org/react'
import {getBlogs} from "../../sanity/actions"
export default async function Home() {
  const revalidate=900;
  
  const user= await currentUser()
  const blogs= await getBlogs()


  return (
   <main>

    

    <Header user={user}/>
    <Selection/>
    <AnnouncementCard/>




    {blogs?.length>0?(
          blogs.map((blogs)=>(
            <div className="">

              <BlogCard blogs={blogs}/>
            </div>
            
          ))):(
            <p className='body-regular text-white-400'>
              No Resource found
            </p>
          )
        }
    <Footer/>
 
    
   </main>
  )
}
