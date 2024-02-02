import { MotionValue, motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import { blur, translate } from '../../anim';
import { JSX } from 'react';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';

export default function Body({ links, selectedLink, setSelectedLink }: { links: { title: string, href: string }[], selectedLink: { isActive: boolean, index: number }, setSelectedLink: any }) {

    const getChars = (word: string) => {
        let chars: JSX.Element[] = [];
        word.split("").forEach((char: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | MotionValue<number> | MotionValue<string> | null | undefined, i: number) => {
            chars.push(
                <motion.span
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    key={`${char ?? ""}${i}`}>
                    {String(char)}
                </motion.span>
            );
        });
        return chars;
    }

    return (
        <div className="flex flex-wrap mt-10">
            {
                links.map((link, index) => {
                    const { title, href } = link;
                    return <Link key={`l_${index}`} href={href}>
                        <motion.p
                            className='m-0 flex overflow-hidden text-8xl pr-8 pt-2 font-light'
                            onMouseOver={() => { setSelectedLink({ isActive: true, index }) }}
                            onMouseLeave={() => { setSelectedLink({ isActive: false, index }) }}
                            variants={blur}
                            animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}>
                            {getChars(title)}
                        </motion.p>
                    </Link>
                })
            }
        </div>
    )
}
