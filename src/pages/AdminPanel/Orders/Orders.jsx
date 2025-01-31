import React from "react";
import OrdersTable from "./components/OrdersTable";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import Dropdown from "./components/Dropdown";

const Orders = () => {
  const [sortBy, setSortBy] = React.useState("Date");
  return (
    <div className="w-full relative">
      <div className="pb-[3rem] sm:py-[2rem] sm:px-4">
        <div className="space-y-4 md:ml-[12rem] sm:fixed left-0 top-0 w-full bg-white md:max-w-[calc(100%-12rem)] z-20 p-4">
          <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-4">
            <h4 className="heading-2">Orders</h4>
          </div>
          <hr />

          <div className="flex sm:flex-row flex-col sm:items-center gap-3">
            <div className="flex items-center gap-2 p-2 rounded border">
              <Search size={20} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search Order..."
                className="outline-none w-full border-none"
              />
            </div>
            <div className="sm:w-[13rem]">
              <Dropdown
                label="Sort By"
                options={["Date", "Order", "Customer", "Order Status"]}
                onChange={(item) => {
                  setSortBy(item);
                }}
                selected={sortBy}
              />
            </div>
          </div>
        </div>

        <div className="pt-5 px-4 sm:px-0">
          <OrdersTable />
        </div>
        <div className="px-4 flex justify-between gap-4 mt-5">
          <button className="btn1 w-[7rem] bg-white border border-gray-300 hover:bg-gray-200 h-fit">
            <ArrowLeft size={16} />
            Previous
          </button>
          <button className="btn1 w-[7rem] bg-white border border-gray-300 hover:bg-gray-200 h-fit">
            Next
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
