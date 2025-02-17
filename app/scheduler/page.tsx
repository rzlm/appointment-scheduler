import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {MoveRight} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12 m-8">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl px-8 font-bold ">Dashboard </h1>
        
        </div>

        <div className="flex flex-col md:flex-row gap-4">
        <div className="">
          <Card>
            <CardHeader>
              <CardTitle>Create an Event Type</CardTitle>
              <CardDescription>
                Create different event types here and share on your page.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" >
                Go to Events page
                <MoveRight className="" size={16} />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="">
          <Card>
            <CardHeader>
              <CardTitle>Visit your calendar.</CardTitle>
              <CardDescription>
                Learn how to fetch data from an API using React Query.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" >
                Go to Events page
                <MoveRight className="" size={16} />
              </Button>
            </CardContent>
          </Card>

          </div>
        </div>

        <div>
          <h1>Your bookings. </h1>
        </div>
        
    </div>
  );
}
