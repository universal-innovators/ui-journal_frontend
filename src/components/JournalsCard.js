import React from 'react'
import { NavLink } from 'react-router-dom'
export default function JournalsCard(props) {
  return (
    <div className='flex  mt-16 gap-4 rounded-sm shadow-2xl p-4'>
      <div className="basis-1/4"><img className='h-full' src={props.data.image} alt="" srcset="" /></div>
      <div className="basis-3/4 my-auto">
        <h1 className='text-xl font-semibold'>{props.data.name}</h1>
        <span className='font-semibold'>Date : {props.data.date}</span>
        <br />
        <p>{props.data.desc}</p>
        <a className='block text-right text-white mt-2' href={props.data.link}><button className='bg-logoColor py-2 px-3 font-semibold'> Visit Journal</button></a>
      </div>
    </div>
  )
}
