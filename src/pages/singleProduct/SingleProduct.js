import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const products = useSelector((state) => state.products);
  const { name, product } = useParams();

  const singleProduct = products[
    name.slice(0, 1).toUpperCase() + name.slice(1)
  ].find(
    (item) =>
      item.itemName.split(" ").join("").toLowerCase() === product.toLowerCase()
  );
  return (
    <div className="w-full h-full bg-secondary-1 p-10">
      <div className="w-full h-full border-secondary-2 shadow-xl border rounded-3xl flex flex-col md:flex-row overflow-hidden">
        <div className="flex-1 text-white p-3 flex flex-col justify-evenly">
          <div>
            <h1 className="text-3xl mb-3">Product Name: </h1>
            <h1 className="text-4xl">{singleProduct.itemName}</h1>
          </div>
          <div className="flex justify-between text-2xl px-5">
            <h1>Price:</h1>
            <h1>{singleProduct.price}$</h1>
          </div>
        </div>
        <div className="flex-1 h-full">
          <img src={singleProduct.image} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
