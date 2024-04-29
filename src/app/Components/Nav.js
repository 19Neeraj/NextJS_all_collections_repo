import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className=' flex justify-center w-full bg-slate-300 p-3'>
      <ul className='flex gap-3'>
        <li> <Link href='/home'> Home</Link></li>
        <li> <Link href='/about'> About</Link></li>
        <li> <Link href='/contact'> Contact</Link></li>
      </ul>
    </div>
  )
}
