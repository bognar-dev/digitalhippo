import { Section } from '@react-email/components'
import React from 'react'
import ShootHeader from './shoot-header'
import Image from 'next/image'
import { Shoot} from '../payload-types'


export default function Shooting(props :{shoot : Shoot} ) {
    
  return (
    <>
    <ShootHeader projection1={props.shoot.mainPicture} projection2={props.shoot.smallTop} photographyText={props.shoot.shootName} weekText={props.shoot.Tag} yearText={props.shoot.year}/>
      <Section className=' mt-5 my-4 min-w-full max-h-screen min-h-screen leading-none
      flex justify-center justify-items-center '>
        <h2 className='justify-items-start items-center uppercase font-extrabold flex text-8xl'>
          lumine
          <span className='px-4'><Image className='  rounded-sm aspect-auto h-[40rem] w-auto object-contain' src={props.shoot.middleSplit.url!} alt={''} /></span>
          scence</h2>

      </Section>
      <section className=' min-w-full max-h-screen min-h-screen leading-none
      grid grid-cols-3 grid-rows-3'>
        <Image className='p-5 rounded-sm aspect-auto col-span-1 row-span-1 w-auto object-contain' src={props.shoot.row1.url!} alt={''} />
        <Image className='p-5 rounded-sm aspect-auto col-span-1 row-span-3 w-auto object-contain' src={props.shoot.row1.url!} alt={''} />
        <Image className='p-5 rounded-sm aspect-auto col-span-1 row-span-1 w-auto object-contain' src={props.shoot.row1.url!} alt={''} />
      </section>
      </>
  )
}
