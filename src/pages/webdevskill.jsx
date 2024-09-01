import { DarkMode } from "../context/darkModeContext";
import { useContext } from "react";
import Languages from "../data/deveopment";
import DarkModeToggle from "../component/fragment/darkModeToggle";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { useEffect } from "react";
import { useState } from "react";

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
      <div className="w-full flex flex-col p-5">
        <Fade bottom>
          <h2
            className={`text-xl font-medium font-poppins mb-5 ${
              isDarkMode && "text-white"
            }`}
          >
            Programming Language and Style
          </h2>
        </Fade>
        <div className="w-full flex flex-wrap p-3 gap-10">
          {data.length > 0 &&
            data.map((d) => {
              return (
                <Zoom>
                  <div className="flex flex-col items-center gap-2">
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
      <div className="w-full flex flex-col p-5">
        <Fade bottom>
          <h2
            className={`text-xl font-medium font-poppins mb-5 ${
              isDarkMode && "text-white"
            }`}
          >
            Frameworks and Libraries
          </h2>
        </Fade>
        <div className="w-full flex flex-wrap p-3 gap-10">
          {langWork.length > 0 &&
            langWork.map((d) => {
              return (
                <Zoom>
                  <div className="flex flex-col items-center gap-2">
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
      <div className="w-full flex flex-col p-5">
        <Fade bottom>
          <h2
            className={`text-xl font-medium font-poppins mb-5 ${
              isDarkMode && "text-white"
            }`}
          >
            Database
          </h2>
        </Fade>
        <div className="w-full flex flex-wrap p-3 gap-10">
          {langData.length > 0 &&
            langData.map((d) => {
              return (
                <Zoom>
                  <div className="flex flex-col items-center gap-2">
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
      <div className="w-full flex flex-col p-5">
        <Fade bottom>
          <h2
            className={`text-xl font-medium font-poppins mb-5 ${
              isDarkMode && "text-white"
            }`}
          >
            Tools
          </h2>
        </Fade>
        <div className="w-full flex flex-wrap p-3 gap-10">
          {langOther.length > 0 &&
            langOther.map((d) => {
              return (
                <Zoom>
                  <div className="flex flex-col items-center gap-2">
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
      <div className="w-full flex flex-col p-5 rounded-md bg-lime-100">
        <Fade bottom>
          <h1 className="text-2xl font-poppins mb-3 ml-2 font-semibold">
            Details
          </h1>
        </Fade>
        <Zoom top>
          <div className="w-full p-2 my-3">
            <h2 className="text-xl font-poppins mb-1 font-medium">
              <span>
                <i className="fa-solid fa-caret-right"></i>
              </span>{" "}
              Native web development
            </h2>
            <p className="text-base font-poppins ml-5 w-5/6">
              I am capable of creating websites manually using HTML, CSS, and
              JavaScript without using frameworks and libraries. This is
              specifically for simple static websites.
            </p>
          </div>
          <div className="w-full p-2 my-3">
            <h2 className="text-xl font-poppins mb-1 font-medium">
              <span>
                <i className="fa-solid fa-caret-right"></i>
              </span>{" "}
              Web development with CSS frameworks
            </h2>
            <p className="text-base font-poppins ml-5 w-5/6">
              I am capable of creating websites using CSS frameworks such as
              Bootstrap and Tailwind. I am also proficient in using CSS
              preprocessors like SASS/SCSS to facilitate the creation of
              responsive websites.
            </p>
          </div>
          <div className="w-full p-2 my-3">
            <h2 className="text-xl font-poppins mb-1 font-medium">
              <span>
                <i className="fa-solid fa-caret-right"></i>
              </span>{" "}
              Modular web development with Webpack
            </h2>
            <p className="text-base font-poppins ml-5 w-5/6">
              I am capable of creating websites with a modular concept,
              separating JavaScript and CSS or Sass. Additionally, I use Webpack
              to bundle scripts and minimize the size of the bundled files.
            </p>
          </div>
          <div className="w-full p-2 my-3">
            <h2 className="text-xl font-poppins mb-1 font-medium">
              <span>
                <i className="fa-solid fa-caret-right"></i>
              </span>{" "}
              Using Git and GitHub
            </h2>
            <p className="text-base font-poppins ml-5 w-5/6">
              I am capable of using Git and GitHub as tools to facilitate web
              creation and development. This includes initializing repositories
              in local Git and on GitHub, adding code files to the repository,
              creating branches, adding to branches, uploading to GitHub, and
              merging branches both locally and on GitHub.
            </p>
          </div>
          <div className="w-full p-2 my-3">
            <h2 className="text-xl font-poppins mb-1 font-medium">
              <span>
                <i className="fa-solid fa-caret-right"></i>
              </span>{" "}
              Backend web development with the CRUD concept
            </h2>
            <p className="text-base font-poppins ml-5 w-5/6">
              I am capable of creating a backend for websites using the CRUD
              concept (Create, Read, Update, and Delete). This involves creating
              new data and inserting it into the database, reading or retrieving
              data from the database to display on the interface, updating
              existing data in the database, and deleting data from the
              database. For this development, I use MongoDB as the database.
              Naturally, I use Node.js and Express.js for the backend.
            </p>
          </div>
          <div className="w-full p-2 my-3">
            <h2 className="text-xl font-poppins mb-1 font-medium">
              <span>
                <i className="fa-solid fa-caret-right"></i>
              </span>{" "}
              Full-stack web development with the MERN stack
            </h2>
            <p className="text-base font-poppins ml-5 w-5/6">
              I am capable of creating and developing websites using the MERN
              stack (MongoDB, Express.js, React.js, Node.js). I use React.js for
              the user interface, Express.js and Node.js for the backend, and
              MongoDB as the database. For this development, I use Vite.js to
              create the React.js library.
            </p>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default WebDevSkillPage;
