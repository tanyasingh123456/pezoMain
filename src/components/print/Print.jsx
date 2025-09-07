import React, { useState } from "react";
import div from "../../assets/div(3).jpg";
import vector from "../../assets/Vector.png";
import italic from "../../assets/i.jpg";
import mark from '../../assets/Vector(5).png';
const Print = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const remove = () => {
    setFile("");
  };

  return (
    <div className="w-full ml-auto w-[300px]">
      <div className="flex flex-col items-center justify-center bg-card p-6 sm:p-8 rounded-lg shadow-xl max-w-4xl mx-auto min-h-[650px]">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground text-center mb-6">
          Upload Your Document
        </h1>
        <div className="w-full max-w-2xl border-1 border-dashed border-blue-400 p-6 sm:p-8 rounded-lg bg-card shadow-sm hover:bg-blue-50/50 transition-colors">
          <div className="flex flex-col items-center justify-center p-6 sm:p-10 cursor-pointer">
            <div className="text-blue-500 text-4xl mb-3">
              <img
                src={div}
                alt="write"
                className="w-10 h-10 sm:w-18 sm:h-18 md:w-26 md:h-26 lg:w-34 lg:h-34 object-contain"
              />
            </div>
            <div>
              <p className="text-foreground font-semibold text-center text-xl">
                Drag & drop your PDF here.
              </p>
            </div>

            <div className="flex items-center justify-center w-full max-w-md mx-auto my-4 px-4">
              <div className="w-20 sm:w-24 h-px bg-gray-300"></div>
              <span className="px-3 text-gray-400 text-sm sm:text-base">
                or
              </span>
              <div className="w-20 sm:w-24 h-px bg-gray-300"></div>
            </div>
            <label className="mt-3 cursor-pointer">
              <input
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="flex items-center gap-2 px-6 sm:px-7 py-3 bg-[#1E88E5E5] text-white rounded-[10px] hover:bg-[#1565C0] transition">
                <img src={vector} alt="icon" className="w-6 h-6" />
                <span>Browse Files</span>
              </div>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 justify-center">
              <span className="w-3 h-3 rounded-full bg-green-600"></span>
              <span>PDF only</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="w-3 h-3 rounded-full bg-green-600"></span>
              <span>Max 25MB</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="w-3 h-3 rounded-full bg-green-600"></span>
              <span>Secure upload</span>
            </div>
          </div>
        </div>

        {file && (
          <div className="mt-6 w-full max-w-2xl bg-gradient-to-r from-blue-50/50 to-orange-50/50 shadow p-4 rounded-md flex items-center gap-4 border">
            <div className="w-16 h-20 rounded-lg border border-border bg-gradient-to-r from-blue-100/50 to-orange-100/50 flex items-center justify-center">
              <img src={italic} alt="italic" className="h-[35px] w-[30px]  " />
            </div>
            <span className="w-6 h-6 mb-17 -ml-6 rounded-full bg-green-600">
              <img src={mark} alt="mark " className="w-4 h-4 ml-1"/>
            </span>

            <div className="flex-1 min-w-0">
              <p
                className="font-medium text-foreground truncate cursor-pointer"
                onClick={() => {
                  console.log(file);
                }}
              >
                {file.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {Math.ceil(file.size / 1024 / 1024)}MB
                <br />
                <span className="text-green-600">Upload Complete</span>
              </p>
              <div className="w-full bg-muted h-2 rounded mt-2">
                <div className="h-2 bg-green-500 rounded w-full"></div>
              </div>
            </div>
            <button
              onClick={remove}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ✖
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Print;
