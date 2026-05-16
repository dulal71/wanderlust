import { getFeaturesData } from "@/app/lib/data";
import Link from "next/link";
import SwiperSlider from "./SwiperSlider";


const Features =async () => {
    const features = await getFeaturesData()
    console.log(features);
    return (
        <div className="max-w-7xl mx-auto my-11">
            <div className="flex flex-col gap-2 md:flex-row  justify-between items-center">
                <div>
                 <h2 className="text-4xl font-bold">Featured Destinations</h2>
                 <p className="text-zinc-500">Handpicked travel experiences for the adventure seekers</p>   
                </div>
                <Link href={"/add-destinations"} className="px-2 border border-sky-300">All Destinations</Link>
            </div>
            <div>
              <SwiperSlider features={features}></SwiperSlider>
            </div>
            
        </div>
    );
};

export default Features;