
// import { Star } from 'lucide-react';

const MyEquipment = () => {

    {
        // image,
        // itemName,
        // category,
        // description,
        // price,
        // rating,
        // customization,
        // processingTime,
        // stockStatus,
      }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-4">
      <img
        src={""}
        alt={""}
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold">Md Abu saeed</h2>
        <p className="text-sm text-gray-500">Category:</p>
        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="flex items-center mt-2">
          {/* <span className="text-yellow-400 flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                // fill={index < rating ? 'currentColor' : 'none'}
              />
            ))}
          </span> */}
          <span className="ml-2 text-gray-600">rating/ 5</span>
        </div>
        <div className="mt-3">
          <p className="text-sm text-gray-600">
            {/* Customization:{customization?.join(', ') || 'None'} */}
            Customization
          </p>
          <p className="text-sm text-gray-600">Processing Time:10pm</p>
          <p className="text-sm text-gray-600">Stock:</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold">500$</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEquipment;

