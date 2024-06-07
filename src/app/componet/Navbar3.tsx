"use client"
 
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
 
export function NavigationMenuDemo1() {
  return (
    
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        
          <NavigationMenuTrigger  ><div  className=" bg-blue-500 py-3 px-5 w-full rounded-full hover:shadow-2xl hover:bg-blue-300 hover:shadow-black text-white text-xl ">Grocery</div></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-full lg:w-full lg:grid-cols-[.75fr_1fr]">
             <li>Veg</li>
            <li>powders</li>
            <Link href="http://localhost:3000/componet/Vegetable"><li>Vegetables</li></Link>
            <li>Vegetables</li>
            <li>Vegetables</li>
            <li>Vegetables</li>
            <li>Vegetables</li>
            <li>Vegetable</li>
            </ul>
          </NavigationMenuContent>
    
        </NavigationMenuItem>
        
       
       
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  
  )}