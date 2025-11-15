import React from "react";
import HeroImage from "../assets/hero/hero.jpg";
import Button from "../components/Button";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="relative text-gray-900 h-screen w-full overflow-hidden flex flex-col">

      {/* Background */}
      <img
        src={HeroImage}
        alt="Marble Interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Navbar */}
      <Header />

      {/* Center Hero Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 drop-shadow-lg max-w-3xl">
          Creative Marble Design for Elegant Spaces
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          We craft premium marble interiors that redefine modern living.
        </p>

        <Button label="Shop Now" />
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 w-full flex justify-center px-4 mt-auto mb-6">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 w-full max-w-5xl rounded-[20px] shadow-lg py-8 flex flex-wrap justify-evenly">
          {[
            { num: "7+", label: "Years Experience" },
            { num: "3", label: "Open In The Country" },
            { num: "10k+", label: "Marble Projects" },
            { num: "260+", label: "Unique Designs" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center text-white px-6 border-r border-white/20 last:border-none"
            >
              <h2 className="text-3xl font-bold">{item.num}</h2>
              <p className="text-sm text-gray-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
