import Image from 'next/image'
import React from 'react'
import { NavigationMenuDemo } from './Navbar'
import { Sheets } from './Sheet'

export const Navbar2 = () => {
  return (
    <div className='flex justify-evenly items-center'>
        <div>
            <Image src="/Logo.png" alt='Logo' height={150} width={150}></Image>
        </div>
        <div></div>
        <div>
          <div className=' sm:hidden lg:block '>
          <div>
           
            <NavigationMenuDemo/></div>
       
         
          
            </div>

            
            <div className=' lg:hidden 2xl:hidden md:block'>
            <Sheets/>
            </div>
        </div>
    </div>
  )
}
