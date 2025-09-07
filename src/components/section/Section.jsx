import React from "react";
import Print from '../print/Print';
import PrintSetting from '../printSetting/PrintSetting';

const Section = () => {
  return (
    <div className="min-h-screen w-full py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-2 max-w-[1600px] mx-auto w-full">
        <div className="flex-[1.5] w-full">
          <Print />
        </div>

        <div className="w-full lg:w-[460px] xl:w-[560px] 2xl:w-[600px] flex-shrink-0">
          <PrintSetting />
        </div>
      </div>
    </div>
  );
};

export default Section;
