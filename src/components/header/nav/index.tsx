'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

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

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
          <Footer photographer={links[selectedLink.index].photographer} stylist={links[selectedLink.index].stylist} artDirector={links[selectedLink.index].artDirector} />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive} />
      </div>
    </motion.div>
  )
}