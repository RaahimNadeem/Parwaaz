import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { User } from 'lucide-react'

const SetupPage = () => {
  return (
    // <p> Hello Admin Dashboard </p>
    <div className='p-4'>
      {/* If you don't write this after you logout, you'll be redirected to the Clerk Page  */}
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default SetupPage
