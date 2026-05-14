'use server'

import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"



export const PostData = async(destinations)=>{
const res = await fetch('http://localhost:5000/destinations',{
   method:"POST" ,
   headers:{
    'Content-type': 'application/json'
   },
   body:JSON.stringify(destinations)
})
const data = await res.json()
return data
}



export const updateData = async (formData, id) => {
  const update = Object.fromEntries(formData.entries());
console.log(update);
  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  });

  const data = await res.json()
  if (data.modifiedCount > 0) {
      revalidatePath('/destinations')
    }
   return data;
};

export const addBookingData = async(bookingData)=>{
console.log(bookingData);
  const res= await fetch('http://localhost:5000/booking',{
  method:"POST",
  headers:{
    "Content-type":"application/json"
  },
  body:JSON.stringify(bookingData)
})
  const data = await res.json();
  console.log(data);

  return data;
}


export const deleteBooking = async (id) => {
  const res = await fetch(`http://localhost:5000/booking/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();
   console.log(data);
   if(data.deletedCount > 0){
    revalidateTag('my-booking')
   }
return data;
 
};
