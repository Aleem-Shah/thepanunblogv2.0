import React from 'react'
import styles from './styles.module.scss'
const Counter = () => {
  return (
    <>
    <div className={styles.main__container}>

        <div className={styles.img__container}>
            <img src='https://res.cloudinary.com/thepanunblog/image/upload/v1692372033/srdnhvoanbrojui1756w.jpg'></img>
        </div>
    <div className={styles.text__container}>
    <h1>
            150+
            <span> Blogs Posted</span>
        </h1>

        <h1>
            50+
             <span> Authors</span>
        </h1>
        
        <h1>
            1000+
            <span> Visits </span>
        </h1>
        
        <h1>
            150+
            <span> Blogs Posted</span>
        </h1>




    </div>
        
    </div>
    </>
  )
}

export default Counter