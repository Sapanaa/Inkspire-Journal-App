import React from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/button'
const NotFound = () => {
  return (
    <div className='flex flex-col items-center text-center justify-center h-screen'>
      <h1 className='text-8xl font-bold'>400</h1>
      <h2 className='text-red-700'>Page Not Found</h2>
      <p className='pb-5'>
        Opp&apos;s the page not found
      </p>
      <Link href = "/"
      >
        <Button variant={"journal"}>Back to Home</Button>
      </Link>
    </div>
  )
}

export default NotFound
