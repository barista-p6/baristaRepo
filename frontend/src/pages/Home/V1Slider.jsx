import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

import HoneyBg from "../../assets/honeybg.webp";
import HoneyMain from "../../assets/honeys.webp";

import Navbar from "../../components/Navbar";
import SliderComponent from './SliderComponent';

import Footer from "../../components/Footer";
import SliderComponents from "./SliderComponents";

const V1Slider = () => {
  const [currentSlideOld, setCurrentSlideOld] = useState(0);
  const [currentSlideNew, setCurrentSlideNew] = useState(0);
  const [activeSlider, setActiveSlider] = useState("old"); // Track active slider

  const oldProducts = [
   
    {
      name: "Honey Syrup",
      images: [HoneyBg, HoneyMain],
    },
  
  ];

  const newProducts = [
    {
      name: "New Product 1",
      images: [HoneyBg, HoneyMain],
    },

  ];

  useEffect(() => {
 

    const timerNew = setInterval(() => {
      if (activeSlider === "new") {
        setCurrentSlideNew((prevSlide) => (prevSlide + 1) % newProducts.length);
      }
    }, 5000);

    return () => {
      clearInterval(timerNew);
    };
  }, [activeSlider, oldProducts.length, newProducts.length]);

 

  const handleSlideChange = (direction) => {
    if (activeSlider === "old") {
      setCurrentSlideOld((prevSlide) =>
        direction === "next"
          ? (prevSlide + 1) % oldProducts.length
          : (prevSlide - 1 + oldProducts.length) % oldProducts.length
      );
    } else {
      setCurrentSlideNew((prevSlide) =>
        direction === "next"
          ? (prevSlide + 1) % newProducts.length
          : (prevSlide - 1 + newProducts.length) % newProducts.length
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen">
        {/* Main content */}
        <main className="flex flex-grow relative overflow-hidden mt-25">
          {/* Navigation Arrows */}
          <div className="absolute bottom-8 left-8 flex flex-col items-center justify-center space-y-4 z-20">
          
            <button
              onClick={() => handleSliderChange("new")}
              className="p-3 bg-black text-white rounded-full shadow-md transition-transform transform hover:scale-110 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Left side - Description */}
          {activeSlider === "old" && (
            <div className="w-1/3 p-8 flex flex-col justify-center fixed top-0 left-0 bottom-0 bg-black-700 z-10 ">
              <h2 className="text-4xl font-bold mb-4">
                The latest flavours from our collection.
              </h2>
              <p className="mb-6 text-gray-100">
                As spring starts to bloom, 1883 offers you a selection of
                products with sunny notes and unparalleled intensity. Hibiscus,
                Pumpkin Pie or Redcurrant – discover seasonal floral and natural
                flavours to take your creations to the next level.
              </p>
              <Link
                to="/collection"
                className="flex items-center text-lg font-semibold"
              >
                DISCOVER THE ENTIRE COLLECTION
                <ChevronRight className="ml-2" />
              </Link>
            </div>
          )}

          {/* Old Sliding Images */}
          {activeSlider === "old" && (
            <div
              className="ml-1/3 flex flex-grow transition-transform duration-500 ease-in-out relative"
              style={{ transform: `translateX(-${currentSlideOld * 100}%)` }}
            >
              {oldProducts.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-full h-full flex">
                  <div className="relative w-full h-full flex">
                    {product.images.length > 1 && (
                      <img
                        src={product.images[0]}
                        alt={`${product.name} background`}
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    )}
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* الصورة الخلفية */}
                      <img
                        src={product.images[0]}
                        alt={`${product.name} background`}
                        className="absolute "
                        style={{ zIndex: -1 }}
                      />

                      {/* الصورة الأمامية */}
                      <img
                        src={product.images[1]}
                        alt={product.name}
                        className="object-contain"
                        style={{ maxWidth: "50%", maxHeight: "80%" }}
                      />

                      {/* النص */}
                    </div>
                    <div className="absolute inset-0 flex flex-col">
                      {oldProducts.map((p, i) => (
                        <div key={i} className="flex-1 relative w-full h-full">
                       
                     
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* New Sliding Images */}
          {activeSlider === "new" && (
            <div className="flex">
        



            <div className="relative flex overflow-hidden">
            <SliderComponent />
            
            </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default V1Slider  ;