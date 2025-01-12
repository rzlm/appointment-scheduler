'use server'
import { createClient } from '@supabase/supabase-js'


 const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl || "", supabaseKey|| "")

//get
export const getUserId = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
  
    if (error) {
      console.error('Error fetching session:', error);
      return null;
    }
  
    if (session && session.user) {
      console.log('User ID:', session.user.id);
      return session.user.id;
    } else {
      console.warn('No user session found');
      return null;
    }
  };
  
export const fetchEvents = async () => {
    const { data: events, error } = await supabase
        .from('events')
        .select('*')
    
    if (error) {
        throw new Error(error.message)
    }
    return events
    }

//insert
interface FormValues {
    event_title: string,
    event_start_date: Date,
    event_end_date: Date,
    event_description: string,
    event_duration: number,
    event_location: string,
    event_status: boolean,
    event_type: string
}
export const createEvent = async (event: FormValues) => {
    let location;
    switch(event.event_location) {
        case "1":
           location  = "In person"
            break
        case "2":
            location ="Online"
            break
        case "3":
            location = "TBD"
            break
        default:
            location = "In person"
    }
    const userId = await getUserId()
    if(!userId) {
        throw new Error("User not found")
    } else {
        const { data, error } = await supabase
        .from('events')
        .insert({
            title: event.event_title,
            description: event.event_description,
            location: location,
            status: event.event_status,
            event_type: event.event_type,
            startdate: event.event_start_date,
            duration: event.event_duration,
            enddate: event.event_end_date,
            userId: userId
        })
    
    if (error) {
        throw new Error(error.message)
    }
    return data
    }
   
}

//delete
export const deleteEvent = async (id: number) => {
    const { data, error } = await supabase
        .from('events')
        .delete()
        .eq('id', id);

    if (error) {
        throw new Error(`Failed to delete event: ${error.message}`);
    }

    return data;
};

//update status
export const updateEventStatus = async (id: number, status: boolean) => {
    const { data, error } = await supabase
        .from('events')
        .update({ status })
        .eq('id', id);

    if (error) {
        throw new Error(`Failed to update event status: ${error.message}`);
    }

    return data;
}