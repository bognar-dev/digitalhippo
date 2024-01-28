import React from 'react'
import Image from "next/image";
import { Media } from '@/payload-types';

interface ShootHeaderProps {
    projection1: Media;
    projection2: Media;
    photographyText: string;
    weekText: string;
    yearText: string;
}

export default function ShootHeader({ projection1, projection2, photographyText, weekText, yearText }: ShootHeaderProps) {
    return (
        <section className=' min-w-full max-h-screen min-h-screen leading-none
                          grid grid-cols-7 p-3'>
            <section className="col-span-4 flex flex-col content-start place-items-end  justify-between items-baseline ">
                <div>
                    <Image className=' rounded-sm aspect-auto h-96 w-auto object-contain' src={projection2.url!} alt={''} />
                    <p className='text-md font-thin text-slate-700 uppercase'>{photographyText}</p>
                    <p className='text-xl font-bold uppercase'>{weekText}</p>
                </div>
                <div className='flex items-end'>
                    <span className="text-[10rem] leading-2 align-baseline font-black">{yearText}{'\u{2018}'}</span>
                </div>
            </section>
            <section className="col-span-3 flex flex-col relative">
                <Image fill className='rounded-sm relative object-cover' src={projection1.url!} alt={''} />
            </section>
        </section>
    )
}
