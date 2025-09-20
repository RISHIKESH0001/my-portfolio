import { useState, useEffect } from 'react';

export default function AnimatedTitle() {
  const titles = ["websites", "apps", "experiences", "solutions", "results"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => 
        prevIndex === titles.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="flex min-h-screen items-center px-6 justify-center bg-gradient-to-br from-indigo-900 to-purple-800">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-white">
          I create{" "}
          <span className="inline-block">
            <span className="
              transition-all duration-500 ease-in-out 
              text-white 
              font-black 
              text-6xl 
              tracking-tight 
              border-b-4 
              border-yellow-400 
              pb-2
              drop-shadow-lg
              transform 
              hover:scale-105
              relative
              before:content-['']
              before:absolute
              before:-bottom-1
              before:left-0
              before:w-full
              before:h-2
              before:bg-yellow-500
              before:opacity-30
              before:blur-sm
              before:animate-pulse
            ">
              {titles[currentTitleIndex]}
            </span>
          </span>
        </h1>
        <p className="mt-6 text-xl text-indigo-200 font-medium">
          Crafting digital excellence that inspires
        </p>
      </div>
    </div>
  );
}