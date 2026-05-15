'use client'
import { authClient } from "@/lib/auth-client";
import { MapPin } from "@gravity-ui/icons";
import { Avatar } from "@heroui/react";
import { reddit } from "better-auth";
import { Edit, Edit3Icon } from "lucide-react";
import { redirect, useRouter } from "next/navigation";


const Profile = () => {
    const { data: session,  } = authClient.useSession() 
    const user = session?.user
     console.log(user);
    const router = useRouter
         const signOut =async ()=>{
    await authClient.signOut({

      })
      redirect("/login")
   
         }
    return (
        <div className="max-w-5xl mx-auto space-y-5 my-10">
         <div>
        <h1 className="text-3xl ">My Profile</h1>   
        <p>Manage your account setting and travel preferences</p> 
            </div> 
         <div className="">
          <div className=" max-w-72 bg-white shadow p-3.5 space-y-4">
             <Avatar className="w-40 h-40 rounded-full mx-auto">
                    <Avatar.Image alt="John Doe" referrerPolicy="no-referrer" src={user?.image} />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                  <div className="text-center">
                 <h4 className="font-bold text-xl">{user?.name}</h4>
                  <p className="flex items-center justify-center gap-2"><MapPin></MapPin>Bangladesh,MoulviBazar</p>  
                    </div> 
                    <hr className="border border-zinc-400"></hr>
                    <div className="flex justify-between items-center">
<p>Member since</p>
<p className="font-semibold">Mar 2026</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Nationality</p>
                        <p className="font-semibold">BanglaDesh</p>
                    </div>
                   <button onClick={signOut} className="bg-red-700 text-white px-2 rounded-full">Logout</button>
                    <div className="flex items-center justify-center bg-zinc-800 text-white py-1 rounded-full">
                      
                     <Edit3Icon></Edit3Icon>  <button>Edit Profile</button>
                    </div>
            </div>  
            
            </div>  
        </div>
    );
};

export default Profile;