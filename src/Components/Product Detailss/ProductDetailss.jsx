import { useLoaderData } from "react-router-dom";

const ProductDetailss = () => {
  const details = useLoaderData();
  const {
    processingTime,
    customization,
    rating,
    price,
    description,
    categoryName,
    itemName,
    image,
    stockStatus,
  } = details;
  return (
    <div className="border rounded-2xl w-6/12 shadow-lg p-4 flex gap-6">
      <div>
        <img
          src={image}
          alt={itemName}
          className="rounded-lg w-full h-72 object-cover"
        />
      </div>
      <div className="p-2">
        <h2 className="text-lg font-semibold text-gray-800">{itemName}</h2>
        <p className="text-sm text-gray-600">{categoryName}</p>
        <div className="flex items-center mt-1 text-yellow-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.122-6.545-4.756-4.634 6.573-.955L10 0l2.939 5.956 6.573.955-4.756 4.634 1.122 6.545z" />
          </svg>
          <span className="text-sm ml-1">{rating}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <p className="text-xl font-bold text-red-500 mt-2">৳ {price}</p>
        <p className="text-sm text-gray-500">{stockStatus}</p>
        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <span>Processing: {processingTime}</span>
          <span>Customization: {customization}</span>
        </div>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailss;
