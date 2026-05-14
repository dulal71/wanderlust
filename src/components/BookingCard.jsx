"use client";
import { addBookingData } from "@/app/lib/action";
import { authClient } from "@/lib/auth-client";
import { ArrowRight, Check } from "@gravity-ui/icons";
import { DateField, Label } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";


const BookingCard = ({destination}) => {
    const [departure,setDeparture]=useState(null)
    const {price,departureDate,destinationName,country,imageUrl,_id}=destination
     const { data: session,  } = authClient.useSession() 
        const user = session?.user
       const { name,email,id,image}=user
        const handlerBooking =async()=>{
            const bookingData = {
             userName :name ,
             userImage:image,
             userId:id,
             userImage:image ,
             price,
             departure:new Date(departure),
             country,
             imageUrl,
             _id
            }
 console.log(bookingData);
const res =   await addBookingData(bookingData)
console.log(res);
if(res.insertedId){
toast.success(`${destinationName} booking successfully`)
}else{
    toast.error("Already added booking")
}
        }
    return (
       <div className="bg-white shadow py-4 px-10 space-y-3">
       <div>
       <p className="text-zinc-500">Staring from</p>
       <p className="text-3xl text-sky-500">${price}</p>
       <p>/per person</p>
       </div>
       <div className=" px-2 py-1">
       <DateField onChange={setDeparture} className="w-[256px]" name="date">
      <Label>Departure Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
       </div>
       <div>
           <div onClick={handlerBooking} className="flex bg-sky-500 w-full  items-center justify-center rounded-md">
       <button className=" flex items-center gap-2 py-1 text-white">Book Now <ArrowRight></ArrowRight></button>
           </div>
       
       <ul className="space-y-2 mt-3">
           <li ><p className="flex items-center gap-2"><Check color="green"></Check>Free cancellation up to 7 days</p></li>
           <li><p className="flex items-center gap-2"><Check color="green"></Check>Travel insurance included</p></li>
           <li><p className="flex items-center gap-2"><Check color="green"></Check>24/7 customer support</p></li>
       </ul>
       </div>
       </div>
    );
};

export default BookingCard;