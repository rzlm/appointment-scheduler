interface EventType {
    name: "Meeting" | "Appointment" | "Interview";
    color: string;
}

interface Event {
    id: number;
    userId:string;
    title: string;
    description: string;
    location: string;
    event_type: "Meeting" | "Appointment" | "Interview";
    startdate: Date;
    enddate: Date;
    status: boolean;
    duration: number;
}

interface Booking {
    id: number;
    title:string;
    event_id: number;
    participant: string;
    datetime: string;
    email: string;
    status: "Pending" | "Accepted" | "Cancelled";
}

interface User {
    name: string;
    email: string;
    bookings?: Booking[];
}

// Export all interfaces as a type
export type { Event, EventType, Booking, User };
