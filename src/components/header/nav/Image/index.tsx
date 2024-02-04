import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.scss';
import { opacity } from '../../anim';

export default function Index({ src, isActive }: { src: string, isActive: boolean }) {
  return (
    <motion.div variants={opacity} initial="initial" animate={isActive ? "open" : "closed"} className=' md:relative md:object-cover md:w-[400px] md:h-[500px]'>
      <Image
        className='rounded-sm '
        src={src}
        fill={true}
        alt="image"
      />
    </motion.div>
  )
}