"use client"
import React from 'react'

import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {BlogValidation} from "../../../lib/validations/blog"
import { Button } from "../../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form"

import { useState } from 'react';
import { useRouter } from 'next/router';
import * as z from "zod"
import { Input } from "../../ui/input"
import Image from 'next/image'
import {Textarea} from "../../ui/textarea"

import RichText from "../../RichText/index"
const WriteBlog = ({user,btnTitle}) => {



    
    const form =useForm({
        resolver:zodResolver(BlogValidation),
        defaultValues:{
            mainImage:"",
          title:"",
          slug:"",
          body:"",
         
        }
    })

    const handleImage=(e,fieldChange)=>{
      e.preventDefault()
    }
    function onSubmit(values) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }
    return (
      
    
      <Form {...form}>
       
      
      <form 
        className="flex flex-col justify-start gap-2"
      onSubmit={form.handleSubmit(onSubmit)} >

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex flex-col   gap-1 ">
              <FormLabel>

               title
              </FormLabel>
              <FormControl className="flex-1 text-bold">
                <Input 
              
                type="text"
                onchange={(e)=>handleImage(e,field.onChange)}
                {...field}
                className="bg-[#ccc] border-none"
                
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="mainImage"
          render={({ field }) => (
            <FormItem className="flex  gap-4 ">
              <FormLabel>

                {field.value?(
                  <Image
                  src={field.value}
                  alt='Main Image'
                  width={196}
                  height={196}
                  priority
                  className=' object-contain'
                  />
                ):(
                  <Image
                  src={field.value}
                  alt='Main Image'
                  width={196}
                  height={196}
                  priority
                  className=' object-contain'
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-bold ">
                <Input 
                type="file"
                accept="image/*"
                placeholder="Upload a photo"
                className="bg-transparent outline-none border-none text-blue-700 font-bold cursor-pointer"
                onchange={(e)=>handleImage(e,field.onChange)}
                
                
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem className="flex  gap-1 flex-col   ">
              <FormLabel>

              Slug
              </FormLabel>
              <FormControl className="flex-1 text-bold">
                <Input 
              
                type="text"
                onchange={(e)=>handleImage(e,field.onChange)}
                {...field}
                className="bg-[#ccc] border-none"
                
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem className="flex  gap-1 flex-col   ">
              <FormLabel>

               body
              </FormLabel>
              <FormControl className="flex-1 text-bold">
              
              <div id='container'>

              <RichText/>
              </div>
              
              
            
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{btnTitle}</Button>
      </form>
    </Form>
  )
}

export default WriteBlog