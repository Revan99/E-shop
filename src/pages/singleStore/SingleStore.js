import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../component/card/Card";
const SingleStore = () => {
  const { stores, categories } = useSelector((state) => ({
    stores: state.stores,
    categories: state.categories,
  }));
  const params = useParams();
  const singleStore = stores.find(
    (store) => store.name.toLowerCase() === params.name
  );
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(singleStore);
  return (
    <div className="w-full h-full bg-secondary-1 p-10 flex flex-col">
      <h1 className="text-white text-7xl mb-2">{singleStore.name}</h1>
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
        {singleStore.categories.map((category) => {
          if (!category.toLowerCase().includes(search.toLowerCase())) return;
          return (
            <Card
              imageSrc={categories[category].logo}
              text={categories[category].name}
              key={categories[category].id}
              path={`/stores/${params.name}/${category.toLowerCase()}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SingleStore;
