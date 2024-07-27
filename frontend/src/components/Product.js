import React from "react";
const Product = ({ product }) => {
  return (
    <div className="border p-4 rounded">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-green-500 font-bold">${product.price}</p>
    </div>
  );
};
export default Product;