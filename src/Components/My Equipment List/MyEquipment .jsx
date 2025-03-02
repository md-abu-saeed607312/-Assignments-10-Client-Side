import { Star } from "lucide-react";
import { useLoaderData } from "react-router-dom";

const MyEquipment = () => {
  const { myequipment, allData } = useLoaderData();

  
  const myequipmentData = myequipment.filter((e) =>
    allData.some((data) => data.itemName === e.itemName)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {myequipmentData.map((equipment) => {
        const {
          _id, // Unique identifier for key
          image,
          itemName,
          category,
          description,
          price,
          rating,
          processingTime,
          stockStatus,
        } = equipment;

        return (
          <div
            key={_id} // Fix: Added unique key
            className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-4"
          >
            {/* Equipment Image */}
            <img
              src={image}
              alt={itemName}
              className="w-full h-48 object-cover rounded-xl"
            />

            <div className="mt-4">
              <h2 className="text-xl font-bold">{itemName}</h2>
              <p className="text-sm text-gray-500">Category: {category}</p>
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
                <p className="text-sm text-gray-600">
                  Processing Time: {processingTime}
                </p>
                <p className="text-sm text-gray-600">Stock Status: {stockStatus}</p>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">Price: ${price}</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyEquipment;
