import React from "react";

const PagesInput = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col bg-card border border-[#E5E7EB] rounded-xl shadow-sm p-4 space-y-2">
        <label className="text-sm font-medium text-foreground">
          Pages to Print
        </label>
        <input
          type="text"
          placeholder="e.g., 1-5, 8, 10-12"
          className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 text-foreground"
        />
        <p className="text-xs text-muted-foreground">
          Leave blank for all pages
        </p>
      </div>
    </div>
  );
};

export default PagesInput;
