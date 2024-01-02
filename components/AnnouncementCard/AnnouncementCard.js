

import styles from './styles.module.scss';



const AnnouncementCard=( {Announcements}
 )=> {
  console.log("announcements",Announcements)

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="https://i.imgur.com/xDhJmnU.png" alt="" />
      </div>

      <div className={styles.infos}>
        <span>ANNOUCEMENTS</span>
        <h1>{Announcements?.title}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos magni magnam debitis sed, sint voluptates enim unde in quasi? Laborum.

        </p>
<div className={styles.logo}>

        <img src="https://i.imgur.com/TrphIuu.jpg"></img>
        <t>The Panun Team</t>
       
</div>
        <date hidden>May  18,2023</date>
      </div>
    <hr />
    </div>
  )
}


export default AnnouncementCard