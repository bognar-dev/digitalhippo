"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { JSX, SVGProps } from "react"

export default function Component() {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <div className="flex flex-col ">
      <header className="flex h-16 items-center justify-between px-4 md:px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link className="flex items-center gap-2" href="#">
          <CameraIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Niklas Bognar</span>
        </Link>
        <nav className="flex gap-4">
          <Link className="text-xl font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-xl font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-xl font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <motion.main
        className={`flex-1 overflow-auto p-4 md:p-6 ${isHovered ? "" : "hidden"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative group">
            <Image
              alt="Shoot"
              className="rounded-md object-cover transition-transform duration-200 group-hover:scale-105"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3 className="text-lg font-semibold text-white">Shoot Title</h3>
            </div>
          </div>
          <div className="relative group">
            <Image
              alt="Shoot"
              className="rounded-md object-cover transition-transform duration-200 group-hover:scale-105"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3 className="text-lg font-semibold text-white">Shoot Title</h3>
            </div>
          </div>
          <div className="relative group">
            <Image
              alt="Shoot"
              className="rounded-md object-cover transition-transform duration-200 group-hover:scale-105"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3 className="text-lg font-semibold text-white">Shoot Title</h3>
            </div>
          </div>
          <div className="relative group">
            <Image
              alt="Shoot"
              className="rounded-md object-cover transition-transform duration-200 group-hover:scale-105"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3 className="text-lg font-semibold text-white">Shoot Title</h3>
            </div>
          </div>
          <div className="relative group">
            <Image
              alt="Shoot"
              className="rounded-md object-cover transition-transform duration-200 group-hover:scale-105"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3 className="text-lg font-semibold text-white">Shoot Title</h3>
            </div>
          </div>
          <div className="relative group">
            <Image
              alt="Shoot"
              className="rounded-md object-cover transition-transform duration-200 group-hover:scale-105"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h3 className="text-lg font-semibold text-white">Shoot Title</h3>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  )
}

function CameraIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}
