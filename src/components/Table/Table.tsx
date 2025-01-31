interface TransposedTableProps<T> {
  data: T[];
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TransposedTable = <T extends Record<string, any>>({
  data,
}: TransposedTableProps<T>) => {
  //

  return (
    <div className="w-full max-h-[400px] max-w-[1200px] relative overflow-auto">
      <table className="w-full text-xs text-black border-[1px] border-[#E7E7E7] border-separate border-spacing-0">
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
