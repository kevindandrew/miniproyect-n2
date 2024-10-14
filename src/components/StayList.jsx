import React from 'react';
import StayCard from './StayCard';

function StayList({ stays }) {
  return (
    <>
    <div className='flex justify-between'>
      <h2 className='font-bold text-2xl px-6'>Stays in Finland</h2>
      <span className='px-6'>{stays.length} {stays.length === 1 ? 'stay' : 'stays'}</span>
    </div>
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
      {stays.map((stay, index) => (
        <StayCard key={index} stay={stay} />
      ))}
    </div>
    </>
  );
}

export default StayList;
