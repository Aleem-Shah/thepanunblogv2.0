import React from "react";
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, RadioGroup, Radio} from "@nextui-org/react";
import {RiArrowDropDownLine} from "react-icons/ri"
import {VscVerifiedFilled} from "react-icons/vsc"

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar, User} from "@nextui-org/react";
import { redirect } from "next/dist/server/api-utils";
import router from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
export default function DDdown({user}) {
 const session=false
    // const switchT=(x)=>{
    //   router.push(`/${x}`)
    // }
console.log(user)



    
 return(
  <div className="flex items-center medium    gap-4">
    
     
      <Dropdown placement="bottom-start  "  >
        <DropdownTrigger className="medium">
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: `${user?.imageUrl}`
            }}
            className="transition-transform  "
            description={"@"+user?.username}
            name={`${user?.firstName} `}
          />
          
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">{user?.email || user?.firstName}</p>
          </DropdownItem>
          <DropdownItem key="edit" onClick={
            ()=>{
              router.push("/profile/myprofile")
            }
          }>
           

            My Profile
       
          </DropdownItem>
          <DropdownItem key="edit" onClick={
            ()=>{
              router.post("/profile/edit")
            }
          }>
           

            Edit Profile
       
          </DropdownItem>
          
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={()=>{
          }}>
      
           { SignOutButton()}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
 
}



