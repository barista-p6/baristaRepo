import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styleshome.css";

const SliderComponents = () => {
  const [activeItem, setActiveItem] = useState(0);

  const items = [
    {
      img: "https://www.1883.com/app/uploads/2024/06/BLUE-LAGOON_COCKTAIL-SEUL-682x1024.jpg",
      title: "BLUE LAGOON",
      description:
        "Vibrant and sweet blue curacao syrup offers the taste of fresh curacao accompanied",
      category: "Mojito",
    },
    {
      img: "https://www.1883.com/app/uploads/2024/08/CRANBERRY-TONIC-683x1024.jpg",
      title: "CRANBERRY TONIC",
      description:
        "A refreshingly fruity and tangy long drink with a faintly bitter edge. ",
      category: "Mojito",
    },
    {
      img: "https://www.1883.com/app/uploads/2024/06/MOJITO-1-682x1024.jpg",
      title: "MOJITO lemon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?",
      category: "Mojito",
    },
    {
      img: "https://www.1883.com/app/uploads/2024/08/FROZEN-SILK-CRANBERRY-683x1024.jpg",
      title: "FROZEN SILK CRANBERRY",
      description:
        "A fresh, tangy cloud of freshness that enhances this invigorating little red berry.",
      category: "Mojito",
    },
    {
      img: "https://www.1883.com/app/uploads/2021/05/roasted-clafoutis.jpg",
      title: "PAPA DOBLE",
      description: "Slice of dehydrated orange",
      category: "Mojito",
    },
  ];

  const countItem = items.length;

  const nextSlide = () => {
    setActiveItem((prev) => (prev + 1) % countItem);
  };

  // const prevSlide = () => {
  //   setActiveItem((prev) => (prev - 1 + countItem) % countItem);
  // };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <header></header>

      <div className="slider">
        <div className="list">
          {items.map((item, index) => (
            <div
              className={`item ${index === activeItem ? "active" : ""}`}
              key={index}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", height: "100%", objectFit: "scale-down" }}
              />
              <div className="content">
                <p>{item.category}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="arrows">
                    <button id="prev" onClick={prevSlide}>&lt;</button>
                    <button id="next" onClick={nextSlide}>&gt;</button>
                </div> */}

        <div className="thumbnail">
          {items.map((item, index) => (
            <div
              className={`item ${index === activeItem ? "active" : ""}`}
              key={index}
              onClick={() => setActiveItem(index)}
            >
              <img src={item.img} alt={item.title} />
              <div className="content"></div>
              <Link to="/market" className=" text-white  font-semibold">
                Discover Market
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderComponents;
