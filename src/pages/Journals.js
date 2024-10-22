import React from 'react';
import JournalsCard from '../components/JournalsCard';
import { journals } from '../assets/journals';

export default function Journals() {
  return (
    <div className='p-4 md:p-16'>
      <h1 className='text-center text-2xl md:text-3xl text-logoColor font-bold'>Journals</h1>
      <div className="grid grid-cols-1 gap-8 mt-8">
        {journals.map((item) => (
          <JournalsCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
