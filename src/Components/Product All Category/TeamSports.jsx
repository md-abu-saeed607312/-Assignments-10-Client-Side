import { useLoaderData } from "react-router-dom";
import SportsCard from "../All Sports Equipment/SportsCard";

const TeamSports = () => {
    const teamsports=useLoaderData()

    const teamData=teamsports.filter(
        (e)=>e.categoryName==="Team Sports"
    )

    return (
        <div className="container mx-auto">
        <p>All Sports Equipment</p>
        <div className="grid md:grid-cols-4 gap-6">
          {teamData.map((sports) => (
            <SportsCard sports={sports} key={sports?._id}></SportsCard>
          ))}
        </div>
      </div>
    );
};

export default TeamSports;