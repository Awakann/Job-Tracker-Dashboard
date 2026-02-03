import React from 'react'
import { useState } from 'react'
import { useJobs } from '../context/JobContext'
import { v4 as uuid } from 'uuid'
import toast from 'react-hot-toast'


const JobForm = () => {
    const { addJob } = useJobs();
    const [form, setForm] = useState({
        company: "",
        position: "",
        status: "Applied",
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newJob = {
            id: uuid(),
            company: form.company,
            position: form.position,
            status: form.status,
            createdAt: new Date().toISOString(),
            source: "Manual"
        }

        addJob(newJob);

        toast.success('Job added Successfully 🎉')

        setForm({
            company: "",
            position: "",
            status: "Applied"
        });
        setLoading(false)
    }


  return (
    <form onSubmit={handleSubmit} className='bg-white p-6 rounded-xl shadow space-y-4 max-w-120 h-90'>
        
        <input type="text" className='w-full border p-2 rounded' placeholder='Company' value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value})} required/>

        <input type="text" className='w-full border p-2 rounded' placeholder='Position' value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value})} required/>

        <select className='w-full border p-2 rounded' value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value})}>

                <option> Applied </option>
                <option> Interview </option>
                <option> Offer </option>
                <option> Rejected </option>

        </select>

        <button className='w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800'> 
            {loading ? "Adding..." : "Add Job"}  
        </button>

    </form>
  );
}

export default JobForm