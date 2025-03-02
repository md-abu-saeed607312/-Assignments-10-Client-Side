import { Star } from "lucide-react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const{ dainamic,myequipmentRes,allDataRes}=useLoaderData()

  // console.log(dainamic);
  console.log(myequipmentRes);

  // const myequipment=myequipmentRes.filter((e)=>allDataRes.some((data)=>data.itemName === e.itemName))
  // console.log(myequipment);

  
  const {
    image,
    itemName,
    categoryName,
    rating,
    description,
    price,
    stockStatus,
    processingTime,
    customization,
  } = dainamic;  // সঠিকভাবে ডিটেইলস থেকে প্রোপার্টি আনা হচ্ছে

  // Add to Cart function
  const handelCard = () => {
    const serverData = {
      itemName: itemName,
      price: price,
      image: image,
      stockStatus: stockStatus,
    };

    fetch("http://localhost:5000/myequipment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serverData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Added to cart:", data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="border rounded-2xl w-full shadow-lg p-4 flex gap-6">
      <div>
        <img
          src={image}
          alt={itemName}
          className="rounded-lg w-full h-72 object-cover"
        />
      </div>
      <div className="p-2">
        <h2 className="text-lg font-semibold text-gray-800">{itemName}</h2>
        <p className="text-sm text-gray-600">Category: {categoryName}</p>
        <div className="flex items-center mt-1 text-yellow-500">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                stroke="currentColor"
                fill={index < rating ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-sm ml-1">{rating}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <p className="text-xl font-bold text-red-500 mt-2">Price: {price}৳</p>
        <p className="text-sm text-gray-500">Stock Status: {stockStatus}</p>
        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <span>Processing Time: {processingTime} Days</span>
          <span>Customization: {customization}</span>
        </div>
        <div className="flex gap-6">
          <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Update Product
          </button>

          <button
            onClick={handelCard} // No need to pass itemName as it's already in the context
            className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

