
import { Link } from "react-router-dom";
import { Star } from "lucide-react"; // Import Star icon

const SportsCard = ({ sports }) => {
  const {
    processingTime,
    description,
    categoryName,
    itemName,
    image,
    stockStatus,
    _id,
    price,
    rating
  } = sports;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-4">
      <Link to={`/product/${_id}`}>
        <img
          src={image}
          alt={itemName}
          className="w-full h-48 object-cover rounded-xl"
        />
      </Link>
      <div className="mt-4">
        <h2 className="text-xl font-bold">{itemName}</h2>
        <p className="text-sm text-gray-500">Category: {categoryName}</p>
        <p className="mt-2 text-gray-700">{description}</p>

        {/* Rating Section */}
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                fill={index < rating ? "currentColor" : "none"}
                stroke="currentColor"
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600">{rating}/5</span>
        </div>

        <div className="mt-3">
          <p className="text-sm text-gray-600">Processing Time: {processingTime}</p>
          <p className="text-sm text-gray-600">stockStatus: {stockStatus}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold">Price: {price}$</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
