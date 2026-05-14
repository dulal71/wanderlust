'use client'
import Link from "next/link";
import {Person} from '@gravity-ui/icons';
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { div } from "motion/react-m";
import { useRouter } from "next/navigation";

const Navbar = () => {
     const { data: session,  } = authClient.useSession() 
    const user = session?.user
   
    
    return (
        <nav className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white/80  backdrop-blur-md shadow-sm border border-white/10 flex justify-between items-center px-10 py-3 h-20">
            {/* left-content */}
         <div>
         <ul className="flex gap-6 text-xl">
         <Link href='/'>Home</Link>  
         <Link href='/destinations'>Destinations</Link> 
         <Link href='/add-destinations'>Add-Destinations</Link>   
         <Link href='/my-booking'>My Bookings</Link>   
         <Link href='/admin'>Admin</Link>   
            </ul>   
            
            </div>   
          {/* middle-content */}
         <div className="">
          <Image src='/assets/Wanderlast.png' width={200} height={200} alt="logo.png"></Image>  
            </div>   
          {/*right-content */}
         <div>

 {
    user?  <div className="flex items-center gap-2 ">
       
        <Avatar>
        <Avatar.Image alt="John Doe" referrerPolicy="no-referrer" src={user?.image} />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>  
       <Link href='/profile' className="px-3 bg-blue-800 text-white rounded-full">Profile</Link></div> :
    <ul className="flex gap-6 items-center text-xl font-semibold">
    <li><Link href='/login'>Login</Link></li>
      <li><Link href='/signUp'>Sign Up</Link></li>  
</ul>
 } 
   
 





            </div>   
        </nav>
    );
};

export default Navbar;