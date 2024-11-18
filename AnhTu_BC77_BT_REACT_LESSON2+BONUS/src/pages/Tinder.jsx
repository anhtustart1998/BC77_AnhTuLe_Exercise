import React, { useState } from "react";
import { Heart, X, Info } from "lucide-react";

const TinderCard = () => {
  const ranNum = Math.floor(Math.random() * 100);
  const baseUrl = "https://i.pravatar.cc/?u=";
  const [bioImg, setBioImg] = useState(baseUrl);

  return (
    <div className="container max-w-sm mx-auto">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={bioImg} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Just Caitlyn!
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Nice to meet anyone of you!
          </p>
          <button
            onClick={() => {
              setBioImg(baseUrl + ranNum);
            }}
            className="mx-4 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <Heart />
          </button>
          <button
            onClick={() => {
              setBioImg(baseUrl + ranNum);
            }}
            className="mx-4 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500"
          >
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TinderCard;
