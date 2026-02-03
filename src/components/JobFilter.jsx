import React from 'react'
import { useState } from 'react'

const JobFilter = ({ onFilter }) => {
    const [status, setStatus] = useState("All")
    const [search, setSearch] = useState("")


    const handleFilter = () => {
        onFilter({ status, search });
    };

  return (
    <div className='bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-4'>
        <select className='border p-2 rounded' value={status} onChange={(e) => setStatus(e.target.value)}>

            <option value="All"> All </option>
            <option value="Applied"> Applied </option>
            <option value="Interview"> Interview </option>
            <option value="Offer"> Offer </option>
            <option value="Rejected"> Rejected </option>

        </select>

        <input type="text" className='border p-2 rounded flex-1'  placeholder='Search by company or role' value={search} onChange={(e) => setSearch(e.target.value)}/>

        <button onClick={handleFilter} className='bg-slate-900 text-white px-4 py-2 rounded'>
                    Filter
        </button>


    </div>
  );
}

export default JobFilter