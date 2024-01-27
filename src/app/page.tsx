import projection1 from '@/../public/shoots/projections/projection1.png'
import projection2 from '@/../public/shoots/projections/projection2.png'
import projection3 from '@/../public/shoots/projections/projection3.png'
import projection4 from '@/../public/shoots/projections/projection4.png'
import projection5 from '@/../public/shoots/projections/projection5.png'
import projection6 from '@/../public/shoots/projections/projection6.png'
import projection7 from '@/../public/shoots/projections/projection7.png'
import projection8 from '@/../public/shoots/projections/projection8.png'
import Image from 'next/image'
import Section from '../components/section'
export default function Home() {
  return (
    <main className="">
      <section className=' min-w-full max-h-screen min-h-screen leading-none
                          grid grid-cols-7 p-3'>
        <section className="col-span-4 flex flex-col content-start place-items-end  justify-between items-baseline ">
          <div>
            <Image className=' rounded-sm aspect-auto h-96 w-auto object-contain' src={projection2} alt={''} />
            <p className='text-md font-thin text-slate-700 uppercase'>photography</p>
            <p className='text-xl font-bold uppercase'>Week  12 projection no.1</p>
          </div>
          <div className='flex items-end'>
            <span className="text-[10rem] leading-2 align-baseline font-black">FALL 23{'\u{2018}'}</span>
          </div>
        </section>
        <section className="col-span-3 flex flex-col relative">
          <Image fill className='rounded-sm relative object-cover' src={projection1} alt={''} />
        </section>
      </section>
      <Section className=' mt-5 my-4 min-w-full max-h-screen min-h-screen leading-none
      flex justify-center justify-items-center '>
        <h2 className='justify-items-start items-center uppercase font-extrabold flex text-8xl'>
          lumine
          <span className='px-4'><Image className='  rounded-sm aspect-auto h-[40rem] w-auto object-contain' src={projection4} alt={''} /></span>
          scence</h2>

      </Section>
      <section className=' min-w-full max-h-screen min-h-screen leading-none
      grid grid-cols-3 grid-rows-3'>
        <Image className='p-5 rounded-sm aspect-auto col-span-1 row-span-1 w-auto object-contain' src={projection7} alt={''} />
        <Image className='p-5 rounded-sm aspect-auto col-span-1 row-span-3 w-auto object-contain' src={projection2} alt={''} />
        <Image className='p-5 rounded-sm aspect-auto col-span-1 row-span-1 w-auto object-contain' src={projection5} alt={''} />
      </section>
    </main>
  )
}
