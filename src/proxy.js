import { NextResponse } from 'next/server'
 

import { headers } from "next/headers";
import { auth } from './lib/auth';

export async function proxy(request) {
 
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
}) 
if(!session) {
return NextResponse.redirect(new URL('/login', request.url))
}
  
}
 
export const config = {
  matcher: ["/destinations","/add-destinations","/my-booking","/destinations/:path"],
}