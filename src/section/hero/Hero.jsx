import React from 'react'
import Button from '../../components/button/Button';
import { FaPlay } from "react-icons/fa";
import RightSide from './RightSide';

export default function Hero() {

  return (
    <main className='pt-10'>
      <section className="flexCenter max-xmd:flex-col  h-full w-full">
        <div className=" max-xl:w-[65%]  md:-mt-7">
          <div>
            <h1 className='regular-40 leading-[44px]'>Dive into Delights Of Delectable <span className='text-green-primary'>Food</span></h1>
          </div>
          <div className="pt-4 pb-4">
            <p className='text-gray-700 text-base'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
          </div>
          <div className="flex gap-4 items-center">
            <Button label='Order Now' style='btn_Order' />
            <button className='btn_video'>Watch Video <span className='bg-white boxShawdo p-3 rounded-full'><FaPlay size={13} color='black' /></span></button>
          </div>
        </div>
        <RightSide />
      </section>
    </main>
  )
}
