import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./table.css";

const BasicTable = () => {
  const history = useHistory();
  const stores = useSelector((state) => state.stores);
  const storesCopy = [...stores, ...stores];
  const tableColumn = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Logo",
      id: "logo",
      Cell: (cell) => {
        console.log(cell);
        return (
          <div className="w-full h-14">
            <img
              src={cell?.row?.original?.logo}
              alt=""
              className="h-full w-auto"
            />
          </div>
        );
      },
    },
  ];
  const columns = useMemo(() => tableColumn, []);
  const data = useMemo(() => storesCopy, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );
  const { pageIndex, pageSize } = state;
  return (
    <>
      <table {...getTableProps()} className="shadow-2xl h-full overflow-auto">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className=" border-b-2 border-primary-1 text-left pl-5"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="hover:bg-secondary-2 cursor-pointer"
                onClick={() =>
                  history.push(`/stores/${row.original.name.toLowerCase()}`)
                }
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="text-white pl-5 border-b-2 border-primary-1 "
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-white text-center my-5">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select
          className="text-primary-1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default BasicTable;
