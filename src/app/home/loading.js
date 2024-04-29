import Image from "next/image";


export default function Loading() {
  return (
    <div className='bg-gray-200 z-50 w-full h-[90vh] flex justify-center items-center' >
      <span> Loading <Image src='/Images/loading.gif' width={100} height={100}></Image></span>
    </div>
  )
}
