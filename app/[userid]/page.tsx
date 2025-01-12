import { useRouter } from 'next/router';
import { fetchPublicEventsByUserId } from '../Utils/fetching';
import EventCardGroup from '@/components/EventCardGroup';
import { Event } from '@/app/Utils/types';
export default async function PublicSchedulerPage() {
  //const { userId } = useRouter().query;
const events = await fetchPublicEventsByUserId() as Event[]
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl'>User Name</h1>
      <h1 className='text-2xl'>Available appointments</h1>
      {/* Fetch and display public events for this user */}
      <div className=' max-w-screen-lg  '>
      <EventCardGroup events={events} /> 

      </div>
    </div>
  );
}
