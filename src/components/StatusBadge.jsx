import React from 'react'
import { useJobs } from '../context/JobContext'

const StatusBadge = () => {
    const { jobs } = useJobs();

    const countByStatus = (status) => jobs.filter(job => job.status === status).length;


  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {["Applied", "Interview", "Offer", "Rejected"].map(status => (
            <div key={status} className='bg-white p-4 rounded-xl shadow text-center'> 
                <h3 className='text-sm text-gray-500'> {status} </h3>
                <p className='text-2xl font-bold'> {countByStatus(status)} </p>
             </div>
        ))}
    </div>
  );
}

export default StatusBadge