"use client"
import React from 'react'
import Navbar from '../../../components/Header/Navbar/Navbar'
import Footer from '../../../components/Footer/index'
import styles from './teams.module.scss'
import { Card, CardBody } from '@nextui-org/react'
import { VscVerifiedFilled } from 'react-icons/vsc'
export default function team() {
  return (
    <div className={styles.heading}>
        <Navbar/>
        <hr />
        <div className="headings">
        <h1>Our Team</h1>
        <span>Who turned an idea into reality</span>
      </div>

        {
         Team.map((team, i) => (
           <div className={styles.teams__container}>
          
           
           {team.Members.map((member) => (
             <div className={styles.teams__card}>
                <Card className={styles.teams__cardbody}>
                <CardBody>
                  <img
                    src={member.img}
                    alt=""
                    srcset=""
                  />
                  <span>{member.name} <VscVerifiedFilled  className={styles.verify}/>  </span>  
                  <sm>{member.role}</sm>
                  <p>{member.bio}</p>
                </CardBody>
              </Card>
       </div>
      
       ))}
     </div>
   ))}

        <Footer/>




    </div>
  )
}



const Team = [
  {
    Members: [
      {
        name: "Ahmad Pathan",
        bio: "As the founder of Panun Blog, my name is Ahmed Pathan, and my vision was to establish a platform where Kashmiri individuals could freely express and share their thoughts. Panun Blog stands as a space for the vibrant voices of Kashmir to be heard, fostering a sense of community and connection through the power of words.",
        role:"Founder",
        img: "https://i.imgur.com/HaoYiZJ.jpeg",
      },
      {
        name: "Aleem Shah",
        bio: "Greetings! I'm Aleem Shah, the developer behind Panun Blog. Collaborating with Ahmed Pathan, the visionary founder, was an inspiring journey. Translating his passion into a seamless digital platform was a rewarding challenge. Together, we've crafted a space where Kashmiri voices resonate. Working alongside Ahmed was a harmonious blend of creativity and innovation. Here's to Panun Blog, where technology and vision converge!",
        role:"CTO,Developer",
        img: "https://res.cloudinary.com/thepanunblog/image/upload/v1692122086/uo0efcgikvuwzbbcb9yl.jpg",
      },
      {
        name: "Faheem Wani",
        role:"Graphic Designer",
        bio: "Hello, I'm Faheem Wani, the creative mind behind Panun Blog's captivating visual identity. Crafting the logos and UI elements was a delightful endeavor. Infusing Kashmiri culture into every design was both an honor and a joy. Working collaboratively with Ahmed Pathan and the development team added depth to the project. Together, we've woven aesthetics into functionality, ensuring Panun Blog is a visual treat. Join us on this visually enchanting journey at Panun Blog!        ",
        img: "https://res.cloudinary.com/thepanunblog/image/upload/v1692095437/lvkdlkinsbblvylysuiy.jpg",
      },
  
    ],
  },
];
