import React from 'react'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import { storyData } from '../../utils/data'

export default function StorySection() {

  return (
    <section className='h-full w-full flex max-xmd:flex-col xmd:flexBetween mt-28'>
      <div className="h-full w-full">
        <div className="mt-16 max-xmd:text-center max-xmd:flexCenter max-xmd:flex-col">
          <h6 className='textStyle mb-5'>Our Story & Services</h6>
          <h2 className='text-3xl font-bold capitalize'>Our Culinary Journey <br /> And Services</h2>
          <p className='pt-4 mb-4 text-sm text-gray-500 px-5 sm:px-10 xmd:pr-28'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
          <Button style='btn_Order' label='Explore' />
        </div>
      </div>
      <div className="flexCenter h-full w-full mt-9">
        <div className="grid grid-cols-1 xmd:grid-cols-2 gap-4">
          {
            storyData.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
