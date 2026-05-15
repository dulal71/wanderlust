'use client'

import { deleteBooking } from "@/app/lib/action";
import Image from "next/image";

const BookingDestination = ({booking}) => {

    const {imageUrl,
departure,price,country,_id
}=booking


const handleDelete = async()=>{
    try{
        console.log(_id);
const res = await deleteBooking(_id)
console.log(res);
    }catch(error){
     console.log(error);   
    }


}
    return (
        <div className="flex items-center justify-between my-4 p-4 shadow">
         <div className="flex gap-3">
         <div>
          <Image src={imageUrl} width={200} height={200} alt="image" className="rounded-md"></Image>  
            </div> 
            <div className="space-y-4">
                <span className="bg-green-200 px-1.5 rounded-full ">confirmed</span>
<h3 className="font-bold">{country}</h3>
<p>departure :{new Date(departure).toLocaleDateString("en-US",{
    year:"numeric",
    month:"long",
    day:"numeric"
})}</p>
<p>Booking Id: <span className="text-red-900 font-bold">{_id.slice(-4)}</span></p>
<p className="text-3xl text-cyan-600 font-bold">${price}</p>
                </div>  
            </div>   
         <div className="flex items-center gap-2">
         <button onClick={handleDelete} className="px-3 border border-red-400">cancel</button>   
         <button className="px-3 border border-gray-400">view</button>   
         </div>
        </div>
    );
};

export default BookingDestination;