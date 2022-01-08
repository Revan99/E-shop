import React from "react";
import Table from "../../component/table/Table";

const StoreTable = () => {
  return (
    <div className="w-full h-full bg-secondary-1 p-10 box-border">
      <div className="rounded-lg w-full  h-full overflow-auto border-primary-1 border-2">
        <Table />
      </div>
    </div>
  );
};

export default StoreTable;
