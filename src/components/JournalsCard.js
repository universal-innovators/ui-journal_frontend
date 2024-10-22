import React from 'react';
import { NavLink } from 'react-router-dom';

export default function JournalsCard(props) {
  return (
    <div className='flex flex-col md:flex-row mt-8 md:mt-16 gap-4 rounded-sm shadow-2xl p-4'>
      <div className="basis-full md:basis-1/4">
        <img className='h-48 w-full object-cover md:h-full' src={props.data.image} alt={props.data.name} />
      </div>
      <div className="basis-full md:basis-3/4 my-auto">
        <h1 className='text-lg md:text-xl font-semibold'>{props.data.name}</h1>
        <span className='font-semibold'>Date: {props.data.date}</span>
        <br />
        <p className='text-sm md:text-base'>{props.data.desc}</p>
        <a className='block text-right text-white mt-2' href={props.data.link}><button className='bg-logoColor py-2 px-3 font-semibold'> Visit Journal</button></a>
      </div>
    </div>
  );
}
