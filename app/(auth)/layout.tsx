import { ReactNode } from "react";
import Image from 'next/image'
import background from '../../public/login_background.jpg'
export default function Authlayout({children}:{children:ReactNode}) {
return (
  <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">  
   <Image
      src={background}
    className="hidden sm:flex sm:object-cover -z-10 brightness-50"
      alt="background image"
      priority
      fill
    />
  {children}
  </div>

  
)
}