import { createContext, useContext, useEffect, useState } from 'react'
import { fetchRemoteJobs } from '../api/jobsApi';
import { normalizeApiJob } from '../utils/normalizeJob';

const JobContext = createContext();


export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
       const storedJobs = localStorage.getItem("jobs")
       return storedJobs ? JSON.parse(storedJobs) : [];
  });


  const [ apiJobs, setApiJobs ] = useState([]);


  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);


  const [apiLoading, setApiLoading] = useState(true);

  useEffect(() => {
  const loadApiJobs = async () => {
    try {
      const data = await fetchRemoteJobs();
      const normalized = data.slice(0, 10).map(normalizeApiJob);
      setApiJobs(normalized);
    } catch (error) {
      console.log("Failed to fetch API Jobs", error)
    } finally {
      setApiLoading(false);
    }
  };
    loadApiJobs();
}, []);



  const addJob = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  };


  const deleteJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter(job => job.id !== id));
  };


  const updateJobStatus = (id, status) => {
    setJobs((prevJobs) =>
      prevJobs.map(job => job.id === id ? { ...job, status } : job)
    );
  };


  return (
    <JobContext.Provider value={{ jobs, apiJobs, apiLoading, addJob, deleteJob, updateJobStatus }}>
      {children}
    </JobContext.Provider>
  )

};

export const useJobs = () => useContext(JobContext);
