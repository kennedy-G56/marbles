import React from "react";
import FeaturesImage from "../assets/features/features.png.jpeg";

const Features = () => {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-start gap-12">
        
        {/* LEFT — IMAGE */}
        <div className="md:w-1/2">
          <img
            src={FeaturesImage}
            alt="Luxury marble interior"
            className="rounded-xl w-full h-auto object-cover shadow-md"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="md:w-1/2 space-y-6 self-start">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Crafting Timeless Spaces <br /> with the Beauty of Natural Stone
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold text-yellow-500">Oyk/Mabs</span>, we blend creativity,
            craftsmanship, and technology to deliver marble designs that redefine luxury. 
            Each piece is a reflection of elegance, durability, and modern architecture.
          </p>

          <div className="space-y-6">
            
            {/* Bullet 1 */}
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 
              flex items-center justify-center mt-1 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={3} stroke="white" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Premium Stone Selection</h4>
                <p className="text-gray-500 text-sm">
                  We source only the highest-grade marble and onyx from world-renowned quarries.
                </p>
              </div>
            </div>

            {/* Bullet 2 */}
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-md 
              flex items-center justify-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={3} stroke="white" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Precision Design & Installation</h4>
                <p className="text-gray-500 text-sm">
                  Our artisans use cutting-edge tools and attention to detail from concept to completion.
                </p>
              </div>
            </div>

            {/* Bullet 3 */}
            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 
              flex items-center justify-center mt-1 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={3} stroke="white" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-lg">Sustainable Craftsmanship</h4>
                <p className="text-gray-500 text-sm">
                  Responsible sourcing and eco-friendly methods for long-lasting beauty.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
