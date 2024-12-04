import React from "react";

export const Hero = () => {
  return (
    <section className="relative pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white text-center">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Helicopter World
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
            A helicopter is more than a machine; it's a marvel of engineering
            that takes you beyond limits, soaring where no roads lead and no
            paths exist.
          </p>
        </div>
      </div>
    </section>
  );
};
