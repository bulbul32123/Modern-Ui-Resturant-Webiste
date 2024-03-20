import React from 'react';
import { FaStar } from "react-icons/fa";
import { Img } from '../../Img';
import { imgsrc } from '../../utils/data';

export default function Testimonials() {
  return (
    <section className='w-full h-full mt-20'>
      <div className="flex max-xmd:flex-col-reverse justify-center xmd:justify-between items-center  md:items-start h-full">
        <div className="relative h-full w-[80%] md:pl-28">
          <div className="h-full w-full relative flexCenter">
            <Img src="/images/pizza.png" alt="Pizza" className='absolute imgObject imgSelect bottom-20 right-24 z-10 h-7 w-7' />
            <Img src="/images/smile.png" alt="Smile" className='absolute imgObject imgSelect bottom-[70px] xmd:-left-5 z-10 h-7 w-7' />
            <div className="h-48 w-64 absolute bottom-0 bg-green-primary rounded_border border-black" />
            <Img src="/images/TestimonialsHero.png" alt="" className='h-96 w-auto imgObject imgSelect relative z-10' />
            <Img src="/images/bestpopup.png" alt="" className='absolute z-10 right-28 xmd:-right-20 -bottom-4 h-20 w-36 imgObject imgSelect' />
          </div>
        </div>
        <div className="h-[300px] w-full max-xmd:text-center  xmd:justify-start items-center flex-col">
          <div className="mt-16  max-xmd:text-center">
            <h6 className='textStyle mb-5'>Testimonials</h6>
            <h2 className='text-3xl font-extrabold capitalize'>What Our Customers <br />Say About Us</h2>
            <p className='pt-4 text-sm text-gray-500 px-5 sm:px-10  xmd:pr-40'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
          </div>
          <div className="mt-8 flex justify-center items-start xmd:flexStart h-full w-full">
            <div className="flex gap-4 relative">
              <div className="flex ">
                {imgsrc.map((url, index) => (
                  <Img src={url.imgUrl} alt={`User ${index}`} className='w-10 h-10 rounded-full imgObject imgSelect border-[4px] border-white' key={url.id} />
                ))
                }
              </div>
              <div className="flex flex-col">
                <h5 className='text-base font-bold '>Customer Feedback</h5>
                <p className='flex gap-1 text-sm'>
                  <FaStar size={20} color='yellow' />  4.6 <span className=' text-gray-500'>(18.6k Reviews)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
