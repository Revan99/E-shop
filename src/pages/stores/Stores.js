import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../component/card/Card";

const Stores = () => {
  const stores = useSelector((state) => state.stores);
  const [search, setSearch] = useState("");
  console.log(stores);
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
      <div className="grid gap-10  grid-cols-4 w-full h-full overflow-auto">
        {stores.map((store) => {
          if (!store.name.toLowerCase().includes(search.toLowerCase())) return;
          return (
            <Card imageSrc={store.logo} text={store.name} key={store.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Stores;
