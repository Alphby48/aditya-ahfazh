import { DarkMode } from "../context/darkModeContext";
import { useContext } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import DarkModeToggle from "../component/fragment/darkModeToggle";
import SkillEach from "../component/fragment/skillEach";
import NetworkList from "../data/network";
import ToTopPage from "../component/element/toTop";
import DetailNoteNet from "../component/element/detailNoteNet";
import CertNetEach from "../component/fragment/certNetEach";

const NetworkSkillPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`w-full flex flex-col ${
        isDarkMode ? "bg-slate-700" : "bg-sky-100"
      }`}
    >
      <div className="w-full flex justify-between">
        <div className="text-base p-3 m-5 rounded-sm bg-slate-300 w-fit flex items-center gap-3 font-poppins cursor-pointer">
          <span onClick={() => window.history.back()}>
            <i className="fa-solid fa-arrow-left"></i>
          </span>
        </div>
        <div className="m-5">
          <DarkModeToggle></DarkModeToggle>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mb-10">
        <Fade top>
          <h1
            className={`relative text-3xl max-sm:mb-10 ${
              isDarkMode ? "text-white" : "text-black"
            } font-poppins font-semibold text-shadow-md after:absolute after:-bottom-2 after:left-0 after:w-32 after:h-1 after:bg-amber-400`}
          >
            Network Engineering Skills
          </h1>
        </Fade>
      </div>
      <SkillEach data={NetworkList} title="Hardware and Software"></SkillEach>
      <DetailNoteNet></DetailNoteNet>
      <CertNetEach></CertNetEach>
      <ToTopPage></ToTopPage>
    </div>
  );
};

export default NetworkSkillPage;
