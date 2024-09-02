import { useContext } from "react";
import { DarkMode } from "../../context/darkModeContext";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Tilt } from "react-tilt";
const SkillEach = (props) => {
  const { data, title } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div className="w-full flex flex-col p-5">
      <Fade bottom>
        <h2
          className={`text-xl font-medium font-poppins mb-5 ${
            isDarkMode && "text-white"
          }`}
        >
          {title}
        </h2>
      </Fade>
      <div className="w-full flex flex-wrap p-3 gap-10">
        {data.length > 0 &&
          data.map((d, i) => {
            return (
              <Zoom>
                <div className="flex flex-col items-center gap-2" key={i}>
                  <div className="w-p75 h-p75 bg-slate-100 shadow-neor-2 flex justify-center items-center">
                    <img
                      src={d.img}
                      alt="ss"
                      className="w-p60 h-p60 object-cover rounded-lg"
                    />
                  </div>
                  <p
                    className={`text-base font-poppins ${
                      isDarkMode && "text-white"
                    }`}
                  >
                    {d.name}
                  </p>
                </div>
              </Zoom>
            );
          })}
      </div>
    </div>
  );
};

export default SkillEach;
