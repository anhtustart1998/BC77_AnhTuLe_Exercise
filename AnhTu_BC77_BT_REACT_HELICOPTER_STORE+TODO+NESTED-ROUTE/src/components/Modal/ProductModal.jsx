import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function ProductModal({ product, openModal, setOpenModal }) {
  return (
    <>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header size="lg">{product.name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img
              className="p-5 rounded-t-lg transition-transform duration-300 group-hover:scale-105"
              src={product.image}
              alt={`${product?.name || "Product"} image`}
            />
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {product.description}
            </p>
            <div className="flex justify-between">
              <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-300">
                Main Engine: {product.engine}
              </p>
              <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-300">
                Avionic System: {product.system}
              </p>
            </div>

            <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-300">
              Sale Today: ${product?.price?.toLocaleString() || "0.00"}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Buy Now</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Buy now Pay Later
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
