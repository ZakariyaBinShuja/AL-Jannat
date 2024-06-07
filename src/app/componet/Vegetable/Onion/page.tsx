import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DropdownMenuDemo2 } from './select/Select2'
const Pic1 = () => {
  return (
    <div className=' pl-10  items-center justify-items-center grid sm:grid-cols-1  sm:text-center  lg:grid-cols-2 lg:items-center'>
           <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black text-cyan-600 rounded-lg text-center mt-20'>
                    <Link href="http://localhost:3000/pic1"> <Image src="/onion.png" alt='onion' width={500} height={500} className='hover:opacity-80  '></Image></Link>
                    <Link href="http://localhost:3000/pic1"> <h1 className='text-2xl font-bold'>Onion</h1></Link>
                    
                    


                </div>
                <div className='sm:pt-10'><DropdownMenuDemo2/></div>

    </div>
  )
}
export default  Pic1