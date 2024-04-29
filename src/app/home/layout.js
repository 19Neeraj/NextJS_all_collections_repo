import React from 'react'
import HomeNav from '../Components/HomeNav'

export default function Homelayout({children}) {
  return (
    <div className='flex h-[90vh]'>
        <HomeNav></HomeNav>
      <div className='flex justify-center items-center w-full'>{children}</div>
    </div>
  )
}
