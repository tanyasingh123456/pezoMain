import React, { useState } from "react";

const ColorToggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="w-full border border-[#E5E7EB] rounded-lg p-4 bg-card">
      <div className="flex items-center justify-between">
        {/* Label Section */}
        <div>
          {isOn ? (
            <div className="text-sm font-medium text-foreground">
              Black & White
              <br />
              <span className="text-xs text-muted-foreground">
                (₹5 per page)
              </span>
            </div>
          ) : (
            <div className="text-sm font-medium text-foreground">
              Color
              <br />
              <span className="text-xs text-muted-foreground">
                (₹10 per page)
              </span>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <div
          onClick={() => setIsOn(!isOn)}
          className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            isOn ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              isOn ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ColorToggle;
