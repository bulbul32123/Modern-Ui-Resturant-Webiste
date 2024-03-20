import React from 'react'

export default function SectionWapper({ children }) {
  return (
    <div className='md:pl-20 md:pr-20 xl:pl-36 xl:pr-36 2xl:pr-56 2xl:pl-56 h-full 2xl:w-[90rem]'>
      {children}
    </div>
  )
}
