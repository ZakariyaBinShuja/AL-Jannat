import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Powders = () => {
    return (
        <div>
            <div className='bg-blue-500 text-white text-3xl font-extrabold mt-10 py-3 pl-5 mb-10 '>All Items</div>
            <div className=' gap-4 grid lg:grid-cols-4
    sm:grid-cols-2 mb-10'>

                <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black text-cyan-600 rounded-lg text-center mr-5 ml-5'>
                    <Link href="http://localhost:3000/pic1"> <Image src="/lal.png" alt='lal' width={200} height={200} className='hover:opacity-80  w-full'></Image></Link>
                    <Link href="http://localhost:3000/pic1"> <h1 className='text-2xl font-bold '>Kali Mirch</h1></Link>




                </div>
                </div>
                </div>

                )
}
