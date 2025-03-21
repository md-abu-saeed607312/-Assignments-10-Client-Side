import { Link } from "react-router-dom";

const Category = () => {


  return (
    <>
      <p className="text-center font-bold text-3xl py-3 text-blue-600">Product Category</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <Link to={"/fitness"}>
          <div className="text-center border p-4 bg-gray-100 rounded-xl shadow-md hover:bg-gray-200 ">
            <div className="text-3xl">🏕️</div>
            <p className="mt-2 text-sm font-medium">Fitness Equipment</p>
          </div>
        </Link>
        <Link to={"/outdoor"}>
          <div className="text-center border p-4 bg-gray-100 rounded-xl shadow-md hover:bg-gray-200 ">
            <div className="text-3xl">🏕️</div>
            <p className="mt-2 text-sm font-medium">Outdoor Gear</p>
          </div>
        </Link>
        <Link to={"/fitness"}>
          <div className="text-center border p-4 bg-gray-100 rounded-xl shadow-md hover:bg-gray-200 ">
            <div className="text-3xl">🏕️</div>
            <p className="mt-2 text-sm font-medium">Fitness Equipment</p>
          </div>
        </Link>
        <Link to={"/teamsports"}>
          <div className="text-center border p-4 bg-gray-100 rounded-xl shadow-md hover:bg-gray-200 ">
            <div className="text-3xl">🏕️</div>
            <p className="mt-2 text-sm font-medium">Team Sports</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Category;
