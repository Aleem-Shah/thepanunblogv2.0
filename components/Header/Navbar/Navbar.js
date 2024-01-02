"use client"
import React from 'react'
import styles from "./styles.module.scss"
import Link from 'next/link'

import {RxAvatar} from "react-icons/rx"
import {BiPencil} from "react-icons/bi"
import {RiArrowDropDownLine} from "react-icons/ri"
import { redirect } from 'next/dist/server/api-utils'
import { Router } from 'next/navigation'
import DDdown from '../../Dropdown'

import { VscVerifiedFilled } from 'react-icons/vsc'
import { Button, Tooltip } from '@nextui-org/react'
import { currentUser, useUser } from '@clerk/nextjs'
import WriteModal from '../../Modals/WriteModal/WriteModal'
const red=()=>{
    return Router.push("/write")
}
export default  function Navbar({user}){
 

  return (
    
    <div className={styles.navbar}>
        <div className={styles.navbar__container}>
<Link href='/'>
            <img src="https://res.cloudinary.com/thepanunblog/image/upload/v1692382579/etaibnobfcsigyc5oxda.png" alt="Logo" srcset="" />
</Link>
        <nav>
            <ul>
                <li>
                    <a href="/#blog">

                    Blog
                    </a>
                </li>
                <li>
                    <a href="/pages/teams">

                    Team
                    </a>
                    </li>
                {/* <li>
                    <a href="/newsletter">

                    NewsLetter
                    </a>

                </li> */}
                <li>
                    <a href="/pages/babbles">

                    Babbles
                    </a>
                </li>
                <li>
                    <a href="/pages/about">

                    About
                    </a>
                    </li>
               
                <li>
                    <a href="/pages/authors">

                    Authors
                    </a>
                </li>
                <li>
                    <a href="/pages/contact">

                    Contact
                    </a>
                </li>
              
            </ul>
        </nav>
        
    <div className={styles.Nav__Logged}>
        <DDdown name="Aleem" img="" user={user}></DDdown><VscVerifiedFilled  className={styles.verify}/>


        
     
      


 

          
      
         <div className={styles.button2}>
           <WriteModal/>
      
        
        </div> 
        
    </div>
        
   {/* {session?(

   ):(     <div className={styles.navbar__creds}> 
                <a hidden onClick={()=>{signIn()}}>Log in</a>
                <button onClick={()=>{
                    signIn()
                }}>Log In/Sign Up</button>

        </div>)} */}
    </div>
    </div>
  )
}

