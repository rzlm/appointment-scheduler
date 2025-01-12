import React from 'react'
import EventCardGroup from '@/components/EventCardGroup'
import {EventTypeForm} from '@/components/EventTypeDialog'
import { fetchEvents } from '@/app/Utils/fetching'
import { Event } from '@/app/Utils/types'
const page = async () => {

  

  
  //  const events = fetchEvents()
    //as type event
     const events = await fetchEvents() as Event[]
     console.log(events)
  return (
    <div className=''>
        <div className='m-8'>
            <h1>Create an Event Type</h1>
        </div>
        <div className='m-8'>
            <EventTypeForm />
        </div>
        <div className='mx-auto'> 
            <EventCardGroup events={events}  />
        </div>
    </div>
  )
}

export default page