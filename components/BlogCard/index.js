"use client"
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";



export default  function BlogCard({blogs}) {


  
  return (

 
    
    
    <div id="blog"  key={blogs._id} className={styles.main}>
    
      <hr />
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={blogs.image} alt="" srcset="" />
      </div>
      <div className={styles.content}>
        <span>COMMUNITY</span>
        <h1>{blogs.title}</h1>
        <p className="text-[#1a1919]">
         {blogs.shorttext}
        </p>
      <div className={styles.author}>
        <img src={blogs.authorImage} alt="" srcset="" />
        <span className={styles.name}>{blogs.author}</span>
      </div>
      <date hidden></date>
    </div>
      </div>
  
   
    <hr />
    </div>
  );
 
}

