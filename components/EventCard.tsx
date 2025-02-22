'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Pencil, CheckCheck, Trash, MapPin } from 'lucide-react'
import { Event } from '@/app/Utils/types'
import { FormatDateOptions } from 'date-fns'
import { formatDate } from 'date-fns'
import { useToast } from "@/hooks/use-toast"
import { format } from 'date-fns';


import { formatDuration } from '@/app/Utils/format'
import { deleteEvent, updateEventStatus } from '@/app/Utils/fetching'
import Link from 'next/link'
interface EventTypeCardProps {
  event: Event;
}
export const EventTypeCard: React.FC<EventTypeCardProps> = ({ event }) => {
    const { toast } = useToast()

  const eventLink = `/events/${event.id}`
  const duration = formatDuration(event.duration)
  const formmattedStartDate = format(new Date(event.startdate), 'MMMM d yyyy');
  const formmmatedEndDate = format(new Date(event.enddate), 'MMMM d yyyy')
  const formmattedStartTime = formatDate(new Date(event.startdate), 'hh:mm a')
  const formmattedEndTime =formatDate(new Date(event.enddate), 'hh:mm a')

  const handleStatus = async () => {    
    try {
    const data =   await updateEventStatus(event.id, !event.status)
    toast({
        description: "Event status has been changed to " + (event.status === true ? "Inactive" : "Active")
      })
    console.log(data)
    
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {  
    console.log(event.id)
    try {
    const data =   await deleteEvent(event.id)
    toast({
        description: "Event has been deleted"
      })
    console.log(data)
    
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='px-4 p-2 border border-gray-200 rounded-lg  hover:bg-gray-50  md:min-w-[600px] lg:min-w-[900px] '>
         <div className="">
        <div className=" w-full text-left">
          <div className="flex ">
          <div className="flex flex-col ">
            <div className="flex flex-col   ">
            <h2 className="text-xl font-semibold ">{event.title}</h2>
            <p className='text-gray-500'>Shareable Link:  </p>
            <Link href={`/scheduler/events/${event.id}`}>link</Link>
            </div>
            <div className='flex flex-row gap-2'>

           
            <div className="flex flex-row gap-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 " />
                <p className="text-sm">{formmattedStartDate}</p>
              </div>
              <div className="flex items-center gap-2">
                {/* <Clock className="h-4 w-4 " /> */}
                <p className="text-sm">{formmattedStartTime} - </p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex items-center gap-2">
                {/* <Calendar className="h-4 w-4 " /> */}
                <p className="text-sm">{formmmatedEndDate}</p>
              </div>
              <div className="flex items-center gap-2">
                {/* <Clock className="h-4 w-4 " /> */}
                <p className="text-sm">{formmattedEndTime} </p>
              </div>
            </div>
            </div>
            <div className='my-2'>
            <p className="text-sm text-gray-700" >{event.description}</p>
            </div>
            <div className="flex gap-2  flex-row md:flex-col my-2 ">
              
              <div className="flex items-center gap-2">
                <div className='flex flex-row gap-2 rounded-lg bg-gray-100 p-2'>
                  <MapPin className="" size={18} color='#374151'/>
                  <p className="text-sm   text-gray-700 text-nowrap md:w-fit font-semi ">{String(event.location)}</p>

                </div>
                <p className="text-sm bg-gray-100 text-gray-700  outline-slate-500 p-2 rounded-lg ">{String(event.event_type)}</p>
              </div>
              <div className='flex flex-row justify-between w-full'>
                
              <div className="flex items-center gap-2 p-2 bg-gray-300 text-gray-700  w-fit rounded-lg">
                <Clock className="h-4 w-4 " />
                <p className="text-sm">{duration}</p>
              </div>
              
              </div>
            </div>
            <div>
              
            </div>
          </div>
          </div>
           
         
        </div>
        <div className='w-full text-right flex flex-row justify-end gap-4 '>
            <Button variant="default" size="sm" className=" bg-red-200 text-red-800 hover:text-red-100 hover:bg-red-700 px-" onClick={handleDelete} >
                <Trash className="h-4 w-4 " />
                    Delete
                </Button>
                {/* <Button variant="outline" size="sm" className="text-sm mx-1" >
                <Pencil className="h-4 w-4 " />
                  Edit
                </Button> */}
                <Button variant="default" size="sm" className=" text-blue-100 bg-blue-700 hover:bg-blue-100 hover:text-blue-900 "  onClick={handleStatus} >
                <CheckCheck className="h-4 w-4 " />
                {event.status === true ? "Event is Active" : "Event is Inactive"}
                </Button>
              </div>
      </div>
      
    </div>
  )
}
