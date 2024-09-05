import { useContext } from "react";
import { DarkMode } from "../context/darkModeContext";
import Portfolio from "../data/portfolio";
import { Tilt } from "react-tilt";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import { useEffect } from "react";
const PortfolioPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [data, setData] = useState([]);

  const defaultOptions = {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
    scale: 1.1,
  };

  useEffect(() => {
    setData(Portfolio);
  }, []);
  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="w-full flex justify-center">
        <Fade left>
          <h1
            className={`relative text-3xl max-sm:mb-10 ${
              isDarkMode ? "text-white" : "text-black"
            } font-poppins font-semibold text-shadow-md after:absolute after:-bottom-2 after:left-0 after:w-20 after:h-1 after:bg-amber-400`}
          >
            Portfolio
          </h1>
        </Fade>
      </div>
      <div className="w-full flex flex-wrap p-3">
        <Zoom>
          {data.length > 0 &&
            data.map((d) => {
              return (
                <div className="p-3 h-auto my-5">
                  <a
                    href={d.link}
                    target="_blank"
                    className="text-2xl font-poppins text-lime-500 font-medium hover:underline"
                  >
                    <span>
                      <i className="fa-solid fa-caret-right"></i>
                    </span>{" "}
                    {d.name}
                  </a>
                  <a href={d.link} target="_blank">
                    <Tilt
                      options={defaultOptions}
                      className="hover:scale-[1.05] transition-transform duration-300 ease-out"
                    >
                      <div className="shadow-neor w-auto ml-5 max-sm:ml-0 mt-6">
                        <img src={d.img} className="rounded-neo" alt="" />
                      </div>
                    </Tilt>
                  </a>
                </div>
              );
            })}
        </Zoom>
      </div>
    </div>
  );
};

export default PortfolioPage;
