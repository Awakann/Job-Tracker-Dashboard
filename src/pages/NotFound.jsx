import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'> 404 </h1>
      <p className='text-gray-500 mb-4'> Page Not Found !! </p>
      <Link to= "/" className=""> Go back home</Link>
    </div>
  )
}

export default NotFound