import { getFeaturesData } from "@/app/lib/data";


const Features =async () => {
    const features = await getFeaturesData()
    console.log(features);
    return (
        <div>
            
        </div>
    );
};

export default Features;