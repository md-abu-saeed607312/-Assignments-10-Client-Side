import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const  Error  = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! This Page Could Not Be Found</h2>
      <p className="mt-2 text-gray-600 max-w-md">
        Sorry, but the page you are looking for does not exist, has been removed, name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        <FaHome /> Go to Homepage
      </Link>
    </div>
  );
};

export default  Error ;

