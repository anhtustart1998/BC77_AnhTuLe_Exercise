import React, { useState, useEffect } from "react";
import { ProductCard } from "../Card/ProductCard";
import axios from "axios";
import { ProductModal } from "../Modal/ProductModal";

export const Banner = () => {
  const [helicopterData, setHelicoterData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://6725e6d1c39fedae05b634be.mockapi.io/learning/api/productList"
      )
      .then((response) => {
        setHelicoterData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  return (
    <section className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 py-12">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {helicopterData.map((heli) => (
            <ProductCard
              key={heli.id}
              heliInfo={heli}
              onNameClick={() => handleProductClick(heli)}
            />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </section>
  );
};
