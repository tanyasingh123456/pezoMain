import React from "react";
import ColorToggle from "../printSetting/ColorToggle";
import PagesInput from "../printSetting/PagesInput";
import PaperSizeSelect from "../printSetting/PaperSizeSelect";

const CombinePages = () => {
  return (
    <div className="space-y-4">
      <ColorToggle />
      <PaperSizeSelect />
      <PagesInput />
    </div>
  );
};

export default CombinePages;
