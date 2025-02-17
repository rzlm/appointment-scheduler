import React from 'react'
import {CalendarDays} from 'lucide-react'

const page = () => {
  const bookings: any[] = []
  return (
    <div>
      <h1 className='text-2xl px-8 '>Bookings</h1>
      <div>
        {bookings.length > 0 && bookings.map((booking) => (
          <div key={booking.id} className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
            <div>
              <h2 className="text-lg font-semibold">{booking.title}</h2>
              <p className="text-gray-400">{booking.description}</p>
            </div>
            <div>
              <p className="text-gray-400">{booking.date}</p>
              <p className="text-gray-400">{booking.time}</p>
            </div>
          </div>
          ))}
      </div>
      <div>
        {bookings.length === 0 && (
          <div className="flex flex-col items-center justify-center h-64 w-screen bg-gray-50 ">
            <CalendarDays size={"24px"}  />
            <p className="text-2xl font-semibold flex items-center ">No Bookings</p>
            <p className="text-gray-500">You have no upcoming bookings.</p>
          </div>
        )}
      </div>
        
    </div>
    

  )
}

export default page