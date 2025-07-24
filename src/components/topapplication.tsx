import React from "react";

const TopApplicationComponent = () => {
  const rows = 4;

  // Table rows (1st column acts like a row header)
  const rowHeaders = ["Product A", "Product B", "Product C", "Product D"];

  // Table data (excluding the first column which is row header)
  const tableData = [
    ["App 1", "High", "80%"],
    ["App 2", "Medium", "65%"],
    ["App 3", "Low", "45%"],
    ["App 4", "High", "90%"],
  ];

  return (
    <div className="">
      <table className="table-auto  w-full text-center">
        <thead className="bg-white">
          <tr className="">
            <th className=" px-4 py-2 border-b border-gray-200"></th>
            <th className=" px-4 py-2 border-b border-gray-200">Application</th>
            <th className=" px-4 py-2 border-b border-gray-200">
              Lead Popularity
            </th>
            <th className=" px-4 py-2 border-b border-gray-200">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className=" px-4 py-2 font-semibold border-b border-gray-200">
                {rowHeaders[rowIndex]}
              </td>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className=" px-4 py-2 border-b border-gray-200"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopApplicationComponent;
