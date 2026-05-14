import { getDataById } from "@/app/lib/data";
import DeleteAlert from "@/components/DeleteAlert";
import EditDestination from "@/components/EditDestination";
import { ArrowLeft, ArrowRight, Check, Delete, MapPin, PencilToLine } from "@gravity-ui/icons";
import { Calendar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const DestinationDetails =async ({params}) => {
    const {id}=await params
    const destination= await getDataById(id)
   console.log(destination);
    const {
      _id,
  destinationName,
  country,
  category,
  price,
  duration,
  departureDate,
  imageUrl,
  description
} = destination
    return (
        <div className="max-w-7xl mx-auto my-5">
         <div className="flex items-center justify-between my-3">
          <div>
            <Link href={"/"} className="flex items-center gap-2 px-4 border rounded-2xl"><ArrowLeft></ArrowLeft> Back To Home</Link>  
          </div>
          <div className="flex items-center gap-2">
<EditDestination destination={destination}></EditDestination>
    <DeleteAlert destination={destination}></DeleteAlert>        
          </div>
            </div>   
         
        <div className="relative w-full h-[600px]">
  <Image
    src={imageUrl}
    alt="image"
    fill
    className="object-cover rounded-md"
  />
</div>
         <div className="flex justify-between items-center p-8 shadow mt-4">
<div className="space-y-3">
<h3 className="flex items-center gap-2 font-semibold text-xl"><MapPin></MapPin>{country}</h3> 
<h4 className="font-semibold text-md">{destinationName}</h4>  
  
<div>
 <h4 className="text-3xl ">Overview</h4>   
 <p>{description}</p>
</div>
<div>
    <h4 className="text-3xl ">Highlights</h4>
   
    <ul>
    <li ><p className="flex items-center gap-2"><Check color="green"></Check>Free cancellation up to 7 days</p></li>
    <li><p className="flex items-center gap-2"><Check color="green"></Check>Travel insurance included</p></li>
    <li><p className="flex items-center gap-2"><Check color="green"></Check>24/7 customer support</p></li>
    </ul>
</div>

</div>

<div className="bg-white shadow py-4 px-10 space-y-3">
<div>
<p className="text-zinc-500">Staring from</p>
<p className="text-3xl text-sky-500">${price}</p>
<p>/per person</p>
</div>
<div className="bg-zinc-200 px-2 py-1">
<p>{departureDate}</p>
</div>
<div>
    <div className="flex bg-sky-500 w-full  items-center justify-center rounded-md">
<button className=" flex items-center gap-2 py-1 text-white">Book Now <ArrowRight></ArrowRight></button>
    </div>

<ul className="space-y-2 mt-3">
    <li ><p className="flex items-center gap-2"><Check color="green"></Check>Free cancellation up to 7 days</p></li>
    <li><p className="flex items-center gap-2"><Check color="green"></Check>Travel insurance included</p></li>
    <li><p className="flex items-center gap-2"><Check color="green"></Check>24/7 customer support</p></li>
</ul>
</div>
</div>



         </div>
        </div>
    );
};

export default DestinationDetails;