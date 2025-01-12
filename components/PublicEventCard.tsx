'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Pencil, CheckCheck, Trash } from 'lucide-react'
import { Event } from '@/app/Utils/types'
import { FormatDateOptions } from 'date-fns'
import { formatDate } from 'date-fns'
import { useToast } from "@/hooks/use-toast"
import { format } from 'date-fns';


import { formatDuration } from '@/app/Utils/format'
import { deleteEvent, updateEventStatus } from '@/app/Utils/fetching'
import Link from 'next/link'
interface PublicEventCardProps {
  event: Event;
}
export const PublicEventCard: React.FC<PublicEventCardProps> = ({ event }) => {
    const { toast } = useToast()

  const eventLink = `/events/${event.id}`
  const duration = formatDuration(event.duration)




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
            <div className="flex flex-col  space-x-2  ">
            <h2 className="text-xl font-normal">{event.title}</h2>
            </div>
            <div className='flex flex-row gap-2'>

           
            <div className="flex flex-row gap-2">
              {/* <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 " />
                <p className="text-sm">{formmattedStartDate}</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 " />
                <p className="text-sm">{formmattedStartTime} - </p>
              </div> */}
            </div>
            <div className="flex flex-row gap-2">
              {/* <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 " />
                <p className="text-sm">{formmmatedEndDate}</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 " />
                <p className="text-sm">{formmattedEndTime} </p>
              </div> */}
            </div>
            </div>
            <div className='my-2'>
            <p className="text-sm">{event.description}</p>
            </div>
            <div className="flex gap-2  flex-row md:flex-col my-2 ">
              
              <div className="flex items-center gap-2">
              <p className="text-sm bg-red-500 p-1 rounded-lg text-white text-nowrap md:w-fit ">{String(event.location)}</p>
                <p className="text-sm bg-red-500 p-1 rounded-lg text-white">{String(event.event_type)}</p>
              </div>
              <div className='flex flex-row justify-between w-full'>
                
              <div className="flex items-center gap-2 p-1 bg-blue-100 w-fit rounded-lg">
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
        <div className='w-full text-right'>
           
             
                <Button variant="outline" size="sm" className="text-sm mx-1 bg-blue-200">Link </Button>  
                
              
              
              </div>
      </div>
      
    </div>
  )
}
