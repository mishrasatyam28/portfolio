import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white max-[500px]:h-full"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-gray-500 ">
            Contact{" "}
          </p>
          <p className="py-6">Submit the form below to get in touch with me </p>
        </div>
        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name "
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email "
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
      {/* mine */}
      <div className="flex flex-col p-4 justify-center max-w-screen-sm mx-auto h-full lg:max-w-screen-lg ">
        <div className="grid grid-cols-1  p-4  lg:flex lg:justify-center ">
          <article className="flex flex-col items-center justify-cent mb-4 p-4 gap-1 rounded-lg  lg:mx-auto shadow-md hover:scale-105 duration-500 shadow-red-400">
            <MdOutlineMail size={30} />
            <h4>Email</h4>
            <h5>satyammishra.work@gmail.com</h5>
            <a
              href="mailto:satyammishra.work@gmail.com"
              target="_blank"
              className="p-2 mt-2 hover:border-2 hover:border-cyan-400 rounded-md"
            >
              Send a message
            </a>
          </article>
          <article className="flex flex-col  items-center justify-cent mb-4 p-4 gap-1 rounded-lg  lg:mx-auto shadow-md hover:scale-105 duration-500 shadow-gray-400">
            <AiFillGithub size={30} />
            <h4>Github</h4>
            <h5>satyammishra.work@gmail.com</h5>
            <a
              href="https://github.com/mishrasatyam28"
              target="_blank "
              className="p-2 mt-2 hover:border-2 hover:border-cyan-400 rounded-md"
            >
              Check projects
            </a>
          </article>
          <article className="flex flex-col items-center justify-cent mb-4 p-4 gap-1 rounded-lg  lg:mx-auto shadow-md hover:scale-105 duration-500 shadow-green-400">
            <BsWhatsapp size={30} />
            <h4>WhatsApp</h4>
            <h5>satyammishra.work@gmail.com</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8130308421"
              target="_blank"
              className="p-2 mt-2 hover:border-2 hover:border-cyan-400 rounded-md"
            >
              Send a message
            </a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Contact;
