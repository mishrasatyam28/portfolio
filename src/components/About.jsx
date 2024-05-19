import React from "react";
import CountUp from "react-countup";

const About = () => {
  const stats = [
    {
      num: 20,
      text: "Projects completed",
    },
    {
      num: 10,
      text: "Technologies mastered",
    },
    {
      num: 200,
      text: "code commits",
    },
  ];
  return (
    <div
      name="about"
      // h-screen->h-full
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white max-[500px]:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          As a Web developer based in Delhi, I thrive on creating innovative and
          user-friendly digital experiences. With a passion for transforming
          ideas into seamless online solutions, I specialize in front-end
          development and responsive design. My commitment to staying at the
          forefront of technology ensures that I deliver cutting-edge websites
          tailored to meet the unique needs of my clients.
        </p>
        <br />
        <p className="text-xl">
          In the dynamic realm of web development, I bring a versatile skill set
          encompassing HTML, CSS, JavaScript, and various frameworks. Leveraging
          my creativity and technical proficiency, I collaborate closely with
          clients to understand their vision and translate it into visually
          captivating and functionally robust websites. With a keen eye for
          detail and a dedication to staying abreast of industry trends, I
          consistently deliver exceptional digital solutions that leave a
          lasting impact.
        </p>

        <div className="my-8">
          <div className="flex justify-around gap-5 mx-auto p-3 ">
            {stats.map(({ num, text }) => (
              <div key={num} className="text-center">
                <CountUp
                  end={num}
                  duration={2}
                  delay={3}
                  className="text-6xl font-extrabold text-green-600"
                />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
