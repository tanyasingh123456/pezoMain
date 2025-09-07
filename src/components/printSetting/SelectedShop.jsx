import React from "react";
import icon1 from "../../assets/i(4).png";
import { FaMapMarkerAlt } from "react-icons/fa";

const SelectedShop = () => {
  return (
    <div className="w-full space-y-2">
      <label className="block text-sm font-medium text-foreground">
        Selected Shop
      </label>

      <div className="border border-dashed border border-[#E5E7EB] rounded-lg flex flex-col items-center justify-center p-6 bg-card ">
        <img src={icon1} alt="icon1" className="w-8 h-8 mb-2" />
        <p className="text-sm text-muted-foreground mb-3 ">No shop selected</p>
        <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg transition bg-gradient-to-r from-[#1976D2] to-[#1E88E5] text-white ">
          <FaMapMarkerAlt />
          Select Shop
        </button>
      </div>
    </div>
  );
};

export default SelectedShop;
