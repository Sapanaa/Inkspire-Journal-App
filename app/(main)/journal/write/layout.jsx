import React ,{Suspense}from 'react'
import Link  from 'next/link'
import BarLoader from "react-spinners/BarLoader";
const Writelayout = ({children}) => {
  return (
    <div className='container mx-auto px-4 py-8'>
        <div>
    <Link href="/dashboard" className='flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-800' 
    >
        Back to dashboard
    </Link>
        </div>
     <Suspense fallback={<BarLoader/>}>{children}</Suspense> 
    </div>
  )
}

export default Writelayout
