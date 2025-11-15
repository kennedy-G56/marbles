import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Removed Pagination
import "swiper/css";
import "swiper/css/navigation";

import Amber from "../assets/store/Amber.jpeg";
import Beige from "../assets/store/Beige.jpeg";
import Black from "../assets/store/BlackGold.jpeg";
import Marble from "../assets/store/BlackMarble.jpeg";
import Marquina from "../assets/store/BlackMarquina.jpeg";
import Mirage from "../assets/store/BlackMirage.jpeg";
import Onyx from "../assets/store/BlueOnyx.jpeg";
import Calacatta from "../assets/store/CalacattaGold.jpeg";
import Oro from "../assets/store/CalacattaOro.jpeg";
import Fusion from "../assets/store/FusionOnyx.jpeg";
import Panda from "../assets/store/PandaWhite.jpeg";

const Newitems = () => {
  const products = [
    { id: 1, name: "Amber Storm", image: Amber },
    { id: 2, name: "Beige Calacatta", image: Beige },
    { id: 3, name: "Black Gold", image: Black },
    { id: 4, name: "Black Marble Metallic", image: Marble },
    { id: 5, name: "Black Marquina", image: Marquina },
    { id: 6, name: "Black Mirage", image: Mirage },
    { id: 7, name: "Blue Onyx Flow", image: Onyx },
    { id: 8, name: "Calacatta Gold", image: Calacatta },
    { id: 9, name: "Calacatta Oro", image: Oro },
    { id: 10, name: "Fusion Onyx", image: Fusion },
    { id: 11, name: "Panda White", image: Panda },
  ];

  return (
    <section className="bg-white text-gray-900 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">

          {/* Left text section */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">New In Store Now</h2>
            <p className="text-gray-600">
              Get the latest items immediately with promo prices.
            </p>
            <a
              href="#"
              className="text-black font-semibold flex items-center gap-2 hover:text-gray-700"
            >
              Check all <span className="text-lg">→</span>
            </a>
          </div>

          {/* Slider section */}
          <div className="md:col-span-3">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              navigation
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="!pb-4"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="relative group overflow-hidden rounded-md shadow hover:shadow-lg transition-shadow duration-300">
                    <img
                      loading="lazy"
                      src={product.image}
                      alt={product.name}
                      className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-300" />
                    <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black/40 px-2 py-1 rounded">
                      {product.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newitems;
