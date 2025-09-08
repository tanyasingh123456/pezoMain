import React from "react";
import img2 from "../../assets/img(2).png";

const PrintSmarter = () => {
  return (
    <section className="w-full min-h-[700px] bg-gradient-to-r from-[#EFF6FF] via-[#FFFFFF] to-[#FFFBEB] flex items-center justify-center px-4 sm:px-6 md:px-12 py-12">
      <div className="max-w-[1450px] w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <div className="flex flex-col gap-6 lg:max-w-[50%]">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/60 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#43A047] border border-gray-200"></span>
            <span className="font-inter font-medium text-sm text-gray-700">
              Trusted by 10,000+ users
            </span>
          </div>

          <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-[#1976D2] max-w-full lg:max-w-[450px]">
            Print Smarter. <br /> Pick Up Faster.
          </h1>

          <p className="font-inter font-normal text-base sm:text-lg md:text-[20px] leading-[1.6] text-gray-600 max-w-full lg:max-w-[468px]">
            Upload, pay, and collect your prints in minutes — anywhere near you.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4">
            <button className="w-full sm:w-[186px] h-[58px] rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium">
              Start Printing
            </button>
            <button className="w-full sm:w-[163px] h-[58px] rounded-xl border border-gray-200 bg-white/80 font-medium text-gray-800">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className="w-[95vw] max-w-[650px] flex items-center justify-center bg-white rounded-xl border border-gray-200 p-4
                h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
        >
          <img
            src={img2}
            alt="printer"
            className="w-full max-w-[558px] h-auto rounded-xl border border-gray-200 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PrintSmarter;
