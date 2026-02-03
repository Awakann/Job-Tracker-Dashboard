import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white px-6 py-4 flex justify-between'>
        <h1 className='text-xl font-semibold'> Job Tracker </h1>
        <span className='text-sm opacity-80'> Track Your Job Applications </span>
    </nav>
  )
}

export default Navbar