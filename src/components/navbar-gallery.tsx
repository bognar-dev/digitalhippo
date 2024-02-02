
import React from 'react'
import { getPayloadClient } from '@/get-payload'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MotionDiv } from '@/components/motiondiv'
import { Shoot } from '@/payload-types'


const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, y: "100%" },
}


type Props = { isHovered: boolean }

const NavbarGallery = async ({ isHovered }: Props) => {
    const payload = await getPayloadClient()
    const { docs: shoots } = await payload.find({
        collection: 'shoots'
    })
    return (
       
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {shoots.map((shoot: Shoot) => (
                    <div className="relative group" key={shoot.id}>
                        <Image
                            alt="Shoot"
                            className="rounded-md object-cover transition-transform duration-200 group-hover:scale-105"
                            height="200"
                            src={shoot.mainPicture.url!}
                            style={{
                                aspectRatio: "300/200",
                                objectFit: "cover",
                            }}
                            width="300"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                            <h3 className="text-lg font-semibold text-white">{shoot.shootName}</h3>
                        </div>
                    </div>
                ))}
            </div>

        
    )
}

export default NavbarGallery