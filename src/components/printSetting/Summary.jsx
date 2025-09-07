import React from "react";

const Summary = () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">Subtotal (12 pages)</span>
        <span className="font-medium text-foreground">₹120.00</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">Discount</span>
        <span className="font-medium text-foreground">-₹60.00</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">Subtotal Service Fee</span>
        <span className="font-medium text-foreground">₹10.00</span>
      </div>
    </div>
  );
};

export default Summary;
