import React from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { special_disheData } from '../../utils/data';
import { FaStar } from "react-icons/fa6";
import { Img } from '../../Img';

export default function SpecialDishesSection() {
  return (
    <section className='w-full h-full'>
      <div className="h-full w-full mt-36 mb-5">
        <div className="xmd:flexBetween h-full w-full">
          <div className="w-full">
            <h5 className='textStyle max-xmd:text-center'>Special Dishes</h5>
            <h2 className='mt-3 font-bold text-4xl  max-xmd:text-center'>Standout Dishes <br /> From Our Menu</h2>
          </div>
          <div className="flexCenter mt-5 xmd:mt-0 xmd:flex gap-6 ">
            <span className=''><MdOutlineKeyboardArrowLeft size={40} className='p-2 hover:bg-green-primary transitions rounded-full bg-gray-100  cursor-pointer' /></span>
            <span className=''><MdOutlineKeyboardArrowLeft size={40} className='p-2 hover:bg-green-primary transitions bg-gray-100 rounded-full rotate-180 cursor-pointer' /></span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-full cursor-pointer">
        <div className="grid sm:grid-cols-2 grid-row lg:grid-cols-3 my-8  gap-10">
          {special_disheData.map((item) => (
            <div className="h-full w-72 " key={item.id}>
              <div className="flexCenter border boxShawdo flex-col rounded-3xl h-full w-full relative">
                <div>
                  <div className="bg-green-primary boderRadius p-4 absolute top-0 right-0">
                    <span>{item.icon}</span>
                  </div>
                  <div className="flex justify-center items-start">
                    <Img src={item.imgUrl} className='imgObject imgSelect h-44 mt-5 w-44' alt={item.title} />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className='font-bold text-lg'>{item.title}</h3>
                  <p className='text-gray-500'>{item.description}</p>
                  <div className="flexBetween mt-1.5">
                    <p><span className='text-xs text-orange-primary'>$</span>{item.price}</p>
                    <p className='flexCenter gap-1'><FaStar size={15} color='yellow' /> {item.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
          }

        </div>
      </div>

    </section>
  )
}
