import { DarkMode } from "../context/darkModeContext";
import { useContext } from "react";
import Languages from "../data/deveopment";
import DarkModeToggle from "../component/fragment/darkModeToggle";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useEffect } from "react";
import { useState } from "react";
import DetailNote from "../component/element/detailNote";
import SkillEach from "../component/fragment/skillEach";
import CertDevEach from "../component/fragment/certDevEach";
import ToTopPage from "../component/element/toTop";

const WebDevSkillPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [data, setData] = useState([]);
  const [langWork, setLangWork] = useState([]);
  const [langData, setLangData] = useState([]);
  const [langOther, setLangOther] = useState([]);

  useEffect(() => {
    const lang = Languages.filter((item) => item.type === "language");
    const langFrame = Languages.filter(
      (item) => item.type === "framework and library"
    );
    const langBase = Languages.filter((item) => item.type === "database");
    const langTool = Languages.filter((item) => item.type === "tool");
    setData(lang);
    setLangWork(langFrame);
    setLangData(langBase);
    setLangOther(langTool);
  }, []);

  console.log(data);

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
            Web Development Skills
          </h1>
        </Fade>
      </div>
      <SkillEach
        data={data}
        title="Programming Languages and Styles"
      ></SkillEach>
      <SkillEach data={langWork} title="Frameworks and Libraries"></SkillEach>
      <SkillEach data={langData} title="Databases"></SkillEach>
      <SkillEach data={langOther} title="Tools"></SkillEach>
      <DetailNote></DetailNote>
      <CertDevEach></CertDevEach>
      <ToTopPage></ToTopPage>
    </div>
  );
};

export default WebDevSkillPage;
