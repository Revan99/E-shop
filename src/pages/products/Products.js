import React, { useState } from "react";
import { useSelector } from "react-redux";

import Card from "../../component/card/Card";

const Products = () => {
  const products = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  //   const arrayOfAllProducts = [];
  //   Object.values(products).forEach((product) =>
  //     arrayOfAllProducts.push(...product)
  //   );
  //   console.log(arrayOfAllProducts);
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
        {Object.entries(products).map(([key, value]) => {
          return value.map((product, index) => {
            if (!product.itemName.toLowerCase().includes(search.toLowerCase()))
              return;
            return (
              <Card
                imageSrc={product.image}
                text={product.itemName}
                key={`${product.id}_${index}`}
                path={`/stores/${key.toLowerCase()}/${product.category.toLowerCase()}/products/${product.itemName
                  .split(" ")
                  .join("")
                  .toLowerCase()}`}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Products;
