"use client"
import {
  useState
} from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  SmartDatetimeInput
} from "@/components/ui/smart-datetime-input"
import {
  Textarea
} from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider";

import {
    Switch
  } from "@/components/ui/switch"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Check,
  ChevronsUpDown
} from "lucide-react"
import { formatDuration } from "@/app/Utils/format"
import { createEvent } from "@/app/Utils/fetching"
const formSchema = z.object({
  event_title: z.string(),
  event_start_date: z.coerce.date(),
  event_end_date: z.coerce.date(),
  event_description: z.string(),
  event_duration: z.number().min(15).max(400),
  event_type: z.string(),
  event_location: z.string(),
  event_status: z.boolean() 
});

export default function EventForm() {
  const locationOptions = [{
      label: "In person",
      value: "1"
    },
    {
      label: "Online",
      value: "2"
    },
    {
      label: "TBD",
      value: "3"
    },
   
  ] as
  const;
  const typeOptions = [{
        label: "Meeting",
        value: "Meeting"
        },
        {
        label: "Appointment",
        value: "Appointment"
        },
        {
        label: "Interview",
        value: "Interview"
        },
    ] as
    const; 
  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
        "event_status": false
    }
    // defaultValues: {
    //   "event_start_date": new Date(),
    //   "name_1216274899": new Date()
    // },
  })

  async function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
       await createEvent(values);    
        console.log("Form submitted", values);
        toast.success("Form submitted successfully.");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-auto ">
        
        <FormField
          control={form.control}
          name="event_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event Title</FormLabel>
              <FormControl>
                <Input 
                placeholder="Ex. Interviews"
                
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-between gap-4">

        
            <FormField
              control={form.control}
              name="event_start_date"
              render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date & Time</FormLabel>
                <FormControl>
                  <SmartDatetimeInput
                    value={field.value}
                    onValueChange={field.onChange}
                    placeholder="e.g. Tomorrow morning 9am"
                    
                    
                  />
                </FormControl>
                <FormDescription>Please select the full time</FormDescription>
                <FormMessage />
              </FormItem>
              )}
            />
        
            <FormField
              control={form.control}
              name="event_end_date"
              render={({ field }) => (
              <FormItem>
                <FormLabel>End Date & Time</FormLabel>
                <FormControl>
                  <SmartDatetimeInput
                    value={field.value}
                    onValueChange={field.onChange}
                    placeholder="e.g. Tomorrow morning 9am"
                    
                    
                  />
            
                </FormControl>
                <FormDescription>Please select the full time</FormDescription>
                <FormMessage />
              </FormItem>
              )}
            />
        </div>
        <FormField
          control={form.control}
          name="event_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>This will be visible to all users.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        
<FormField
  control={form.control}
  name="event_duration"
  render={({ field: { value, onChange } }) => (
    <FormItem>
      <FormLabel>Duration: {formatDuration(value)}</FormLabel>
      <FormControl>
        <Slider
          min={15}
          max={400}
          step={15}
          value={[value]}
          defaultValue={[15]}
          onValueChange={(vals) => onChange(vals[0])}
          className="w-full"
        />
      </FormControl>
      <FormDescription>Adjust the meeting duration by sliding.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>

        <FormField
          control={form.control}
          name="event_location"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Location</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                      
                    >
                      {field.value
                        ? locationOptions.find(
                            (locationOption) => locationOption.value === field.value
                          )?.label
                        : "Select location"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search location..." />
                    <CommandList>
                      <CommandEmpty>No location found.</CommandEmpty>
                      <CommandGroup>
                        {locationOptions.map((locationOption) => (
                          <CommandItem
                            value={locationOption.label}
                            key={locationOption.value}
                            onSelect={() => {
                              form.setValue("event_location", locationOption.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                locationOption.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {locationOption.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>location</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="event_type"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Type</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                      
                    >
                      {field.value
                        ? typeOptions.find(
                            (typeOption) =>typeOption.value === field.value
                          )?.label
                        : "Select event type"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search event tyoe..." />
                    <CommandList>
                      <CommandEmpty>No type found.</CommandEmpty>
                      <CommandGroup>
                        {typeOptions.map((typeOption) => (
                          <CommandItem
                            value={typeOption.label}
                            key={typeOption.value}
                            onSelect={() => {
                              form.setValue("event_type", typeOption.value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                typeOption.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {typeOption.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>event type</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
              control={form.control}
              name="event_status"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel>Event Status - Publish event?</FormLabel>
                    <FormDescription>If you click publish, your event will be visible.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
        <Button type="submit">Create</Button>
      </form>
    </Form>
  )
}