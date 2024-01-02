"use client"
import React from 'react'
import Header from "../../../components/Header/Navbar/Navbar"
import Footer from "../../../components/Footer/index"
import Head from 'next/head'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import styles from './babbles.module.scss'
export default function babbles() {
  
  return  (
    <div className={styles.main__container}>

    <div className={styles.nato}>
        <Header/>
        <hr />
        <div className="headings">
        <h1>Babbles</h1>
        <span>Short Posts</span>
      </div>
      <Card  className={styles.card}cclassName="max-w-[340px] ">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600"> Zoey Lang</h4>
            {/* <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5> */}
          </div>
        </div>
       
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
  
   
      </CardFooter>
    </Card>
        <Footer/>
    </div>
</div>
  )
}

const Babbles={
  
  babbles:{
    Author:"",
    content:""
  }
}