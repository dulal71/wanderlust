import { getDataById } from "@/app/lib/data";
import DeleteAlert from "@/components/DeleteAlert";
import EditDestination from "@/components/EditDestination";
import { ArrowLeft, ArrowRight, Check, Delete, MapPin, PencilToLine } from "@gravity-ui/icons";
import { Calendar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import BookingCard from "../../../components/BookingCard";


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
<BookingCard destination={destination}></BookingCard>
</div>
        </div>
    );
};

export default DestinationDetails;