import React from "react";
import one_img from "./one_img.png";

const Para3 = ({ onOpenChooseTemplates }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 lg:p-8">
      {/* Left image */}
      <div className="flex justify-center w-full lg:w-1/2 mb-8 lg:mb-0">
        <img src={one_img} alt="Developer"className="w-3/4 sm:w-1/2 lg:w-3/4 h-auto object-contain" />
      </div>

      {/* Right cards */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        {/* Clickable div */}
        <div onClick={onOpenChooseTemplates} className="hover:bg-green-400 hover:transition-colors lg:bg-white sm:bg-green-400 shadow-md rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center shadow-3xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"  >
          <h1 className="text-base sm:text-lg md:text-xl font-bold">
            Generate Your Resume
          </h1>
          <p className="text-sm sm:text-base">
            Build an attractive and professional resume easily.
          </p>
        </div>

        <div className="hover:bg-blue-400 hover:transition-colors lg:bg-white sm:bg-blue-400 shadow-md rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center shadow-3xl hover:shadow-2xl transition-shadow duration-300">
          <h1 className="text-base sm:text-lg md:text-xl font-bold">
            Showcase Your Skills
          </h1>
          <p className="text-sm sm:text-base">
            Let your talent shine with an elegant portfolio-style layout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Para3;
