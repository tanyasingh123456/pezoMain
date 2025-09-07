import React from "react";

const PaperSizeSelect = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4">
      {/* Paper Size */}
      <div className="flex flex-col bg-card border border-[#E5E7EB] rounded-xl shadow-sm p-4 flex-1 space-y-2">
        <label className="text-sm font-medium text-foreground">
          Paper Size
        </label>
        <select className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 bg-muted text-foreground ">
          <option value="A4">A4</option>
          <option value="Letter">Letter</option>
          <option value="Legal">Legal</option>
        </select>
      </div>

      {/* Paper Type */}
      <div className="flex flex-col bg-card border border-[#E5E7EB] rounded-xl shadow-sm p-4 flex-1 space-y-2">
        <label className="text-sm font-medium text-foreground">
          Paper Type
        </label>
        <select className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 bg-muted text-foreground ">
          <option value="Regular (80 GSM)">Regular (80 GSM)</option>
          <option value="Premium (120 GSM)">Premium (120 GSM)</option>
          <option value="Glossy">Glossy</option>
        </select>
      </div>
    </div>
  );
};

export default PaperSizeSelect;
