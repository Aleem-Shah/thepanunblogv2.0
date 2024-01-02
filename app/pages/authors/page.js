"use client"
import React from 'react'
import Navbar from '../../../components/Header/Navbar/Navbar'
import Footer from '../../../components/Footer/index'
import AuthorsCard from '../../../components/Authors'

export default function Authors() {
  return (
    <div>


        <Navbar/>
        <hr />
      <div className="headings">
        <h1>Authors</h1>
        <span>Verified authors</span>
      </div>
        <AuthorsCard/>
       
    </div>
  )
}
