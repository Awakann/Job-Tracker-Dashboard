import React from 'react'

const JobSkeleton = () => {

  return (
    <div className='bg-white p-4 rounded-xl shadow animate-pulse space-y-2'>
        <div className='h-4 bg-gray-200 rounded w-3/4'></div>
        <div className='h-3 bg-gray-200 rounded w-1/2'></div>
        <div className='h-6 bg-gray-200 rounded w-1/4'></div>
    </div>
  );
};

export default JobSkeleton