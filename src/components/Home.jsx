import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have good knowledge of building and designing web application.
            Currently, I love to work on web application using technologies like
            React, Tailwind and Nodejs.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  ">
              Portfolio
              <span className="group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="mt-1" />
              </span>
            </button>
          </div>
        </div>
        {/* 42 */}
        <div className="bg-gradient-to-bl from-blue-800 via-blue-400 to-blue-600  max-w-80  rounded-2xl md:w-full">
          <img
            className="rounded-2xl mx-auto"
            src={HeroImage}
            alt="my-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
