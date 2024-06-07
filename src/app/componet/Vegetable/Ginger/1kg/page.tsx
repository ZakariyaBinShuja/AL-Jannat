
import Image from "next/image"
import Link from "next/link"

 const Kg1 = () => {
    return (
      <div>
          <div className='text-blue-500 text-3xl text-center mt-10 bg-slate-300 font-bold py-3'>
                      <h1>You Select 1 bunch</h1>
                  </div>
      <div className='grid grid-cols-2 items-center  justify-items-center sm:grid-cols-1 sm:mt-10 lg:grid-cols-2'>
             <div className='border-blue-400 border-x-4 border-y-4 hover:shadow-2xl hover:shadow-black text-cyan-600 rounded-lg text-center mt-20'>
                      <Link href="http://localhost:3000/Ginger/1kg"> <Image src="/ginger.png" alt="/ginger" width={200} height={200} className="w-full"></Image></Link>
                      <Link href="http://localhost:3000/Ginger/1kg"> <h1 className='text-2xl font-bold'>Ginger</h1></Link>
                      <Link href="http://localhost:3000/Ginger"> <h1 className='text-2xl font-bold'>Rs:50</h1></Link>
                      
  
  
                  </div>
  
                  <div><Link href="https://wa.link/xycgwi"><button className='bg-black text-white px-5 py-3 rounded-full hover:shadow-black hover:shadow-2xl hover:bg-slate-500 sm:mt-10'>Place Order On Whatsapp</button></Link></div>
                  </div>
  
                  
  
                  </div>
  
                  )}
                  export default Kg1