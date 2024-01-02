"use client"
import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {UserValidation} from "../../../lib/validations/user"
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
import * as z from "zod"
import { Input } from "../../ui/input"
import Image from 'next/image'
import {Textarea} from "../../ui/textarea"
import { isBase64Image } from '../../../lib/utils'
import { usePathname ,useRouter} from 'next/navigation'
import {useUploadThing} from "../../../lib/uploadthing"
import { updateUser } from '../../../lib/actions/user.actions'
const AccountProfile = ({user,btnTitle}) => {
  const [files, setFiles] = useState([])
  const {startUpload}=useUploadThing(
    "media"
  )
  const router=useRouter()
  const pathname=usePathname();
  console.log(files)
    const form =useForm({
        resolver:zodResolver(UserValidation),
        defaultValues:{
          profile_photo:user?.image||"",
          name:user?.name||"",
          username:user?.username||"",
          bio:user?.bio||""
        }
    })

    const handleImage=( e, feildChange)=>{
      e.preventDefault();
      const filereader= new FileReader();
      if (e.target.files&&e.target.files.length>0){
          const file=e.target.files[0];
          setFiles(Array.from(e.target.files));
          if(!file.type.includes('image')) return;

          filereader.onload= async (event)=>{
              const imageDataUrl=event.target?.result?.toString()||"";

              feildChange(imageDataUrl);

          }
          filereader.readAsDataURL(file)
      }
  }
   
    const onSubmit=async (values)=> {
     const blob=values.profile_photo;
     const hasImageChanged=isBase64Image(blob)
     if(hasImageChanged){
      const imgRes= await startUpload(files)
      if(imgRes && imgRes[0].fileUrl){
        values.profile_photo=imgRes[0].fileUrl
      }
     }
     //backend function to update the user
     await updateUser({
      userId:user.id,
      username:values.username,
      name:values.name,
      bio:values.bio,
      image:values.profile_photo,
      path:pathname,
     }
   
     )
     if(pathname==='profile/edit'){
      router.back();
     }else{
      router.push('/')
     }
    }
    return (
    
      <Form {...form}>
      <form 
        className="flex flex-col justify-start gap-2"
      onSubmit={form.handleSubmit(onSubmit)} >
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem className="flex  gap-4 ">
              <FormLabel>

                {field.value?(
                  <Image
                  src={field.value}
                  alt='profile-photo'
                  width={96}
                  height={96}
                  priority
                  className='rounded-full object-contain'
                  />
                ):(
                  <Image
                  src={field.value}
                  alt='profile-photo'
                  width={96}
                  height={96}
                  priority
                  className='rounded-full object-contain'
                  />
                )}
              </FormLabel>
              <FormControl className="flex-1 text-bold ">
                <Input 
                type="file"
                accept="image/*"
                placeholder="Upload a photo"
                className="bg-transparent outline-none border-none text-blue-700 font-bold cursor-pointer"
                onChange={(e)=>handleImage(e,field.onChange)}
                
                
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col   gap-1 ">
              <FormLabel>

               Name
              </FormLabel>
              <FormControl className="flex-1 text-bold">
                <Input 
              
                type="text"
               
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
          name="username"
          render={({ field }) => (
            <FormItem className="flex  gap-1 flex-col   ">
              <FormLabel>

               UserName
              </FormLabel>
              <FormControl className="flex-1 text-bold">
                <Input 
              
                type="text"
               
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
          name="bio"
          render={({ field }) => (
            <FormItem className="flex  gap-1 flex-col   ">
              <FormLabel>

               bio
              </FormLabel>
              <FormControl className="flex-1 text-bold">
                <Textarea
              
                rows={10}
                
                {...field}
                className="bg-[#ccc] border-none"
                
                />
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

export default AccountProfile