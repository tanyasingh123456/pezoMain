import React from "react";
import icon from "../../assets/i(2).png";

const Button = () => {
  return (
    <div className="space-y-6">
      <button className="w-full h-12 rounded-xl border border-border bg-gradient-to-r from-[#1976D2] to-[#1E88E5] text-white font-semibold flex items-center justify-center gap-3 transition-all">
        <img src={icon} alt="icon" className="w-6 h-6" />
        <span>Place Order</span>
      </button>
      <div className="text-center">
        <p className="text-sm text-muted-foreground leading-relaxed ">
          By placing your order, you agree to our
          <span className="ml-1">
            <span className="text-[#1E88E5]">Terms</span>
            <span className="text-black"> and </span>
            <span className="text-[#1E88E5]">Privacy Policy</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Button;
