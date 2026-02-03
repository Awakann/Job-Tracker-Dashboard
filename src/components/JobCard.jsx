import React from 'react'
import { useJobs } from '../context/JobContext';
import toast from 'react-hot-toast';



const statusColors = {
    Applied: "bg-blue-100 text-blue-700",
    Interview: "bg-yellow-100 text-yellow-700",
    Offer: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
};

const JobCard = ({ job }) => {
     const { deleteJob, addJob, jobs } = useJobs();

     const isSaved = jobs.some(j => j.id === job.id && "Saved");

     const handleSave = () => {
      if (isSaved) return;

      addJob({
        ...job,
        source: "Saved"
      });
      toast.success("Job saved successfully!");
     }

  return (
    <div className='bg-white p-4 rounded-xl shadow'>

        <h2 className='font-semibold text-1g'> {job.position} </h2>

        <p className='text-gray-600'> {job.company} </p>

        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${statusColors[job.status]}`}> {job.status} </span>

        {isSaved && (
          <button onClick={() => deleteJob(job.id)} className='block mt-4 text red-600 bg-red-200 px-3 py-1 rounded-full hover:underline'>
            Delete
          </button>
        )}


      {job.source === "API" && !isSaved && (
        <button onClick={handleSave} className='mt-2 text-sm text-green-600 underline'>
              Save Job
        </button>
      )}

       </div>
  );
}

export default JobCard