
"use client"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import {Plus} from 'lucide-react'
import EventForm
 from "./EventForm"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"
import { Switch } from "@radix-ui/react-switch"
export function EventTypeForm() {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="default" className="shadow-lg ">
          <Plus className="h-6 w-6" />
          Add Event Type
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:min-w-[500px] max-h-screen overflow-scroll ">
        <DialogHeader>
          <DialogTitle>Add an Event Type</DialogTitle>
          <DialogDescription>
            Create an event type to categorize your events.
          </DialogDescription>
        </DialogHeader>
        
       <EventForm />
        
      </DialogContent>
    </Dialog>
  )
}
