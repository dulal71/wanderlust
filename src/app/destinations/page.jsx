import Destination from "@/components/Destination";
import { getData } from "../lib/data";


const Destinations =async () => {
    const destinations= await getData()
console.log(destinations);
    return (
        <div className="max-w-7xl mx-auto p-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            destinations.map(destination => <Destination key={destination._id} destination={destination}></Destination>)
        }    
            </div>  
        </div>
    );
};

export default Destinations;