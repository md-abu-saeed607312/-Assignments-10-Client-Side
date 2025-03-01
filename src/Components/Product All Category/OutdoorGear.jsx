import { useLoaderData } from "react-router-dom";
import SportsCard from "../All Sports Equipment/SportsCard";

const OutdoorGear = () => {
  const OutdoorGear = useLoaderData();

//   const OutdoorProduct = OutdoorGear.filter((e) => {
//     e.categoryName ==="Outdoor Gear";
//   });

  const OutdoorProduct=OutdoorGear.filter(
    (e) => e.categoryName === "Outdoor Gear"
  );


  return (
    <div>
      <h2 className="text-xl font-bold my-4">Outdoor Product </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {OutdoorProduct.map((sports) => (
          <SportsCard sports={sports} key={sports?._id} />
        ))}
      </div>
    </div>
  );
};

export default OutdoorGear;
