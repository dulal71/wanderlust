import Link from "next/link";
import {Person} from '@gravity-ui/icons';
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white/80  backdrop-blur-md shadow-sm border border-white/10 flex justify-between items-center px-10 py-3 h-20">
            {/* left-content */}
         <div>
         <ul className="flex gap-6 text-xl">
         <Link href='/'>Home</Link>  
         <Link href='/destinations'>Destinations</Link> 
         <Link href='/add-destinations'>Add-Destinations</Link>   
         <Link href='/myBookings'>My Bookings</Link>   
         <Link href='/admin'>Admin</Link>   
            </ul>   
            
            </div>   
          {/* middle-content */}
         <div className="">
          <Image src='/assets/Wanderlast.png' width={200} height={200} alt="logo.png"></Image>  
            </div>   
          {/*right-content */}
         <div>
<ul className="flex gap-6 items-center text-xl font-semibold">
 <li><Link href='/login' className="flex items-center gap-2"><Person></Person>Profile</Link></li>   
 <li><Link href='/profile'>Login</Link></li>   
 <li><Link href='/signUp'>Sign Up</Link></li>   
</ul>




            </div>   
        </nav>
    );
};

export default Navbar;