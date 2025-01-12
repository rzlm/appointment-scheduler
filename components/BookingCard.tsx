'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Pencil, CheckCheck, Trash } from 'lucide-react'
import { Booking } from '@/app/Utils/types'
import { FormatDateOptions } from 'date-fns'
import { formatDate } from 'date-fns'
import { useToast } from "@/hooks/use-toast"
import { format } from 'date-fns';


import { formatDuration } from '@/app/Utils/format'
import { deleteEvent, updateEventStatus } from '@/app/Utils/fetching'
import Link from 'next/link'
interface BookingCardProps {
  booking: Booking;
}
export const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
    const { toast } = useToast()

 // const duration = formatDuration(event.duration)
 // const formmattedStartDate = format(new Date(event.startdate), 'MMMM d yyyy');
 // const formmmatedEndDate = format(new Date(event.enddate), 'MMMM d yyyy')
 // const formmattedStartTime = formatDate(new Date(event.startdate), 'hh:mm a')
 // const formmattedEndTime =formatDate(new Date(event.enddate), 'hh:mm a')

  const handleStatus = async () => {    
    try {
    const data =   await updateEventStatus(booking.id, !booking.status)
    // toast({
    //     description: "Event status has been changed to " + (booking.status === true ? "Inactive" : "Active")
    //   })
    console.log(data)
    
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {  
    console.log(booking.id)
    try {
    const data =   await deleteEvent(booking.id)
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
            <h2 className="text-xl font-normal">{booking.title}</h2>
            <p className='text-gray-500'>Shareable Link:  </p>
            <Link href={`/scheduler/events/${booking.id}`}>link</Link>
            </div>
            <div className='flex flex-row gap-2'>

           
            <div className="flex flex-row gap-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 " />
                <p className="text-sm">{}</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 " />
                <p className="text-sm">{} - </p>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 " />
                <p className="text-sm">{}</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 " />
                <p className="text-sm">{} </p>
              </div>
            </div>
            </div>
            {/* <div className='my-2'>
            <p className="text-sm">{}</p>
            </div> */}
            <div className="flex gap-2  flex-row md:flex-col my-2 ">
              
              {/* <div className="flex items-center gap-2">
              <p className="text-sm bg-red-500 p-1 rounded-lg text-white text-nowrap md:w-fit ">{String(event.location)}</p>
                <p className="text-sm bg-red-500 p-1 rounded-lg text-white">{String(event.event_type)}</p>
              </div> */}
              <div className='flex flex-row justify-between w-full'>
                
              <div className="flex items-center gap-2 p-1 bg-blue-100 w-fit rounded-lg">
                <Clock className="h-4 w-4 " />
                {/* <p className="text-sm">{duration}</p> */}
              </div>
              
              </div>
            </div>
            <div>
              
            </div>
          </div>
          </div>
           
         
        </div>
        <div className='w-full text-right'>
            <Button variant="outline" size="sm" className="text-sm mx-1 bg-red-200 " onClick={handleDelete} >
                <Trash className="h-4 w-4 " />
                    Delete
                </Button>
                {/* <Button variant="outline" size="sm" className="text-sm mx-1" >
                <Pencil className="h-4 w-4 " />
                  Edit
                </Button> */}
                <Button variant="outline" size="sm" className="text-sm mx-1 bg-blue-200"  onClick={handleStatus} >
                <CheckCheck className="h-4 w-4 " />
                {/* {booking.status === true ? "Event is Active" : "Event is Inactive"} */}
                </Button>
              </div>
      </div>
      
    </div>
  )
}
