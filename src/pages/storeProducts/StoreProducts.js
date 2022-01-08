import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Card from "../../component/card/Card";

const StoreProducts = () => {
  const products = useSelector((state) => state.products);
  const { name, category } = useParams();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="w-full h-full bg-secondary-1 p-10 flex flex-col">
      <div className=" mb-10  p-1">
        <input
          type="text"
          className="w-full h-12 rounded-xl  bg-secondary-2 text-white text-xl pl-4"
          value={search}
          placeholder="Search for stores"
          onChange={handleSearch}
        />
      </div>
      <div className="grid gap-10  grid-cols-1 md:grid-cols-3 lg:grid-cols-4   w-full h-full overflow-auto">
        {products[name.slice(0, 1).toUpperCase() + name.slice(1)].map(
          (product) => {
            if (
              product.category !==
              category.slice(0, 1).toUpperCase() + category.slice(1)
            )
              return;
            if (!product.itemName.toLowerCase().includes(search.toLowerCase()))
              return;
            return (
              <Card
                imageSrc={product.image}
                text={product.itemName}
                key={`${product.id}`}
                path={`/stores/${name.toLowerCase()}/${product.category.toLowerCase()}/products/${product.itemName
                  .split(" ")
                  .join("")
                  .toLowerCase()}`}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default StoreProducts;
