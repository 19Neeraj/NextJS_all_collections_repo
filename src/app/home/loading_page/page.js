import React from 'react'

async function takeTime(){
  await new Promise((resolve)=>{
    setTimeout(resolve,3000);
  })
}
export default async function Loading_page() {
  await takeTime();
  return (
    <div>
      this is loading page
    </div>
  )
}
