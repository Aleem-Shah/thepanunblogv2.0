
import { currentUser } from '@clerk/nextjs';
import ProfileCard from '../../../components/ProfileCard/ProfileCard';
export default async function page() {
  const user= await currentUser()
  return (
    <ProfileCard user={user}/>
    
  )
}

