import React from "react";

const OrdersTable = () => {
  const orders = [
    {
      id: "11658",
      price: 526.0,
      total: 526.0,
      status: "Active",
      customer: "Guest",
      date: "25 July, 2024",
    },
    {
      id: "11657",
      price: 238.0,
      total: 238.0,
      status: "Active",
      customer: "Guest",
      date: "25 July, 2024",
    },
    {
      id: "11656",
      price: 209.0,
      total: 209.0,
      status: "Active",
      customer: "Guest",
      date: "25 July, 2024",
    },
    {
      id: "11655",
      price: 920.0,
      total: 920.0,
      status: "Active",
      customer: "Guest",
      date: "25 July, 2024",
    },
    {
      id: "11654",
      price: 1040.0,
      total: 1040.0,
      status: "Active",
      customer: "Guest",
      date: "25 July, 2024",
    },
  ];

  return (
    <div className="w-full sm:pt-[6rem]">
      {/* Desktop and Tablet View */}
      <div className="hidden md:block table_container overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {/* <th className="p-4 text-left">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 accent-blue-400"
                />
              </th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                {/* <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 accent-blue-400"
                  />
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Order# {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${order.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.date}
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-gray-500">
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <PenLine className="w-5 h-5" />
                    </button>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 accent-blue-400"
                />
                <span className="font-medium text-gray-900">
                  Order# {order.id}
                </span>
              </div>
              {/* <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-gray-500">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <PenLine className="w-5 h-5" />
                </button>
              </div> */}
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm text-gray-500">Price:</div>
                <div className="text-sm text-gray-900">
                  ${order.price.toFixed(2)}
                </div>

                <div className="text-sm text-gray-500">Order Total:</div>
                <div className="text-sm text-gray-900">
                  ${order.total.toFixed(2)}
                </div>

                <div className="text-sm text-gray-500">Status:</div>
                <div>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {order.status}
                  </span>
                </div>

                <div className="text-sm text-gray-500">Customer:</div>
                <div className="text-sm text-gray-900">{order.customer}</div>

                <div className="text-sm text-gray-500">Date:</div>
                <div className="text-sm text-gray-900">{order.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersTable;
