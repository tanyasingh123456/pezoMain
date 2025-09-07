import React from "react";
import CombinePages from "../combinepage/CombinePages";
import DiscountCode from "./DiscountCode";
import Summary from "./Summary";
import Total from "./Total";
import Button from "./Button";
import SelectedShop from "./SelectedShop";

const PrintSetting = () => {
  return (
    <div className="w-full border border-[#E5E7EB] rounded-lg bg-card p-6 space-y-6">
      <div className="space-y-6">
        <h2 className="font-inter font-bold text-lg text-foreground">
          Print Settings
        </h2>
        <CombinePages />
      </div>

      <div className="space-y-6">
        <SelectedShop />
        <DiscountCode />
        <div className="pb-4">
          <Summary />
        </div>
        <Total />
        <Button />
      </div>
    </div>
  );
};

export default PrintSetting;
