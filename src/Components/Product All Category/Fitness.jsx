import { useLoaderData } from "react-router-dom";
import SportsCard from "../All Sports Equipment/SportsCard";

const Fitness = () => {
    const fitness=useLoaderData()

    const fitnessData=fitness.filter(
        (e) => e.categoryName === "Fitness Equipment"
      );
    
    return (
        <div>
            <h2 className="text-xl font-bold my-4">Fitness Equipment</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {fitnessData.map((sports) => (
                    <SportsCard sports={sports} key={sports?._id} />
                ))}
            </div>
        </div>
    );
};

export default Fitness;



// const movie = useLoaderData();
// const sortedFoods = [...movie].sort((a, b) => b.FoodQuantity - a.FoodQuantity);
// const featuredFoods = sortedFoods.slice(0, 6);