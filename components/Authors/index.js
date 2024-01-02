import React from "react";
import styles from "./styles.module.scss";
import { Card, CardBody } from "@nextui-org/react";
import { VscVerifiedFilled } from "react-icons/vsc";
import Footer from "../../components/Footer/index"
export default function AuthorsCard() {
  return (
    <div className={styles.author__card}>
    
     
    


       {
         Authors.map((author, i) => (
           <div className={styles.author__container}>
          
           
           {author.Authors.map((author) => (
             <div className={styles.author__card}>
                <Card className={styles.author__cardbody}>
                <CardBody>
                  <img
                    src={author.img}
                    alt=""
                    srcset=""
                  />
                  <span>{author.name} <VscVerifiedFilled  className={styles.verify}/>  </span>  
      
                  <p>{author.bio}</p>
                </CardBody>
              </Card>
       </div>
      
       ))}
     </div>
   ))}

<Footer/>
      </div>

  );
}

const Authors = [
  {
    Authors: [
      {
        name: "Asad Ali",
        bio: "As a passionate teenager with a love for technology, I'm eagerly venturing into the fascinating world of technology explore its endless possibilities and contribute to its ever-evolving landscape",
        
        img: "https://res.cloudinary.com/thepanunblog/image/upload/v1692111961/sbw0ly4zx0ackvspfpdv.jpg",
      },
      {
        name: "Numair Muzzafar",
        bio: "A passionate young adult driven by a profound love for football and mathematics. Whether dissecting game strategies or solving complex equations, My heart races with excitement.",
        img: "https://res.cloudinary.com/thepanunblog/image/upload/v1691606240/hwjl7euejtvmc3giiylc.jpg",
      },
      {
        name: "Arsalan",
        bio: "I am a high school student from srinagar. I am interested in graphic designing, computer science. I am also interested in reading books , exploring new places and football.        ",
        img: "https://res.cloudinary.com/thepanunblog/image/upload/v1692095650/xuu2smo9fgnc0ksprhqa.jpg",
      },
      {
        name: "Mehroz Mir",
        bio: "A fervent devotee of the beauty and logic inherent in mathematics, driven to explore intricate theorems, unravel complex problems, and uncover the profound connections between abstract concepts.",
        img: "https://res.cloudinary.com/thepanunblog/image/upload/v1692095840/rg3d72nu8rncal0vhnih.jpg",
      },
      {
        name: "Faheem Wani",
        bio: "A passionate teenage storyteller weaving tales that radiate joy and wisdom. With an innate gift for crafting narratives that captivate hearts, my stories are a treasure trove of inspiration, offering valuable life lessons.",
        img: "https://res.cloudinary.com/thepanunblog/image/upload/v1692095437/lvkdlkinsbblvylysuiy.jpg",
      },
      {
        name: "Abdul Hanan Wani",
        bio: " I am a teenager from Kashmir, Srinagar. My main interests are physics and philosophy. I want to understand the way our universe works and how we as humans fit in it.        ",
        img: "https://res.cloudinary.com/thepanunblog/image/upload/v1692104044/wnbyt3krsmjqxxxh1z6m.jpg",
      },
      {
        name: "Visaal Syed",
        bio: " I'm a versatile mind with a passion for both finance and literature. Join me on a journey through the worlds of numbers and words as I explore the intricate realms of finance and dive into the captivating depths of literature. Together, we'll unravel the complexities, share insights, and embark on an intellectual adventure through my posts.",
        img: "https://res.cloudinary.com/thepanunblog/image/upload/v1692112222/xneyqoheudzo7c8d4pcu.jpg",
      },
    ],
  },
];
