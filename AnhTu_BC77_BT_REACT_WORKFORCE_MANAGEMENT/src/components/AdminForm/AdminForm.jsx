import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createEmployee,
  updateEmployee,
  clearSelectedEmployee,
} from "../../ReduxEmployee/EmployeeSlice";
import { useNavigate } from "react-router";

export const AdminForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedEmployee = useSelector(
    (state) => state.employees.selectedEmployee
  );
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    maNhanVien: "",
    tenNhanVien: "",
    chucVu: "",
    heSoChucVu: 0,
    luongCoBan: 0,
    soGioLamTrongThang: 0,
  });

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    } else {
      setFormData({
        maNhanVien: "",
        tenNhanVien: "",
        chucVu: "",
        heSoChucVu: 0,
        luongCoBan: 0,
        soGioLamTrongThang: 0,
      });
    }
  }, [selectedEmployee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (selectedEmployee) {
        await dispatch(updateEmployee(formData)).unwrap();
      } else {
        await dispatch(createEmployee(formData)).unwrap();
      }
      dispatch(clearSelectedEmployee());
      navigate("/");
    } catch (error) {
      setError(error.message || "Failed to save employee");
    }
  };

  const handleCancel = () => {
    dispatch(clearSelectedEmployee());
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "tenNhanVien" || name === "chucVu" || name === "maNhanVien"
          ? value
          : Number(value),
    }));
  };

  return (
    <section className="bg-white dark:bg-gray-900 text-base">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        {selectedEmployee ? "Update Employee" : "Create New Employee"}
      </h2>
      {error && (
        <div className="text-red-500 mb-4 p-2 bg-red-100 rounded">{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Employee ID
            </label>
            <input
              type="text"
              name="maNhanVien"
              value={formData.maNhanVien}
              onChange={handleChange}
              disabled={selectedEmployee !== null}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type employee name"
              required
            />
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Employee Name
            </label>
            <input
              type="text"
              name="tenNhanVien"
              value={formData.tenNhanVien}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type employee name"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Employee Title
            </label>
            <input
              type="text"
              name="chucVu"
              value={formData.chucVu}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type Employee Title"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Position Rank
            </label>
            <input
              type="number"
              name="heSoChucVu"
              value={formData.heSoChucVu}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Base Salary
            </label>
            <input
              type="number"
              name="luongCoBan"
              value={formData.luongCoBan}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="item-weight"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Work Hours
            </label>
            <input
              type="number"
              name="soGioLamTrongThang"
              value={formData.soGioLamTrongThang}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center mt-5 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {selectedEmployee ? "Update" : "Add"}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="mx-5 inline-flex items-center mt-5 px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Abort
        </button>
      </form>
    </section>
  );
};
