
 // path to your Better Auth server instance
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getBookingData } from "../lib/data";
import BookingDestination from "@/components/BookingDestination";
const MyBookings =async () => {
   const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
}) 
const user = session?.user
const id = user.id
const bookings = await getBookingData(user.id)

return (
        <div className="max-w-5xl mx-auto my-5">
       <div className="my-4">
        <h1 className="text-3xl">My Bookings</h1>
        <p>Manage and view your upcoming travel plans</p>
       </div>
         <div className="p-5 bg-white shadow">
           {
            bookings.map(booking=> <BookingDestination key={booking._id} booking={booking}></BookingDestination>)
          }   
            </div> 
        </div>
    );
};

export default MyBookings;