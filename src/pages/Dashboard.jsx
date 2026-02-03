import React, { useEffect } from 'react'
import JobCard from '../components/JobCard'
import JobFilter from '../components/JobFilter'
import StatusBadge from '../components/StatusBadge'
import { useJobs } from '../context/JobContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import JobSkeleton from '../components/JobSkeleton'


const Dashboard = () => {

    const { jobs, apiJobs, apiLoading } = useJobs();
    const [filteredJobs, setFilteredJobs] = useState(jobs);

    useEffect(() => {
        setFilteredJobs(jobs);
    }, [jobs]);


    const handleFilter = ({ status, search }) => {
        let updatedJobs = [...jobs];

        if (status !== "All") {
            updatedJobs = updatedJobs.filter(job => job.status === status);
        }

        if (search) {
            updatedJobs = updatedJobs.filter(
                job => 
                    job.company.toLowerCase().includes(search.toLowerCase()) ||
                    job.position.toLowerCase().includes(search.toLowerCase())
            )
        }
        setFilteredJobs(updatedJobs);
    }

  return (
    <div className='p-6 space-y-6'>  
        <StatusBadge />


        <JobFilter onFilter={handleFilter}/>

         <div className='text-green-800 rounded-full hover:underline text-green-800'> <Link to="/add-job"> Add New Jobs </Link> </div>


        <div className='grid md:grid-cols-3 gap-4'>
            {filteredJobs.length === 0 ? (
                <p className='text-gray-500'> No jobs found</p>
            ) : (
                filteredJobs.map(job => (
                    <JobCard key={job.id} job={job}/>
                ))
            )}
        </div>

             <h2 className='text-xl font-bold mt-16 flex items-center justify-center bg-teal-50'> Saved Jobs </h2>

        <div className='grid md:grid-cols-3 gap-4'>
            {jobs.length === 0 ? (
                <p className='text-gray-500'> No saved Jobs Yet</p>
            ) : (
                 jobs.map(job => <JobCard key={job.id} job={job}/> )
            )}
           
        </div>
        

            <h2 className='text-xl font-bold mt-16 flex items-center justify-center bg-teal-50' > Remote Jobs (API) </h2>

        <div className='grid md:grid-cols-3 gap-4'>
            {apiLoading ? (
                [...Array(6)].map((_, index) => (
                    <JobSkeleton key={index}/>
                ))
            ) : (
                apiJobs.map(job => (
                    <JobCard key={`api-${job.id}`} job={job}/>
                ))
            )}
        </div>

    </div>
  );
}

export default Dashboard