
import { useLoaderData } from "react-router-dom";
import Category from "../Category Slider/Category";
import Header from "../Layout/Header/Header";
import PriceingData from "./PriceingData";
import TopRating from "./TopRating";

const Home = () => {
  const allData=useLoaderData()
  return (
    <div>
      <Header></Header>
      <div className="my-10 ">
        <Category></Category>
      </div>
      {/* Low Price Product */}
      <div>
        <PriceingData allData={allData}></PriceingData>
      </div>
      {/* Top Reating  */}
      <div>
        <TopRating allData={allData}></TopRating>
      </div>

    </div>
  );
};

export default Home;
