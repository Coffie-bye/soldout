import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-medium text-lg mb-1">{product.name}</h3>
          <div className="flex items-center">
            <span className="text-green-600 font-bold">
              ₦{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-gray-500 text-sm line-through ml-2">
                ₦{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
      <button className="w-full py-2 bg-yellow-500 text-white font-medium hover:bg-yellow-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
