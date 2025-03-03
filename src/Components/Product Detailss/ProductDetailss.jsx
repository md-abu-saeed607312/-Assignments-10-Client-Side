import { Star } from "lucide-react";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { TheContext } from "../../Auth Provider/AuthProvider";
import { toast } from "react-toastify";

const ProductDetails = () => {

   const notify = () => toast.success('Product Add Successfully ');
   const notifyError = () => toast.error('This Product is already in your Card"');
  const { user } = useContext(TheContext); // ব্যবহারকারীর তথ্য আনছে
  const { singleequipmentDetails, myequipments } = useLoaderData(); // লোড হওয়া ডাটা নিচ্ছে


  const [fav, setFav] = useState([]); // ফেভারিট লিস্ট স্টেট


  //-------------------------------- Event Handeler Function------------------------------ 
  const handelCard = (itemName) => {



    const singleEquipment = { ...singleequipmentDetails, userEmail: user.email }; // ইউজারের ইমেইল সংযোজন

    // চেক করা হচ্ছে যে একই ব্যবহারকারীর কাছে এটি আগে আছে কিনা
    const isExist = myequipments.some(
      (p) => p.itemName === itemName && p.userEmail === user.email
    );

    // একই Genre-এর পণ্য আগে `fav` এ আছে কিনা চেক করা হচ্ছে
    const productExistsInFav = fav.find(
      (product) => product._id === singleEquipment._id
    );



    if (!productExistsInFav) { // পণ্য চেক করা হচ্ছে 
      if (!isExist) {         // User চেক করা হচ্ছে  
        fetch("http://localhost:5000/myequipment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(singleEquipment),
        })
          .then((res) => res.json())
          .then((data) => {
            notify()
            console.log("Added to cart:", data);
            setFav((prev) => [...prev, singleEquipment]); // ডাটাবেজে সফলভাবে সেভ হলে স্টেটে অ্যাড করুন
          })
          .catch((error) => console.error("Error:", error));
      } else {
        toast("This equipment is already in your favorites.");
        
      }
    } else {
      notifyError()
    }
  };

  // ডাটা ডিকন্সট্রাকচার
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
  } = singleequipmentDetails;

  return (
    <div className="border rounded-2xl w-full shadow-lg p-4 flex gap-6">
      {/* প্রোডাক্ট ইমেজ */}
      <div>
        <img
          src={image}
          alt={itemName}
          className="rounded-lg w-full h-72 object-cover"
        />
      </div>

      {/* প্রোডাক্ট বিবরণ */}
      <div className="p-2">
        <h2 className="text-lg font-semibold text-gray-800">{itemName}</h2>
        <p className="text-sm text-gray-600">Category: {categoryName}</p>

        {/* রেটিং */}
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

        {/* প্রোডাক্ট ডেসক্রিপশন */}
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <p className="text-xl font-bold text-red-500 mt-2">Price: {price}৳</p>
        <p className="text-sm text-gray-500">Stock Status: {stockStatus}</p>

        <div className="mt-2 flex justify-between text-xs text-gray-500">
          <span>Processing Time: {processingTime} Days</span>
          <span>Customization: {customization}</span>
        </div>

        {/* বাটনস */}
        <div className="flex gap-6">
          <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Update Product
          </button>

          <button
            onClick={() => handelCard(itemName)}
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


