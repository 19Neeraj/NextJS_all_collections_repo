import Link from 'next/link'
import React from 'react'

export default function HomeNav() {
  return (
    <div>
       <div className=' flex flex-col justify-center h-full  bg-gray-200 p-3'>
      <ul className='flex flex-col gap-3'>
        <li> <Link href='/home/profile'> Profile</Link></li>
        <li> <Link href='/home/loading_page'> Loading_page</Link></li>
        <li> <Link href='/home/error_page'> Error_page</Link></li>
        
      </ul>
    </div>
    </div>
  )
}
