import { useState, useEffect, useContext, useRef } from "react";
import { DarkMode } from "../context/darkModeContext";
import NavbarPages from "../component/fragment/navbar";
import { Typewriter } from "react-simple-typewriter";
import { Tilt } from "react-tilt";
import AboutPage from "./about";
import Fade from "react-reveal/Fade";
import SkillsPage from "./skills";

const HomePages = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    speed: 1000,
    transition: true,
  };

  return (
    <div
      className={`w-full ${isDarkMode ? "bg-slate-700" : "bg-sky-100"}`}
      style={{ minHeight: "3000px" }}
    >
      <NavbarPages aboutRef={aboutRef} skillsRef={skillsRef}></NavbarPages>
      <div
        className={`relative w-full min-h-screen bg-bgjar bg-fixed bg-center bg-no-repeat bg-cover after:absolute after:-bottom-4 after:left-0 after:right-0 after:h-10 after:bg-gradient-to-b ${
          isDarkMode
            ? "after:from-slate-400/25 after:to-slate-700"
            : "after:from-white/25 after:to-sky-100"
        }`}
      >
        {/* Overlay hitam dengan opacity */}
        <div
          className={`absolute inset-0 bg-slate-900 ${
            isDarkMode ? "opacity-80" : "opacity-40"
          }`}
        ></div>

        {/* Konten Anda */}
        <div className="relative z-10 pt-32 max-sm:pt-24 max-sm:flex-col-reverse flex justify-between px-10 max-sm:px-5">
          <Fade left duration={2000}>
            <div className="w-1/2 max-sm:w-full">
              <h1 className="text-5xl max-sm:text-4xl max-sm:mt-5 font-bold mb-3 text-lime-300 font-poppins text-shadow-xl">
                Hi, I'm Aditya
              </h1>
              <div className="text-3xl max-sm:text-2xl font-semibold mb-3 font-poppins">
                <span className="text-red-400 text-shadow-xl">I'm&nbsp;</span>
                <span className="text-white text-shadow-xl">
                  <Typewriter
                    words={["Fullstack Development", "Network Engineer"]}
                    loop={0} // infinite loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </div>
              <p className="text-xl font-poppins text-white w-5/6 mb-10 max-sm:w-full text-shadow-lg">
                To find out more about me, please scroll down or click this
                button
              </p>
              <button className="text-xl font-poppins p-3 bg-orange-300 hover:bg-lime-300 active:bg-cyan-500 active:border-2 active:border-red-500 rounded-lg text-white">
                Learn More
              </button>
            </div>
          </Fade>
          <div className="flex justify-center items-center w-1/2 max-sm:w-full">
            <Tilt
              options={defaultOptions}
              className="hover:scale-[1.05] transition-transform duration-300 ease-out"
            >
              <img src="/img/aditya.png" alt="" className="w-80" />
            </Tilt>
          </div>
        </div>
      </div>
      //
      <div ref={aboutRef} className="mb-32">
        <AboutPage></AboutPage>
      </div>
      <div ref={skillsRef} className="my-20">
        <SkillsPage></SkillsPage>
      </div>
    </div>
  );
};

export default HomePages;
