import { auth } from "@/lib/auth";
import { headers } from "next/headers";




export const getData = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`,{
     
    })
    const data = await res.json()
    return data;
}
export const getFeaturesData = async()=>{
    const res = await fetch(`http://localhost:5000/featured`)
    const data = await res.json()
    console.log(data);
    return data;
}

export const getDataById = async(id)=>{
    console.log(id);
const {token} = await auth.api.getToken({
        headers:await headers()
    })
    console.log(token); 
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`,{
headers:{
    authorization:`Bearer ${token}`
}
})
const data = await res.json()
return data
}

export const getBookingData = async(userId)=>{
    console.log(userId);
    const {token} = await auth.api.getToken({
        headers:await headers()
    })
    console.log(token); 
 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${userId}`,{
  headers:{
    authorization:`Bearer ${token}`
}  
 })   
const data = await res.json()
console.log(data);
return data

}