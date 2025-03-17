


import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct= () => {
 const{id}=useParams()
 const data=useLoaderData()
const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const image = e.target.image.value;
    const itemName = e.target.itemName.value;
    const categoryName = e.target.categoryName.value;
    const description = e.target.description.value;
    const price = parseFloat(e.target.price.value);
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processingTime = e.target.processingTime.value;
    const stockStatus = e.target.stockStatus.value;

    const sarverData = {
      processingTime,
      customization,
      rating,
      price,
      description,
      categoryName,
      itemName,
      image,
      stockStatus,
    };

    console.log(sarverData);

    e.target.reset();

    fetch(`http://localhost:5000/UpdateProduct/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sarverData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server Response:", data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product updated successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/")
        }
        
      });


  };

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
  } = data

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Product Update</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Image URL:</label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            className="w-full p-2 border rounded"
            placeholder="Enter image URL"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Item Name:</label>
          <input
            type="text"
            name="itemName"
            defaultValue={itemName}
            className="w-full p-2 border rounded"
            placeholder="Enter item name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Category Name:</label>
        {data.categoryName &&<select
            name="categoryName"
            defaultValue={categoryName}
            className="w-full p-2 border rounded"
            required
          >
            <option value="" disabled selected>
              Select a category
            </option>
            <option value="Fitness Equipment">Fitness Equipment</option>
            <option value="Outdoor Gear">Outdoor Gear</option>
            <option value="Team Sports">Team Sports</option>
            <option value="Racket Sports">Racket Sports</option>
            <option value="Water Sports">Water Sports</option>
            <option value="Water Sports">Size options</option>
          </select>}
        </div>

        <div>
          <label className="block text-sm font-medium">Description:</label>
          <textarea
            name="description"
            defaultValue={description}
            className="w-full p-2 border rounded"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Price ($):</label>
          <input
            type="number"
            name="price"
            defaultValue={price}
            className="w-full p-2 border rounded"
            placeholder="Enter price"
            step="any"  // Allows any decimal values
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Rating (1-5):</label>
          <input
            type="number"
            name="rating"
            defaultValue={rating}
            className="w-full p-2 border rounded"
            min="1"
            max="5"
            placeholder="Enter rating"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Customization:</label>
          <input
            type="text"
            name="customization"
            defaultValue={customization}
            className="w-full p-2 border rounded"
            placeholder="Enter customization details"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Processing Time (Days):
          </label>
          <input
            type="number"
            name="processingTime"
            defaultValue={processingTime}
            className="w-full p-2 border rounded"
            placeholder="Enter delivery time"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Stock Status (Quantity):
          </label>
          <input
            type="number"
            name="stockStatus"
            defaultValue={stockStatus}
            className="w-full p-2 border rounded"
            placeholder="Enter available quantity"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;

