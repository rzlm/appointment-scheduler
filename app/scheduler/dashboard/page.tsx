import React from 'react'

const page = () => {
  return (
    <div className="flex h-screen  text-black">
      <h1  className='text-2xl' >Dashboard</h1>

      <div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>Create an Event Type</h1>
          <p className='text-gray-500'>Create different event types here and share on your page, allowing people to start booking appointments.</p>
        </div>
        <div>
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>Create Event</button>
        </div>
      </div>
    </div>
  )
}

export default page