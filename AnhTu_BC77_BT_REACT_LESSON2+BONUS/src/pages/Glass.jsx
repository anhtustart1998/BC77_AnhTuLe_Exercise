import React, { useState } from "react";

export const GlassesTryOn = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const glasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  const frameWrapperStyles = {
    position: "absolute",
    width: "60%",
    top: "19%",
    left: "20%",
    transition: "all 0.3s ease",
    mixBlendMode: "multiply",
    opacity: 0.8,
  };

  const lensStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background: "rgba(240, 230, 220, 0.2)",
    mixBlendMode: "screen",
    pointerEvents: "none",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
          TRY GLASSES APP ONLINE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Image - With Glasses */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="aspect-square relative overflow-hidden">
              <img
                src="./glassesImage/model.jpg"
                alt="Model with glasses"
                className="w-full h-full object-cover rounded-lg"
              />
              {selectedGlasses && (
                <div style={frameWrapperStyles}>
                  <img
                    src={selectedGlasses.url}
                    alt={selectedGlasses.name}
                    className="w-full h-auto relative z-10"
                  />
                  <div style={lensStyles} />
                </div>
              )}

              {selectedGlasses && (
                <div className="absolute bottom-0 left-0 right-0 bg-orange-200/90 p-4 backdrop-blur-sm">
                  <h3 className="font-bold text-lg">{selectedGlasses.name}</h3>
                  <p className="text-sm text-gray-700">
                    {selectedGlasses.desc}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Image - Without Glasses */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="aspect-square relative overflow-hidden">
              <img
                src="./glassesImage/model.jpg"
                alt="Model without glasses"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Glasses Selection Grid */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {glasses.map((glass) => (
              <button
                key={glass.id}
                onClick={() => setSelectedGlasses(glass)}
                className={`relative border-2 p-2 rounded-lg transition-all duration-200 ${
                  selectedGlasses?.id === glass.id
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <img
                  src={glass.url}
                  alt={glass.name}
                  className="w-full h-auto"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
