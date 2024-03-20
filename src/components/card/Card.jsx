import React from 'react';
import { Img } from '../../Img';

export default function Card({ data }) {
    return (

        <div key={data.id}>
            <div className="flex flex-col justify-center items-center bg-white hover:scale-105 transitions cursor-pointer px-9 py-5 boxShawdo rounded-md">
                <div>
                    <div className={` ${data?.icon ? 'h-9' : 'bg-[#c1f1c6] h-24 w-24'} rounded-full  flex justify-center items-center`}>
                        <Img src={data?.imgUrl || data?.icon} alt={data?.title} className={`imgObject imgSelect ${data?.icon ? 'h-9' : 'h-12'}`} />
                    </div>
                    <div className="text-center">
                        <h5 className='text-base pt-2 font-medium leading-5 text-gray-700 '>{data?.title}</h5>
                        <p className='text-gray-400 text-sm'>{data?.dishes ? `(${data?.dishes})` : data.descritpion}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
