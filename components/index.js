

import Hero from './Header/Hero/Hero'
import Navbar from './Header/Navbar/Navbar'
import styles from './Header/styles.module.scss'
export default function Header({user}) {
  return (
    <div className={styles.main}>
      <div>
      <Navbar user={user} />

    
    <Hero/>

      </div>
  
    </div>
  )
}