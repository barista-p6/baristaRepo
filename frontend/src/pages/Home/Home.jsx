import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import SliderComponent from './SliderComponent';
import Footer from "../../components/Footer";

const HomePage = () => {
  const [currentSlideNew, setCurrentSlideNew] = useState(0);
  const newProducts = [
    {
      name: "New Product 1",
      images: [], // Add actual images here
    },
  ];

  useEffect(() => {
    const timerNew = setInterval(() => {
      setCurrentSlideNew((prevSlide) => (prevSlide + 1) % newProducts.length);
    }, 5000);

    return () => {
      clearInterval(timerNew);
    };
  }, [newProducts.length]);

  const handleSlideChange = (direction) => {
    setCurrentSlideNew((prevSlide) =>
      direction === "next"
        ? (prevSlide + 1) % newProducts.length
        : (prevSlide - 1 + newProducts.length) % newProducts.length
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen">
        {/* Main content */}
        <main className="flex flex-grow relative overflow-hidden mt-25">
          {/* New Sliding Images */}
          <div className="flex">
            <div className="relative flex overflow-hidden">
              <SliderComponent />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
