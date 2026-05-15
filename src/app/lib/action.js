'use server'

import { auth } from "@/lib/auth";
import { revalidatePath} from "next/cache"
import { headers } from "next/headers";




export const PostData = async(destinations)=>{
const {token} = await auth.api.getToken({
        headers:await headers()
    })
    console.log(token);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`,{
   method:"POST" ,
   headers:{
    'Content-type': 'application/json',
     authorization:`Bearer ${token}`

   },
   body:JSON.stringify(destinations)
})
const data = await res.json()
return data
}



export const updateData = async (formData, id) => {
  const update = Object.fromEntries(formData.entries());
console.log(update);
const {token} = await auth.api.getToken({
        headers:await headers()
    })
    console.log(token);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
       authorization:`Bearer ${token}`

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
const {token} = await auth.api.getToken({
        headers:await headers()
    })
    console.log(token);
  const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
  method:"POST",
  headers:{
    "Content-type":"application/json",
     authorization:`Bearer ${token}`

  },
  body:JSON.stringify(bookingData)
})
  const data = await res.json();
  console.log(data);

  return data;
}


export const deleteBooking = async (id) => {
  console.log("id:",id);
  const {token} = await auth.api.getToken({
        headers:await headers()
    })
    console.log(token);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`, {
    method: "DELETE",
    headers:{
      authorization:`Bearer ${token}` 
    }
  });

  const data = await res.json();
   console.log(data);
   if(data.deletedCount > 0){
    revalidatePath('/my-booking')
   }
return data;
 
};
