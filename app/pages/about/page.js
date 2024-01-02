"use client"
import React from "react";
import Navbar from "../../../components/Header/Navbar/Navbar";
import Footer from "../../../components/Footer/index";
import styles from "./about.module.scss";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Counter from "../../../components/Counter/Counter";
export default function about() {
  const para1 =
    "The Panun Blog is a multimedia platform aimed at providing an inclusive forum for the people of Kashmir valley and beyond. Our vision is to facilitate a channel of healthy discourse and debate within the Kashmiri and non-Kashmiri communities. The idealistic tendency of humans to view the world as good or evil is a misinterpretation of reality. The outcomes of dialogue or the lessons to be learnt from our history cannot be distinctively categorized as being black or white. Look closely and you’ll see a broad patchwork of different shades of grey. We at the Panun Blog, do not claim that one will find an objective truth in this greyish spectrum, but atleast negotiations within this realm is where we will find commonalities with our adversaries and strive passionately to gather the courage to put aside futile differences and coexist peacefully for the sake of our future generations.";

  const para2 =
    "Do you ever feel like you have something to say to the world but don't know where to start? Don't worry, we got you covered! Panun is open for accepting blogs and short posts on all sorts of topics. There is no need to be overly anxious about whether your blogs and posts are appropriate to be posted on our website. Anything that is sincerely coming from your heart is immensely precious to our entire community. You may never know what words of yours could awaken a people of internet users. So, what are you waiting for? Post that piece of poetry on our website which is buried in your phone for too long now. Talk about your life and your ways of surviving in this brutal world: you too are a source of inspiration for someone on this globe. Aspire to inspire!";
  const para3 =
    " We seek to strive hard in order to put out the different shades of truth in the virtual domain, while fostering an atmosphere where the voices of the most disadvantaged and repressed sections of the society are amplified so that their words and views are given a fair hearing that they rightfully deserve. Here you will discover the unsung, blooming intellectuals of our time, who by the sheer power of their pen illuminate the dark corners of our world. Let the streets of the world echo the voices of the voiceless!";
  const para4 =
    "The Panun founder has been working on his dream project of creating the ultimate #panunplatform for months now. We have partnered with various local, national and international stakeholders to ensure a multifaceted collaboration of talented and ambitious thinkers and writers from all around the world via this platform. A lot of pain and efforts have been utilised in its making, but most importantly our love and passion for Kashmir and its people has driven us to launch this platform keeping in mind the need for spreading the positivity and the energy of Keashur Kalam on the internet. It is the way of our founder to say thanks to what Kashmir has blessed him with, and do something worthwhile for his people.  ";
  const para5 =
    "The word Panun finds its roots in the Kashmiri jargon, meaning 'one's own'. The entire Panun Team hopes that this platform feels no less than a home, both to the readers as well as to the authors. As the name suggests, consider this blog 'to be your own.'";
  const para6 =
    "We welcome teenagers and adults alike to contribute their works on our platform. Join the movement today!";
  const para7 = "";

  return (
    <div>
      <Navbar />
      <hr />
      <div className="headings">
        <h1>About Us</h1>
        <span>Who We Are?</span>
      </div>
      <div className={styles.about__container}>
        <div className={styles.about__image}>
          <img
            src="https://res.cloudinary.com/thepanunblog/image/upload/v1692372033/srdnhvoanbrojui1756w.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className={styles.about__content}>
          <Accordion variant="splitted">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Vision of Inclusive Discourse"
            >
              <p> {para1}</p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title=" Empowerment Through Expression"
            >
              <p>{para2}</p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Amplifying Marginalized Voices"
            >
              <p>{para3}</p>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title=" The Journey to #panunplatform"
            >
              <p>{para4}</p>
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Accordion 5"
              title="Panun: A Home for All"
            >
              <p>{para5}</p>
            </AccordionItem>
            <AccordionItem
              key="6"
              aria-label="Accordion 6"
              title="Join the Movement"
            >
              <p>{para6}</p>
            </AccordionItem>
            <AccordionItem
              key="7"
              aria-label="Accordion 7"
              title="Engage and Connect"
            >
              <p>
                We are constantly improving our channels of communication
                through which we can effectively connect with our audience.
                Provide your valuable feedback by writing to us at   <a href="mailto:contact@panunblog.com">connect@thepanunblog.com </a> or submit your queries in our Get In
                Touch tab
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="">

        <Counter/>
      </div>

      <Footer />
    </div>
  );
}
