"use client"
import React from 'react'

import styles from './styles.module.scss'
import Navbar from '../Header/Navbar/Navbar';
import Footer from '../Footer/index';
import { Card, CardBody } from '@nextui-org/react';
import { BsFillHeartFill, BsInstagram, BsPencil } from 'react-icons/bs';
import {FiTwitter}  from 'react-icons/fi';
import {TfiWrite}  from 'react-icons/tfi';
import {AiFillPlusCircle, AiOutlineLinkedin}  from 'react-icons/ai';
import  router  from 'next/navigation';
const ProfileCard = ({user}) => {
  return (
    <div className="">
    <Navbar user={user} />
        <div className="headings">
        <h1>My profile</h1>
        <span>Check Or Update Your Profile.</span>
      </div>
      <div className={styles.main__container}>
    
    <div className={styles.profile__main__container} >
      <div className={styles.profile__info}>
      <div className={styles.profile__img}>
        <img src= {user?.imageUrl} alt="" /><AiFillPlusCircle/>
       
      </div>

        <h1>{user?.firstName}{user?.lastName}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ea?</p>
        <button onClick={()=>{
          router.push("/profile/edit")
        }}><BsPencil></BsPencil>Edit Profile</button>
        <span className={styles.red}><BsFillHeartFill></BsFillHeartFill>1 Likes</span>
        <span><TfiWrite/>1 Blogs Posted</span>
        <hr />
      <div className={styles.profile__socials}>

        <span><BsInstagram></BsInstagram>Insta</span>
<span>
        <FiTwitter></FiTwitter>Twitter</span>
        <span><AiOutlineLinkedin></AiOutlineLinkedin>Linkedin</span>
      </div>
        <hr />
        <div className={styles.websitelink}>

        </div>
      </div>
     
    

      <div className={styles.myblogs__container}>
      <div className={styles.container}>
      <div className={styles.img}>
        <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*4GLthNbw3i2DCih_4G-qhw.jpeg" alt="" srcset="" />
      </div>
      <div className={styles.content}>
        <span>COMMUNITY</span>
        <h1>How To Start Preparing For compTIA Exam</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          deleniti harum temporibus aliquid. Ab magnam enim aliquid modi, rerum
          earum.
        </p>
      <div className={styles.author}>
        <img src="https://res.cloudinary.com/thepanunblog/image/upload/v1692122086/uo0efcgikvuwzbbcb9yl.jpg" alt="" srcset="" />
        <span className={styles.name}>Aleem Shah</span>
      </div>
      <date hidden></date>
    </div>
      </div>
      <div className={styles.container}>
      <div className={styles.img}>
        <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*4GLthNbw3i2DCih_4G-qhw.jpeg" alt="" srcset="" />
      </div>
      <div className={styles.content}>
        <span>COMMUNITY</span>
        <h1>How To Start Preparing For compTIA Exam</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          deleniti harum temporibus aliquid. Ab magnam enim aliquid modi, rerum
          earum.
        </p>
      <div className={styles.author}>
        <img src="https://res.cloudinary.com/thepanunblog/image/upload/v1692122086/uo0efcgikvuwzbbcb9yl.jpg" alt="" srcset="" />
        <span className={styles.name}>Aleem Shah</span>
      </div>
      <date hidden></date>
    </div>
      </div>
    
  
      </div>


    </div>
     
    </div>
      <Footer/>
    </div>
  )
}

export default ProfileCard