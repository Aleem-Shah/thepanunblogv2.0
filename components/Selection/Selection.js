"use client"
import React from 'react'
import styles from './styles.module.scss'
import {Tabs, Tab} from "@nextui-org/react"; 
export default function Selection() {
  const variants = [

    "underlined",
   
  ];
  return (
    <div className={styles.selection}>
        <ul>
        <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Tabs className={styles.tab} key={variant} variant={variant} aria-label="Tabs variants">
          <Tab key="All" title="All"/>
          <Tab key="Science" title="Science"/>
          <Tab key="Technology" title="Technology"/>
          <Tab key="Finance" title="Finance"/>
        </Tabs>
      ))}
    </div>
        
        </ul>
        <hr />
    </div>
  )
}
