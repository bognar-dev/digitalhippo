import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';

export default function Footer({ photographer, stylist, artDirector }: { photographer: string, stylist: string, artDirector: string }) {
    return (
        <div className='flex items-end flex-wrap justify-between text-md uppercase mt-10'>
            <ul className=' mt-2 overflow-hidden list-none p-0 '>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span className='text-gray-600'>Photography:</span>{photographer}
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span className='text-gray-600'>Styling:</span> {stylist}
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span className='text-gray-600'>Art Direction:</span> {artDirector}
                </motion.li>
            </ul>

        </div>
    )
}
