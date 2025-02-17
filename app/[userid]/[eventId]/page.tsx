'use client'
import { useParams } from 'next/navigation';
import { Event } from '@/app/Utils/types';
import { getPublicEventById } from '@/app/actions';
import { Calendar } from "@/components/ui/calendar"; // Replace with your ShadCN Calendar
import { Button } from "@/components/ui/button"; // ShadCN Button
import { isBefore, isAfter } from "date-fns";


export default async function Page() {
  
  const { eventId } = useParams();
  // const event = await getPublicEventById(eventId) as Event;
// const minDate = event.startDate;
  return (
    <div>
      <h1>Booking: </h1>


      <div className="flex h-screen bg-black text-white">
      {/* Left Sidebar */}
      <aside className="w-1/3 max-w-sm p-6 bg-gray-800">
        {/* User Info Section */}
        <div className="flex items-center mb-6">
          <div className="ml-4">
            <p className="text-lg font-semibold">Username</p>
            <p className="text-gray-400 text-sm">Booking</p>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 text-gray-400">⏱️</span>
            <p>15m</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 text-gray-400">📹</span>
          </div>
         
        </div>
      </aside>

      {/* Middle Calendar Section */}
      <main className="flex flex-col items-center justify-center flex-1 bg-gray-900 p-6">
        {/* <h2 className="text-xl font-bold mb-6">January 2025</h2> */}
        {/* ShadCN Calendar */}
        <Calendar
          mode="single"
          selected={new Date()}
          onSelect={(date) => console.log(date)}
          className="rounded-md border bg-gray-800 text-gray-200"
        />
      </main>

      {/* Right Sidebar - Time Slots */}
      <aside className="w-1/3 max-w-sm p-6 bg-gray-800">
        {/* Time Slot Header */}
        <div className="flex justify-between mb-6">
          <h2 className="text-lg font-semibold">Mon 13</h2>
          <div className="space-x-2">
            <Button variant="outline" size="sm">
              12h
            </Button>
            <Button variant="outline" size="sm">
              24h
            </Button>
          </div>
        </div>

        {/* Time Slot Buttons */}
        <div className="space-y-2">
          {["9:00am", "9:15am", "9:30am", "9:45am", "10:00am"].map((time) => (
            <button
              key={time}
              className="block w-full px-4 py-2 text-left bg-gray-700 rounded hover:bg-gray-600"
            >
              {time}
            </button>
          ))}
        </div>
      </aside>
    </div>
  

<p>Event ID: {eventId}</p>  
<p>Post ID: </p>
    </div>
  );
}
