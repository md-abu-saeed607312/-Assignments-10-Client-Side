import { useLoaderData } from "react-router-dom";
import SportsCard from "./SportsCard";

const AllSportsEquipment = () => {
  const stor_data = useLoaderData();

  return (
    <div className="container mx-auto">
      <p>All Sports Equipment</p>
      <div className="grid md:grid-cols-4 gap-6">
        {stor_data.map((sports) => (
          <SportsCard sports={sports} key={sports?._id}></SportsCard>
        ))}
      </div>
    </div>
  );
};

export default AllSportsEquipment;
