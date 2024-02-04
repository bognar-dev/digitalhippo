'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';
import { Shoot } from '@/payload-types';

const links = [
  {
    title: "Projections",
    photographer: "Adela Novakova",
    stylist: "Adela Novakova",
    artDirector: "Adela Novakova",
    href: "/",
    src: "home.png"
  },
  {
    title: "Perfume",
    photographer: "Adela Novakova",
    stylist: "Adela Novakova",
    artDirector: "Adela Novakova",
    href: "/shop",
    src: "shop.png"
  },
  {
    title: "Long Exposure",
    photographer: "Susan Colon",
    stylist: "Adela Novakova",
    artDirector: "Adela Novakova",
    href: "/about",
    src: "home.png"
  },
  {
    title: "New Romantic",
    photographer: "Adela Novakova",
    stylist: "Adela Novakova",
    artDirector: "Adela Novakova",
    href: "/lookbook",
    src: "lookbook.png"
  },
  {
    title: "Cyberpunk",
    photographer: "Adela Novakova",
    stylist: "Adela Novakova",
    artDirector: "Adela Novakova",
    href: "/contact",
    src: "contact.png"
  }
]

export default function Index({ shoots }: { shoots: Shoot[] }) {


  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });
  console.log(shoots[selectedLink.index].mainPicture.url!)
  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body shoots={shoots} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
          <Footer photographer={shoots[selectedLink.index].Photographer.FirstName} stylist={shoots[selectedLink.index].Stylist.FirstName} artDirector={shoots[selectedLink.index].ArtDirector.FirstName} />
        </div>
        <Image src={shoots[selectedLink.index].mainPicture.url!} isActive={selectedLink.isActive} />
      </div>
    </motion.div>
  )
}