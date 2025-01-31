interface GlobalTableProps<T> {
  data: T[];
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalTable = <T extends Record<string, any>>({
  data,
}: GlobalTableProps<T>) => {
  if (!data || !data.length) {
    return <div className="p-4 text-gray-500">No data available</div>;
  }
  return (
    <div className="w-full max-h-[400px] max-w-[1200px] relative overflow-auto">
      <table className="w-full text-xs border-[1px] border-[#E7E7E7] border-separate border-spacing-0">
        <thead className="sticky top-0 z-9">
          <tr className="bg-gray-100">
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                className="border border-gray-300 px-4 py-2 bg-gray-200 text-left"
              >
                {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex} className="p-2 border border-gray-200">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GlobalTable;
