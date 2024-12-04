import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const EditProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const helicopterData = location.state?.helicopterData;

  const [formData, setFormData] = useState({
    id: helicopterData?.id || "",
    name: helicopterData?.name || "",
    alias: helicopterData?.alias || "",
    price: helicopterData?.price || "",
    description: helicopterData?.description || "",
    shortDescription: helicopterData?.shortDescription || "",
    quantity: helicopterData?.quantity || "",
    manufacture: helicopterData?.manufacture || "",
    system: helicopterData?.system || "",
    engine: helicopterData?.engine || "",
    image: helicopterData?.image || "",
  });

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.price) tempErrors.price = "Price is required";
    if (formData.price && isNaN(formData.price))
      tempErrors.price = "Price must be a number";
    if (!formData.quantity) tempErrors.quantity = "Quantity is required";
    if (formData.quantity && isNaN(formData.quantity))
      tempErrors.quantity = "Quantity must be a number";
    if (!formData.manufacture)
      tempErrors.manufacture = "Manufacturer is required";
    return tempErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      try {
        await axios.put(
          `https://6725e6d1c39fedae05b634be.mockapi.io/learning/api/productList/${helicopterData.id}`,
          formData
        );

        alert("helicopter Editted successfully!");

        setFormData({
          id: "",
          name: "",
          alias: "",
          price: "",
          description: "",
          shortDescription: "",
          quantity: "",
          manufacture: "",
          system: "",
          engine: "",
          image: "",
        });
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      } catch (error) {
        console.error("API Error:", error);
        alert("Error editing. Please try again.");
      }
    } else {
      setErrors(newErrors);
      console.log("Form validation errors:", newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Edit Helicopter Data
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter helicopter name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Alias Field */}
            <div>
              <label className="block text-sm font-medium mb-1">Alias</label>
              <input
                type="text"
                name="alias"
                value={formData.alias}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter alias"
              />
            </div>

            {/* Price Field */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price}</p>
              )}
            </div>

            {/* Quantity Field */}
            <div>
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter quantity"
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
              )}
            </div>

            {/* Manufacturer Field */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Manufacturer
              </label>
              <input
                type="text"
                name="manufacture"
                value={formData.manufacture}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter manufacturer"
              />
              {errors.manufacture && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.manufacture}
                </p>
              )}
            </div>

            {/* System Field */}
            <div>
              <label className="block text-sm font-medium mb-1">System</label>
              <input
                type="text"
                name="system"
                value={formData.system}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter system"
              />
            </div>

            {/* Engine Field */}
            <div>
              <label className="block text-sm font-medium mb-1">Engine</label>
              <input
                type="text"
                name="engine"
                value={formData.engine}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter engine details"
              />
            </div>

            {/* Image URL Field */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter image URL"
              />
            </div>
          </div>

          {/* Description Fields */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Short Description
            </label>
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter short description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Full Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter full description"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
            <button
              className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
