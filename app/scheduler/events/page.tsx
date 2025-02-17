import React from 'react'
import EventCardGroup from '@/components/EventCardGroup'
import {EventTypeForm} from '@/components/EventTypeDialog'
import { fetchEvents } from '@/app/Utils/fetching'
import { getEventsByUserId } from '@/app/Utils/fetching'
import { Event } from '@/app/Utils/types'
const page = async () => {

  

  
  //  const events = fetchEvents()
    //as type event
     const events = await getEventsByUserId() as Event[]
     console.log(events)
  return (
    <div className='m-8'>
        <div className='flex md:flex-row flex-col justify-between gap-4 md:items-center'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>Create an Event Type</h1>
            <p className='text-gray-500'>Create different event types here and share on your page, allowing people to start booking appointments.</p>
        </div>
        <div className=''>
            <EventTypeForm />
        </div>
        </div>
        <div className='mx-auto'> 
            <EventCardGroup events={events} type='private'  />
        </div>
    </div>
  )
}

export default page