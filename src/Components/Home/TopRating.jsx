import { Link } from "react-router-dom";
import SportsCard from "../All Sports Equipment/SportsCard";

const TopRating = ({ allData }) => {
  const topRating = allData.filter((e) => e.rating > 4);
  //   const topRating = (allData || []).filter((e) => Number(e.rating) > 4);
  return (
    <>
      <Link to={"/allData"}>
        <p className="font-bold text-3xl mt-6 mb-3">Top Rating Product:</p>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {topRating.map((sports) => (
          <SportsCard sports={sports} key={sports?._id}></SportsCard>
        ))}
      </div>
    </>
  );
};

export default TopRating;
