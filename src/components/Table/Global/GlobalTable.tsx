import React from "react";

const GlobalTable = () => {
  const data = [
    {
      No: "1",
      StoreEmail: "sdgsnehal@gmail.com",
      Revenue: "5822",
      UnitsSold: "568",
      CostOfGoods: "5852",
      Referral: "258",
      FBAFullfillment: "585",
      Shipping: "455",
      Adv: "8586",
      Promotions: "1455",
      CouponRedemption: "58",
      Storage: "144",
      InboundTransportation: "44545",
      Profit: "44",
      Tacos: "455",
      Noofsku: "25",
      NoofCost: "445",
    },
  ];
  return (
    <div className="w-full max-h-[400px] max-w-[1200px] relative overflow-auto">
      <table className="w-full text-xs border-[1px] border-[#E7E7E7] border-separate border-spacing-0">
        <thead className="sticky top-0 z-20">
          <tr className="bg-gray-100">
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                className="border border-gray-300 px-4 py-2 bg-gray-200 text-left"
              >
                {key}
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
