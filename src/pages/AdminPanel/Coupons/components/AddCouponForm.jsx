import React from "react";

const AddCouponForm = ({ onClose }) => {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={submitForm}
      className="grid gap-3 pb-4 max-w-xl sm:pt-[3rem]"
    >
      <div className="flex flex-col">
        <label className="text-sm">New Coupon Code</label>
        <input
          type="text"
          className="p-2 bg-gray-100 rounded outline-none border"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm">Description</label>
        <textarea
          rows="3"
          className="p-2 bg-gray-100 rounded outline-none border"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm">Discount Type</label>
        <input
          type="text"
          className="p-2 bg-gray-100 rounded outline-none border"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm">Usage Limit</label>
        <input
          type="number"
          className="p-2 bg-gray-100 rounded outline-none border"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm">Usage Limit Per User</label>
        <input
          type="number"
          className="p-2 bg-gray-100 rounded outline-none border"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm">Minimum Amount</label>
        <input
          type="number"
          className="p-2 bg-gray-100 rounded outline-none border"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm">Products</label>
        <input
          type="text"
          className="p-2 bg-gray-100 rounded outline-none border"
        />
        <div className="my-3 flex gap-3">
          <button className="btn1 bg-primary text-white hover:bg-primary/90 hover:-translate-y-1">
            Select All
          </button>
          <button className="btn1 bg-gray-300 text-black hover:bg-gray-300/80 hover:-translate-y-1">
            Clear
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm">Expiry Date</label>
        <input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          className="p-2 bg-gray-100 rounded outline-none border"
        />
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          className="w-4 h-4 accent-primary outline-none border mt-[2px]"
        />
        <p className="text-sm">Check this box if you want to automatically apply this coupon.</p>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-3">
        <button className="btn1 bg-primary text-white hover:bg-primary/90 hover:-translate-y-1">
          Submit
        </button>
        <button
          onClick={onClose}
          className="btn1 bg-gray-300 text-black hover:bg-gray-300/80 hover:-translate-y-1"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddCouponForm;
