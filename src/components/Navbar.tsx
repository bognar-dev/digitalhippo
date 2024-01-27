"use client"
import Link from "next/link"
import { JSX, SVGProps } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { useRouter, useSearchParams, usePathname,useParams } from "next/navigation"
export default function Navbar() {
  const params = useParams()
  console.log(params)
  return (
    <NavigationMenu className="bg-background px-1 py-2 shadow-md container flex items-center justify-items-stretch content-between justify-between min-w-full">
        <div className=" pl-2 flex items-center space-x-4">
          <NavigationMenuLink className="text-md font-semibold uppercase tracking-wide" href={`
          
          `}>
            Projections
          </NavigationMenuLink>
          <NavigationMenuLink className="text-md font-semibold uppercase tracking-wide" href="#">
            By Adela Novakova
          </NavigationMenuLink>
        </div>

        <div className="flex items-center space-x-4 pr-2 ">
          <Link className="text-md font-semibold uppercase tracking-wide" href="#">
            Portfolio
          </Link>
          <Link className="text-md font-semibold uppercase tracking-wide" href={
            `?season=${params.season}`
          }>
            {params.season}
          </Link>
          <MenuIcon className="h-6 w-6" />
        </div>
      
    </NavigationMenu>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
