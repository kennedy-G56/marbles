import React from "react";
import MarblesImage from "../assets/marbles/Mewar.jpeg"; 

const Marbles = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-snug">
              Elevate Your Space <br /> with World-Class Marble
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Experience the timeless beauty of marble — handpicked from 
              the world’s finest quarries. Each slab tells a story of nature’s 
              artistry, crafted to perfection for homes, hotels, and commercial masterpieces.
            </p>
            <div className="space-y-5">
            
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mt-1 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Imported and locally sourced collections with global quality standards.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mt-1 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Available in a wide range of colors, veins, and finishes — tailored to your design vision.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mt-1 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Expertly polished and sealed to ensure long-lasting beauty and strength.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src={MarblesImage}
              alt="Luxury marble collection"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"/>
           
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marbles;
