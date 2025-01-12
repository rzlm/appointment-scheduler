import React from 'react'
import type { Event } from '@/app/Utils/types'
import {EventTypeCard} from './EventCard'
import { EventType } from '@/app/Utils/types'
import { PublicEventCard } from './PublicEventCard'
interface EventCardGroupProps {
  events: Event[];
  type?: "public" | "private";
}



const EventCardGroup: React.FC<EventCardGroupProps> = ({ events, type }) => {
  return (
    <div className='grid grid-cols-1 w-full gap-4 m-8'>
      {type === "private" && events.map(event => (
        <EventTypeCard key={event.id} event={event} />
      ))}
      {type === "public" && events.map(event => (
        <PublicEventCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventCardGroup