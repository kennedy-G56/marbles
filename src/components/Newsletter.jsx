import React from "react";
import MarbleBg from "../assets/marbles2/marblebg.jpeg";

const Newsletter = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${MarbleBg})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container mx-auto px-6 md:px-12 flex justify-end">
        {/* RIGHT SIDE CONTENT BLOCK */}
        <div className="w-full md:w-[45%] text-white space-y-4">

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Get more discount <br /> Off your order
          </h2>

          <p className="text-sm opacity-90">Join our mailing list</p>

          {/* INPUT + BUTTON MATCHES TEACHER STYLE */}
          <div className="flex items-center gap-3 mt-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-[260px] md:w-[300px] px-4 py-3 rounded-md text-gray-700 bg-white focus:outline-none shadow-md"
            />

            <button className="px-4 py-3 bg-[#1C1C1E] text-white rounded-md font-semibold text-sm hover:bg-black transition">
              Shop Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
