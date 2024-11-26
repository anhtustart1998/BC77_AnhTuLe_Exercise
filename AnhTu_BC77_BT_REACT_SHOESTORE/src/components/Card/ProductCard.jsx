import React from "react";
import { GrSystem } from "react-icons/gr";
import { GiHelicopterTail } from "react-icons/gi";
import { ProductModal } from "../Modal/ProductModal";
import { Button } from "flowbite-react";

export const ProductCard = ({ heliInfo, onNameClick }) => {
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <a href="#" className="block overflow-hidden group">
        <img
          className="p-5 rounded-t-lg transition-transform duration-300 group-hover:scale-105"
          src={heliInfo.image}
          alt={`${heliInfo?.name || "Product"} image`}
        />
      </a>
      <div className="px-5 pb-5 space-y-3">
        <div className="flex items-start justify-between">
          <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900/30 dark:text-blue-400 border border-blue-400">
            <i className="fa-regular fa-circle-check mr-1" />
            {heliInfo.manufacture}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {heliInfo?.quantity >= 0
              ? `${heliInfo.quantity} In Stock`
              : `Out of Stock`}
          </span>
        </div>
        <a onClick={onNameClick} className="block group cursor-pointer">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-200">
            {heliInfo.name}
          </h5>
        </a>
        <ul className="grid grid-cols-2 gap-3 border-t border-gray-100 dark:border-gray-700 pt-3">
          <li className="flex items-center gap-2 mt-2">
            <i className="fa-solid fa-camera shrink-0 text-gray-500 dark:text-gray-400 text-xs">
              <GiHelicopterTail />
            </i>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 ">
              {heliInfo.engine}
            </p>
          </li>
          <li className="flex items-center gap-2 mt-2">
            <i className="shrink-0 text-gray-500 dark:text-gray-400 text-xs">
              <GrSystem />
            </i>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 ">
              {heliInfo.system}
            </p>
          </li>
        </ul>
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
            <span className="text-xl font-medium text-gray-900 dark:text-white">
              ${heliInfo?.price?.toLocaleString() || "0.00"}
            </span>
          </div>
          <button className="add-to-cart-btn inline-flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-200">
            <i className="fa-solid fa-cart-shopping" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
