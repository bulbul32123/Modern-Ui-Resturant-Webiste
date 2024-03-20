import React from 'react';
import { popupdata } from '../../utils/data';
import { Img } from '../../Img';

export default function RightSide() {
    return (
        <>
            <div className="xmd:flexEnd flexCenter h-full w-full pt-10  pr-10">
                <div className="relative">
                    <div className="h-[21rem] w-[21rem] rounded-full bg-green-primary pt-10" />
                    <Img src="/images/HeroImage.png" alt="Hero" className='imgSelect absolute -top-12 -left-3 h-96 w-80 imgObject' />
                    <div className="absolute top-6 -left-20">
                        <Img src="/images/MessageBox.png" alt="Message" className='h-20 imgSelect' />
                    </div>
                    <div className="flex gap-4 justify-center items-center relative z-10">
                        {popupdata.map((data) => (
                            <div className={`absolute ${data.className} h-[4.3rem] overflow-hidden w-48 bg-white  boxShawdo rounded-md pt-[4px]`} key={data.id}>
                                <div className="flex gap-2 ">
                                    <Img src={data.img} alt={data.title} className='h-[4rem] w-[4rem] imgSelect imgObject' />
                                    <div className="flex-col flexStart">
                                        <h1>{data.title}</h1>
                                        <span className='flex gap-1'>
                                            {data.icons.map((icon, index) => (
                                                <span key={index}>{icon}</span>
                                            ))}
                                        </span>
                                        <span className='text-sm'><strong className='text-orange-primary text-xs'>$</strong> {data.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
