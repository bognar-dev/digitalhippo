
import Shooting from '@/components/shoot'
import { getPayloadClient } from '@/get-payload'
import { Shoot } from '@/payload-types'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const payload = await getPayloadClient()
    const { docs: shoots } = await payload.find({
        collection: 'shoots'
    })
    return shoots.map((shoot: Shoot) => {
        return {
            slug: shoot.shootName,
        };
    })
}

export default async function Home({ params }: { params: { slug: string } }) {

    const { slug } = params

    const payload = await getPayloadClient()

    const { docs: shoots } = await payload.find({
        collection: 'shoots',
        where: {
            shootName: {
                equals: slug
            }
        }
    })

    const [shoot] = shoots

    if (!shoot) return notFound()
    return (
        <main className="bg-background">
            <Shooting shoot={shoot} />
        </main>
    )
}
