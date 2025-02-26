// const AddEquipment = () => {
//     return (
//         <div className="container mx-auto">
//             <p>Add Equipment</p>
//         </div>
//     );
// };

import { useState } from "react";

const AddEquipment = () => {
  const [formData, setFormData] = useState({
    image: "",
    itemName: "",
    categoryName: "",
    description: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Product added successfully!");
    setFormData({
      image: "",
      itemName: "",
      categoryName: "",
      description: "",
      price: "",
      rating: "",
      customization: "",
      processingTime: "",
      stockStatus: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
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
            value={formData.itemName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter item name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Category Name:</label>
          <input
            type="text"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter category name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
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
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter price"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Rating (1-5):</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
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
            value={formData.customization}
            onChange={handleChange}
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
            value={formData.processingTime}
            onChange={handleChange}
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
            value={formData.stockStatus}
            onChange={handleChange}
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

export default AddEquipment;
