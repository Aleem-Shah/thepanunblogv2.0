import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../ui/dialog"
import { BiPencil } from 'react-icons/bi'
import WriteBlog from "../../Forms/WriteBlog/WriteBlog"
const WriteModal = () => {
  return (
    <div>
        <Dialog>
  <DialogTrigger><BiPencil/></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Write A New Blog</DialogTitle>
      <DialogDescription>
      
      </DialogDescription>
    </DialogHeader>


    <section>
      <WriteBlog btnTitle="Upload"/>
    </section>
    
  </DialogContent>
</Dialog>
    </div>
  )
}

export default WriteModal