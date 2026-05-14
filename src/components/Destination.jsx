import { ArrowUpRight, Calendar,  MapPin } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";


const Destination = ({destination}) => {
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
        <div className="bg-white shadow p-5 space-y-2 rounded-md">
         <div className="h-[225px] overflow-hidden">
  <Image
    className="w-full h-full object-cover rounded-sm"
    src={imageUrl}
    width={400}
    height={200}
    alt={destinationName}
  />
</div> 
            <h3 className="flex items-center gap-2 font-semibold text-xl"><MapPin></MapPin>{country}</h3> 
         <div className="flex justify-between items-center">
         <h4 className="font-semibold text-md">{destinationName}</h4>  
         <p><span className="text-3xl">${price}</span><span className="text-zinc-700">/person</span></p> 
            </div>
            <div className="flex items-center gap-2">
                <Calendar></Calendar>
                <p><span>{duration} Days</span>/6 Nights</p>
                </div> 
                <Link href={`/destinations/${_id}`} className="text-sky-500 flex items-center gap-2">BOOK NOW <ArrowUpRight></ArrowUpRight></Link>
        </div>
    );
};

export default Destination;