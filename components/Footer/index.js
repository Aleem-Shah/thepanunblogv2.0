import React from 'react'
import  styles from "./styles.module.scss"
import Links from './Links'
import Socials from "./Socials";
import Copyright from "./Copyright";
export default function index() {
  return (
   <div className={styles.footer}>
    <div className={styles.footer__container}>
    <Links />
        <Socials />
       
        <Copyright />
    </div>
   </div>
  )
}
