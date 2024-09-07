import { useContext } from "react";
import { DarkMode } from "../context/darkModeContext";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";
import { useState } from "react";
import CommingSoon from "../component/element/comming";
const AboutPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [iscomming, setIsComming] = useState(false);

  return (
    <div className="w-full p-3 min-h-screen">
      <div className="w-full flex justify-around gap-4 max-sm:flex-col">
        <Fade left delay={500}>
          <div className="max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center">
            <img src="/img/grad.png" alt="" className="w-80" />
          </div>
        </Fade>
        <div className="w-1/2 max-sm:w-full flex flex-col h-auto justify-evenly">
          <Fade top delay={500}>
            <h1
              className={`relative text-3xl max-sm:mb-10 ${
                isDarkMode ? "text-white" : "text-black"
              } font-poppins font-semibold text-shadow-md after:absolute after:-bottom-2 after:left-0 after:w-20 after:h-1 after:bg-amber-400`}
            >
              About Me
            </h1>
          </Fade>
          <Fade bottom delay={500}>
            <p
              className={`text-xl font-poppins text-shadow-sm max-sm:mb-20 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              My name is Aditya Ahfazh Firmansyah. I am a student at
              Muhammadiyah University of Ponorogo, majoring in Informatics
              Engineering, and an alumnus of SMKN 1 Kebonsari, majoring in
              Computer and Network Engineering. I am a Full-stack Web Developer,
              Network Engineer, and I am also knowledgeable about Linux
              operating systems.
            </p>
          </Fade>
          <Fade bottom delay={500}>
            <div className="flex max-sm:justify-around gap-3">
              <button
                className="text-lg font-poppins p-3 bg-orange-300 hover:bg-lime-300 active:bg-cyan-500 active:border-2 active:border-red-500 rounded-md text-white"
                onClick={() => setIsComming(true)}
              >
                Hire Me
              </button>
              <a
                href="https://drive.google.com/file/d/1uB270hiP2jwGe_FxRxxuRfpc5asnOZgU/view?usp=drive_link"
                target="_blank"
                className="text-lg font-poppins p-3 border-2 border-orange-300 hover:bg-lime-300 hover:text-slate-50 active:bg-cyan-500 active:border-2 active:border-red-500 rounded-md text-orange-300"
              >
                Download CV
              </a>
            </div>
          </Fade>
        </div>
      </div>
      {iscomming && <CommingSoon setIsComming={setIsComming} />}
    </div>
  );
};

export default AboutPage;
