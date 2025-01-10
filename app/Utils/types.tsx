interface EventType {
    name: "Meeting" | "Appointment" | "Interview";
    color: string;
}

interface Event {
    id: number;
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
    event: Event;
    participant: string;
    datetime: string;
    status: "pending" | "accepted" | "cancelled";
}

interface User {
    name: string;
    email: string;
    bookings?: Booking[];
}

// Export all interfaces as a type
export type { Event, EventType, Booking, User };
