import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import marble1 from "../assets/products/marble1.jpeg";
import marble2 from "../assets/products/marble2.jpeg";
import marble3 from "../assets/products/marble3.jpeg";
import marble4 from "../assets/products/marble4.jpeg";
import marble5 from "../assets/products/marble5.jpeg";
import marble6 from "../assets/products/marble6.jpeg";
import marble7 from "../assets/products/marble7.jpeg";
import marble8 from "../assets/products/marble8.jpeg";
import marble9 from "../assets/products/marble9.jpeg";
import marble10 from "../assets/products/marble10.jpeg";
import marble11 from "../assets/products/marble11.jpeg";
import marble12 from "../assets/products/marble12.jpeg";
import marble13 from "../assets/products/marble13.jpeg";
import marble14 from "../assets/products/marble14.jpeg";
import marble15 from "../assets/products/marble15.jpeg";
import marble16 from "../assets/products/marble16.jpeg";
import marble17 from "../assets/products/marble17.jpeg";
import marble18 from "../assets/products/marble18.jpeg";
import marble19 from "../assets/products/marble19.jpeg";
import marble20 from "../assets/products/marble20.jpeg";

const products = [
  { id: 1, name: "Continental Carrara", price: "$50-90/p-sq.m", img: marble1 },
  { id: 2, name: "Dark Emperador+Calacatta Gold", price: "$180-250/p-sq.m", img: marble2 },
  { id: 3, name: "Calacatta Oro (Gold Vein)", price: "$240-350/p-sq.m", img: marble3 },
  { id: 4, name: "Cream Onyx+Blue Onyx", price: "$350-500/p-sq.m", img: marble4 },
  { id: 5, name: "Calacatta Blue and Gold", price: "$450-700/p-sq.m", img: marble5 },
  { id: 6, name: "Pietra Grey+Silver Cloud+Carrar Silver", price: "$180-320/p-sq.m", img: marble6 },
  { id: 7, name: "Blue Onyx", price: "$350-500/p-sq.m", img: marble7 },
  { id: 8, name: "Statuario Oro", price: "$300-420/p-sq.m", img: marble8 },
  { id: 9, name: "Ash Grey+Cream Beige+Silver Shadow", price: "$130-450/p-sq.m", img: marble9 },
  { id: 10, name: "Brown Cloud Onyx", price: "$280-500/p-sq.m", img: marble10 },
  { id: 11, name: "Emper Ador Light", price: "$85-110/p-sq.m", img: marble11 },
  { id: 12, name: "Silver Wave", price: "$100-130/p-sq.m", img: marble12 },
  { id: 13, name: "Colonial White", price: "$85-110/p-sq.m", img: marble13 },
  { id: 14, name: "Sunsill Pet", price: "$90-130/p-sq.m", img: marble14 },
  { id: 15, name: "Natural Grenite", price: "$65-90/p-sq.m", img: marble15 },
  { id: 16, name: "Blue Quartzite", price: "$400-600", img: marble16 },
  { id: 17, name: "Bookmarched Calacatta", price: "$450-700", img: marble17 },
  { id: 18, name: "Golden Onyx", price: "$150-350/p-sq.m", img: marble18 },
  { id: 19, name: "Honey Onyx", price: "$110-370/p-sq.m", img: marble19 },
  { id: 20, name: "Blue Savoy+Calacatta Gold+Arabescato", price: "$60-180/p-sq.m", img: marble20 },
];

const Products = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white text-gray-800 py-24 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Our Marble Collection
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Premium quality marble selections to elevate your interior and architectural design.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // FIX ARROWS NOT WORKING
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        modules={[Pagination, Navigation]}
        className="pb-10"
      >
        {Array.from({ length: Math.ceil(products.length / 8) }).map((_, i) => {
          const chunk = products.slice(i * 8, i * 8 + 8);
          return (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {chunk.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                {chunk.slice(4, 8).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* ARROWS + DOTS TOGETHER (CLOSER) */}
      <div className="flex justify-center items-center gap-1 mt-4">
        <button
          ref={prevRef}
          className="w-7 h-7 flex items-center justify-center rounded-full shadow bg-white hover:bg-sky-300 text-lg"
        >
          ←
        </button>

        <div className="swiper-pagination !w-auto !flex !gap-1"></div>

        <button
          ref={nextRef}
          className="w-7 h-7 flex items-center justify-center rounded-full shadow bg-white hover:bg-sky-300 text-lg"
        >
          →
        </button>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => (
  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="relative">
      <img
        src={product.img}
        alt={product.name}
        className="h-64 w-full object-cover rounded-t-2xl"
      />
      <button className="absolute bottom-3 right-3 bg-white shadow-md hover:bg-gray-100
        text-gray-600 w-5 h-5 flex items-center justify-center rounded-full text-xl font-bold">
        +
      </button>
    </div>

    <div className="p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
      <p className="text-green-600 font-semibold text-sm">{product.price}</p>
    </div>
  </div>
);

export default Products;
