import React, { useState } from "react";
import { FaTag } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const DiscountCode = () => {
  const [code, setCode] = useState("");
  const [appliedCode, setAppliedCode] = useState(null);

  const handleApply = () => {
    if (code.trim()) {
      setAppliedCode(code.trim().toUpperCase());
      setCode("");
    }
  };

  const handleRemove = () => {
    setAppliedCode(null);
  };

  return (
    <div className="w-full space-y-4">
      {/* Input + Button in same row */}
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Discount code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg bg-background text-foreground min-w-0"
        />
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-[#1E88E5] text-white font-medium rounded-r-lg hover:bg-[#1565C0] transition whitespace-nowrap"
        >
          Apply
        </button>
      </div>

      {/* Applied Code Display */}
      {appliedCode && (
        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-green-700">
          <div className="flex items-center space-x-2">
            <FaTag className="text-green-500" />
            <span className="font-medium">{appliedCode}</span>
          </div>
          <button
            onClick={handleRemove}
            className="ml-2 text-gray-500 hover:text-gray-700 transition"
          >
            <IoMdClose size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DiscountCode;
