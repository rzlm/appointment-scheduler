import React from 'react'
import { Booking } from '@/app/Utils/types';
import { BookingCard } from './BookingCard';
interface BookingCardGroupProps {
  bookings: Booking[];
}



const EventCardGroup: React.FC<BookingCardGroupProps> = ({ bookings }) => {
  return (
    <div className='grid grid-cols-1 w-full gap-4 m-8'>
      {bookings.map(booking => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </div>
  )
}

export default EventCardGroup