import React from 'react'
import JournalsCard from '../components/JournalsCard'
import { journals } from '../assets/journals'
export default function Journals() {
  
  return (
    <div className='p-16'>

      <h1 className='text-center text-3xl text-logoColor font-bold'>Journals</h1>
      {journals.map((item)=><JournalsCard data={item}/>)}
    </div>
  )
}
