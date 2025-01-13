import React from "react";

const TransposedTable = () => {
  const data = [
    {
      month: "August/2024",
      revenue: "$279,544.40",
      revenueChange: "15%",
      revenueTrend: "up",
      costOfGoods: "$80,420.14",
      refundCost: "$4,668.17",
      fulfillment: "$98,532.32",
      advertisingFees: "$12,823.33",
      inventoryFees: "$2,507.99",
      profit: "$80,306.54",
      profitChange: "35%",
      profitTrend: "up",
      unitsSold: "13,704",
    },
    {
      month: "September/2024",
      revenue: "$226,852.81",
      revenueChange: "-19%",
      revenueTrend: "down",
      costOfGoods: "$62,883.11",
      refundCost: "$3,481.07",
      fulfillment: "$79,433.48",
      advertisingFees: "$13,023.39",
      inventoryFees: "$2,284.81",
      profit: "$64,548.97",
      profitChange: "-20%",
      profitTrend: "down",
      unitsSold: "10,949",
    },
    {
      month: "October/2024",
      revenue: "$226,852.81",
      revenueChange: "-19%",
      revenueTrend: "down",
      costOfGoods: "$62,883.11",
      refundCost: "$3,481.07",
      fulfillment: "$79,433.48",
      advertisingFees: "$13,023.39",
      inventoryFees: "$2,284.81",
      profit: "$64,548.97",
      profitChange: "-20%",
      profitTrend: "down",
      unitsSold: "10,949",
    },
    {
      month: "October/2024",
      revenue: "$226,852.81",
      revenueChange: "-19%",
      revenueTrend: "down",
      costOfGoods: "$62,883.11",
      refundCost: "$3,481.07",
      fulfillment: "$79,433.48",
      advertisingFees: "$13,023.39",
      inventoryFees: "$2,284.81",
      profit: "$64,548.97",
      profitChange: "-20%",
      profitTrend: "down",
      unitsSold: "10,949",
    },
    {
      month: "October/2024",
      revenue: "$226,852.81",
      revenueChange: "-19%",
      revenueTrend: "down",
      costOfGoods: "$62,883.11",
      refundCost: "$3,481.07",
      fulfillment: "$79,433.48",
      advertisingFees: "$13,023.39",
      inventoryFees: "$2,284.81",
      profit: "$64,548.97",
      profitChange: "-20%",
      profitTrend: "down",
      unitsSold: "10,949",
    },
    {
      month: "October/2024",
      revenue: "$226,852.81",
      revenueChange: "-19%",
      revenueTrend: "down",
      costOfGoods: "$62,883.11",
      refundCost: "$3,481.07",
      fulfillment: "$79,433.48",
      advertisingFees: "$13,023.39",
      inventoryFees: "$2,284.81",
      profit: "$64,548.97",
      profitChange: "-20%",
      profitTrend: "down",
      unitsSold: "10,949",
    },
  ];

  return (
    <div className="w-full max-h-[400px] max-w-[1200px] relative overflow-auto">
      <table className="w-full text-sm border-[1px] border-[#E7E7E7] border-separate border-spacing-0">
        <thead className="sticky top-0 z-20">
          <tr className="bg-gray-100">
            <th className="table-heading">Category</th>
            {data.map((row, index) => (
              <th key={index} className="table-heading">
                {row.month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="table-heading">Revenue</th>
            {data.map((row, index) => (
              <td key={index} className="p-2 border border-gray-200">
                <span>{row.revenue}</span>
                <span
                  className={`ml-2 text-sm ${
                    row.revenueTrend === "up"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {row.revenueChange} {row.revenueTrend === "up" ? "↑" : "↓"}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            <th className="table-heading">Cost of Goods</th>
            {data.map((row, index) => (
              <td key={index} className="p-2 border border-gray-200">
                {row.costOfGoods}
              </td>
            ))}
          </tr>
          <tr>
            <th className="table-heading">Refund Cost</th>
            {data.map((row, index) => (
              <td key={index} className="p-2 border border-gray-200">
                {row.refundCost}
              </td>
            ))}
          </tr>
          <tr>
            <th className="table-heading">Fulfillment</th>
            {data.map((row, index) => (
              <td key={index} className="p-2 border border-gray-200">
                {row.fulfillment}
              </td>
            ))}
          </tr>
          <tr>
            <th className="table-heading">Advertising Fees</th>
            {data.map((row, index) => (
              <td key={index} className="p-2 border border-gray-200">
                {row.advertisingFees}
              </td>
            ))}
          </tr>
          <tr>
            <th className="table-heading">Inventory Fees</th>
            {data.map((row, index) => (
              <td key={index} className="p-2 border border-gray-200">
                {row.inventoryFees}
              </td>
            ))}
          </tr>
          <tr>
            <th className="table-heading">Profit</th>
            {data.map((row, index) => (
              <td key={index} className="p-2 border border-gray-200">
                <span>{row.profit}</span>
                <span
                  className={`ml-2 text-sm ${
                    row.profitTrend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {row.profitChange} {row.profitTrend === "up" ? "↑" : "↓"}
                </span>
              </td>
            ))}
          </tr>
          <tr>
            <th className="table-heading">Units Sold</th>
            {data.map((row, index) => (
              <td key={index} className="p-2 border border-gray-200">
                {row.unitsSold}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransposedTable;
