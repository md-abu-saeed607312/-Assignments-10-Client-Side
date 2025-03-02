import { Link } from "react-router-dom";
import SportsCard from "../All Sports Equipment/SportsCard";

const PriceingData = ({ allData }) => {
  const lowPriceProduct = allData.filter((e) => Number(e.price) < 55);

  return (
    <>
    <Link to={"/allsports"}><p className="font-bold text-3xl mt-4">Low Price Product:</p></Link>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
        {lowPriceProduct.map((sports) => (
          <SportsCard sports={sports} key={sports?._id}></SportsCard>
        ))}
      </div>
    </>
  );
};

export default PriceingData;
