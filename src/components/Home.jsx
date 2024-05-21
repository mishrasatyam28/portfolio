import React from "react";
import HeroImage from "../assets/heroImageCompress.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoDownloadOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// social links
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/satyam-mishra-4220a721a/",
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/mishrasatyam28",
    },
    {
      id: 3,
      child: <HiOutlineMail size={30} />,
      href: "mailto:satyamsumit8750@gmail.com",
    },
    {
      id: 4,
      child: <FaInstagram size={30} />,
      href: "https://www.instagram.com/iamsatyam28/",
    },
  ];
  const [text] = useTypewriter({
    words: ["Developer", "Editor", "Designer", "Coder!"],
    loop: Infinity,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  max-[500px]:h-screen "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row  ">
        <div className="flex flex-col justify-center h-full  ">
          <h3 className="text-4xl sm:text-7xl font-bold text-white max-[500px]:text-4xl max-[500px]:pt-6">
            I am
          </h3>
          <h2 className="text-4xl sm:text-7xl font-bold text-white max-[500px]:text-4xl max-[500px]:pt-4 ">
            {text}
            <Cursor cursorColor="#508CE8" />
          </h2>
          <p className="text-gray-500 py-4 max-w-md max-[500px]:py-1 ">
            I have good knowledge of building and designing web application.
            Currently, I love to work on web application using technologies like
            React, Tailwind and Nodejs.
          </p>
          {/* Social links */}
          <div className="lg:hidden">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="inline-block text-white m-2 hover:scale-150 duration-200"
                target="_blank"
                rel="noreferrer"
              >
                {link.child}
              </a>
            ))}
          </div>
          <div className="flex gap-10">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer   "
            >
              Portfolio
              <span className="group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="mt-1" />
              </span>
            </Link>
            <a
              href="https://drive.google.com/file/d/13riLU8z-9iEWRL3Vm_rnhjwdUYgdZ-PD/view?usp=sharing"
              target="_blank"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer   "
            >
              Resume
              <span className="group-hover:rotate-90">
                <IoDownloadOutline size={20} className="-mt-1" />
              </span>
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-bl from-blue-800 via-blue-400 to-blue-600  max-w-80  rounded-2xl md:w-full max-[500px]:w-2/3 max-[500px]:-mt-8 lg:ml-20 md:ml-6 hover:scale-110 duration-700">
          <img
            className="rounded-2xl mx-auto hover:scale-100 duration-700"
            src={HeroImage}
            alt="my-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
