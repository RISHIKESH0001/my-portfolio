import React from "react";
import AnimatedTitle from "../../utils/home-left";
import CylindricalSlider from "../../utils/home-right";

const Home = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center w-full min-h-[75vh] bg-gradient-to-br from-yellow-900 to-white-900 overflow-hidden">
      {/* Left Section - Animated Title (flush left) */}
      <div className="w-full lg:w-1/2 flex items-center justify-start z-10 ">
        <div className="max-w-2xl w-full">
          <AnimatedTitle />
        </div>
      </div>
      
      {/* Right Section - 3D Slider */}
      <div className="w-full lg:w-1/2 flex items-center justify-center z-10 py-6 lg:py-0 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-xl">
          <CylindricalSlider />
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
      </div>
    </div>
  );
};

export default React.memo(Home);