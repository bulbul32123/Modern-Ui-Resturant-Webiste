import React from 'react'

export default function Button({style,label,icon}) {
  return (
   <button className={style}>
   {icon ? icon : ''}
   {label}
   </button>
  )
}
