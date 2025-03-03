import { Star } from "lucide-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipment = () => {
  const loadedEquipment = useLoaderData();
  const [myequipment, setMyEquipment] = useState(loadedEquipment || []);

  // ✅ DELETE FUNCTION (সঠিকভাবে async-await ব্যবহার করা হয়েছে)
  const deleteHandle = async (id) => {
    console.log("Deleting ID:", id);
    // sweetalert2
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `http://localhost:5000/myequipment/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error(`Server error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Delete Response:", data);

        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });

          // UI থেকে ডিলিট হওয়া আইটেম সরানো হচ্ছে
          setMyEquipment(myequipment.filter((item) => item._id !== id));
        } else {
          Swal.fire({
            title: "Error!",
            text: "No equipment found with that ID",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Delete error:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error while deleting.",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {myequipment.map((equipment) => {
        const {
          _id,
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
            key={_id}
            className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-4"
          >
            <img
              src={image}
              alt={itemName}
              className="w-full h-48 object-cover rounded-xl"
            />

            <div className="mt-4">
              <h2 className="text-xl font-bold">{itemName}</h2>
              <p className="text-sm text-gray-500">Category: {category}</p>
              <p className="mt-2 text-gray-700">{description}</p>

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
                <p className="text-sm text-gray-600">
                  Stock Status: {stockStatus}
                </p>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">Price: ${price}</span>
                <button
                  onClick={() => deleteHandle(_id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
                >
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
