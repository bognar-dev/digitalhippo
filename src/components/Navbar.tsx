"use client"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import React from "react"
import { JSX, SVGProps } from "react"
import NavbarGallery from "@/components/navbar-gallery"
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, y: "100%" },
}
export default function Component() {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className="flex flex-col ">
      <header className="flex h-16 items-center justify-between px-4 md:px-6"
        onClick={() => setIsHovered(true)}
      >
        <Link className="flex items-center gap-2" href="#">
          <span className="text-lg font-semibold hover:animate-bounce">Niklas Bognar</span>
        </Link>
        <nav className="flex gap-4">
          <Link className="text-xl font-medium hover:underline underline-offset-4 ease-in" href="#">
            Home
          </Link>
          <Link className="text-xl font-medium hover:underline underline-offset-4 ease-in" href="#">
            About
          </Link>
          <Link className="text-xl font-medium hover:underline underline-offset-4 ease-in" href="#">
            Contact
          </Link>

        </nav>
      </header>
      
    </div>
  )
}


