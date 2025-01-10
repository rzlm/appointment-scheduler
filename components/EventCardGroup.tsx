import React from 'react'
import type { Event } from '@/app/Utils/types'
import {EventTypeCard} from './EventCard'
import { EventType } from '@/app/Utils/types'
interface EventCardGroupProps {
  events: Event[];
}



const EventCardGroup: React.FC<EventCardGroupProps> = ({ events }) => {
  return (
    <div className='grid grid-cols-1 w-full gap-4 m-8'>
      {events.map(event => (
        <EventTypeCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventCardGroup