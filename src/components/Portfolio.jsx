import React from "react";
import cryptoTracker from "../assets/portfolio/CryptoTracker.png";
import loruki from "../assets/portfolio/Loruki.png";
import myPortfolio from "../assets/portfolio/Portfolio.png";
import satyamRestro from "../assets/portfolio/Satyam-restro.png";
import shoppingCart from "../assets/portfolio/ShoppingCart.png";
import todoImage from "../assets/portfolio/TodoImage.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: cryptoTracker,
      demo: "https://dekhocryptotracker.netlify.app/",
      code: "https://github.com/mishrasatyam28/react-crypto-app",
    },
    {
      id: 2,
      src: loruki,
      demo: "https://loruki-cloud-hoisting.netlify.app/",
      code: "https://github.com/mishrasatyam28/loruki-website",
    },
    {
      id: 3,
      src: myPortfolio,
      demo: "https://satyammishra28.netlify.app/",
      code: "https://github.com/mishrasatyam28/portfolio",
    },
    {
      id: 4,
      src: satyamRestro,
      demo: "https://satyam-restro.netlify.app/",
      code: "https://github.com/mishrasatyam28/Food-Website",
    },
    {
      id: 5,
      src: shoppingCart,
      demo: "https://github.com/mishrasatyam28/chai-aur-react",
      code: "https://github.com/mishrasatyam28/chai-aur-react",
    },
    {
      id: 6,
      src: todoImage,
      demo: "https://github.com/mishrasatyam28/chai-aur-react",
      code: "https://github.com/mishrasatyam28/chai-aur-react",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        {/* card */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                key={id}
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div key={id} className="flex items-center justify-center ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target={"blank"} rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target={"blank"}>
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
