import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { NavigationMenuDemo } from "./Navbar"
import { NavigationMenuDemo1 } from "./Navbar3"
import { NavigationMenuDemo2 } from "./Navbar4"
import Link from "next/link"



export function Sheets() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Image src="/navicon.png" alt="navicon" width={50} height={20}/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex justify-center items-center"><Image src="/Logo.png" alt="/Logo" width={100} height={100}/></div></SheetTitle>
          <SheetDescription>
           
Al Jannat Mini Mart: Where every purchase is a step towards paradise.
          </SheetDescription>
        </SheetHeader>
        <div className="flex justify-center items-center pt-5">
        <button className='bg-blue-500 px-5 py-3 rounded-full text-white text-xl'><Link href="/">Home</Link></button>
       
        </div>
        <div className=" gap-4 py-4">
          <div className="flex justify-center items-center pl-10  ">
          <NavigationMenuDemo1/>

          
      
          </div>
          <div className="flex justify-center items-center pt-5 pl-10">
          <NavigationMenuDemo2/>
          </div>
         
        </div>
     
        <SheetFooter>
          <SheetClose asChild>
        
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
