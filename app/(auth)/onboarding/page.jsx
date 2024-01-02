import React from 'react'
import AccountProfile from '../../../components/Forms/AccountProfile/AccountProfile'
import { currentUser } from '@clerk/nextjs';
import styles from "./styles.module.scss"
const page = async() => {
    const user=await currentUser()
    const userInfo={};
    const userData={
       id:user?.id,
       ObjectId:userInfo?._id,
       username: userInfo?.username|| user?.username,
       name:userInfo?.name||user?.firstName||"",
       bio:userInfo?.bio||"",
       image:userInfo?.image||user?.imageUrl
    }
  return (
    <div>
         <div className="headings">
        <h1>Onboarding</h1>
        <span>Complete your profile to use the Panun Blog</span>
      </div>

      <section className={styles.main__container}>
     

        <AccountProfile user={userData} btnTitle="Continue"/>
       
      </section>
    </div>
  )
}

export default page