import { Endpoints } from '@/constants/endpoints'
import { ApiResponse, News } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsItems = ({ title, data, url }: { title: string, data: any, url: string }) => {
    return <div className='space-y-8 lg:pl-4'>
        <h1 className='sub-heading text-2xl mb-8 font-semibold'>{title}</h1>
        <>
            {
                data.slice(0, 4).map((news: News) => (
                    <Link href={url + news.url} key={news.id}>
                        <article className='grid grid-cols-3 place-items-cente gap-4 border-b-2 border-dotted py-2 border-black'>
                            <div className='overflow-hidden rounded-lg col-span-1'>
                                <Image src={Endpoints.ImageUrl + news.images} alt={news.image_alt} width={250} height={250} className='image-effect object-fill' />
                           </div>
                            <p className='lg:text-sm hover:underline font-semibold col-span-2 text-left pt-2'>
                                {
                                    news.title
                                }
                            </p>
                        </article>
                    </Link>
                ))
            }
        </>

    </div>
}

const CombineNewsSection = ({ data }: { data: ApiResponse }) => {
    return (
        <section className='bg-white py-6 '>
            <div className='container'>
                <main className="grid  grid-cols-1 lg:grid-cols-3 divide-black lg:divide-x  border-y-2 border-black py-4 mx-auto justify-items-center gap-6 ">
                    <NewsItems data={data.data.news?.entrepreneurs?.data} title='Entrepreneurs' url='/entrepreneurs/' />
                    <NewsItems data={data.data.news?.entertainment_media?.data} title='Entertainment Media' url='/entertainment-media/' />
                    <NewsItems data={data.data.news?.awards_events?.data} title='Awards Events' url='/awards-events/' />
                </main>
            </div>
        </section>
    )
}

export default CombineNewsSection