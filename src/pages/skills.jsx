import { useContext } from "react";
import { DarkMode } from "../context/darkModeContext";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Tilt } from "react-tilt";
const SkillsPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const defaultOptions = {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
    scale: 1.1,
  };

  return (
    <div className="w-full flex flex-col">
      <Fade left duration={1000} delay={500}>
        <div className="w-full flex justify-center items-center mb-10">
          <h1
            className={`relative text-3xl max-sm:mb-10 ${
              isDarkMode ? "text-white" : "text-black"
            } font-poppins font-semibold text-shadow-md after:absolute after:-bottom-2 after:left-0 after:w-14 after:h-1 after:bg-amber-400`}
          >
            Skills
          </h1>
        </div>
      </Fade>
      <Zoom duration={1000} delay={500}>
        <div className="w-full flex flex-wrap justify-center p-3 gap-10">
          <Tilt
            options={defaultOptions}
            className="hover:scale-[1.05] transition-transform duration-300 ease-out"
          >
            <div className="relative w-60 h-60 shadow-neor gap-5 bg-dev bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center p-3 after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-black/50 after:rounded-neo">
              <h1 className="text-xl text-white z-10 ">Web Development</h1>
              <button
                className="z-10 text-base font-poppins py-1 px-3 bg-orange-300 hover:bg-lime-300 active:bg-cyan-500 active:border-2 active:border-red-500 rounded-md text-white"
                onClick={() => (window.location.href = "/skills/web-developer")}
              >
                Details
              </button>
            </div>
          </Tilt>
          <Tilt
            options={defaultOptions}
            className="hover:scale-[1.05] transition-transform duration-300 ease-out"
          >
            <div className="relative w-60 h-60 shadow-neor gap-5 bg-net bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center p-3 after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-black/50 after:rounded-neo">
              <h1 className="text-xl text-white z-10">Network Engineering</h1>
              <button className="z-10 text-base font-poppins py-1 px-3 bg-orange-300 hover:bg-lime-300 active:bg-cyan-500 active:border-2 active:border-red-500 rounded-md text-white">
                Details
              </button>
            </div>
          </Tilt>
        </div>
      </Zoom>
    </div>
  );
};

export default SkillsPage;
