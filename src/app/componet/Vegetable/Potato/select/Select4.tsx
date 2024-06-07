import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
 
export function DropdownMenuDemo5() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><div className="text-2xl">Select Kilo</div></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel><div className="text-2xl">Select Kilo</div></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <div className="text-xl" >
                <Link href="http://localhost:3000/componet/Vegetable/Potato/1kg">
            1 kg
            </Link>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
         <div className="text-xl">  2 Kg
         </div>            
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div  className="text-xl">
        3 Kg
        </div>
            
          </DropdownMenuItem>
       
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        
          <DropdownMenuSub>
            
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
               
              
                <DropdownMenuSeparator />
            
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        
        <DropdownMenuSeparator />
        <DropdownMenuItem>
           
          
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}