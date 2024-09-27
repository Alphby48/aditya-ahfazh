import { useContext } from "react";
import { DarkMode } from "../../context/darkModeContext";
import Zoom from "react-reveal";
const FooterPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <Zoom bottom>
      <footer
        className={`w-full py-14 ${isDarkMode ? "bg-slate-400" : "bg-sky-300"}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-10 max-sm:space-x-8 justify-center items-center mb-10">
              <a href="https://www.instagram.com/denzuko_743" target="_blank">
                <i className="fa-brands fa-instagram text-3xl hover:text-amber-300"></i>
              </a>
              <a href="https://www.tiktok.com/@denzuko743" target="_blank">
                <i className="fa-brands fa-tiktok text-3xl hover:text-amber-300"></i>
              </a>
              <a href="https://x.com/denzuko_743" target="_blank">
                <i className="fa-brands fa-x-twitter text-3xl hover:text-amber-300"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-ahfazh-firmansyah-867753278"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin text-3xl hover:text-amber-300"></i>
              </a>
              <a href="https://www.threads.net/@denzuko_743" target="_blank">
                <i className="fa-brands fa-threads text-3xl hover:text-amber-300"></i>
              </a>
              <a href="https://github.com/Alphby48" target="_blank">
                <i className="fa-brands fa-github text-3xl hover:text-amber-300"></i>
              </a>
            </div>
            <span
              className={`text-lg text-center block font-poppins ${
                isDarkMode ? "text-white" : "text-gray-600"
              }`}
            >
              ©Aditya 2024, All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </Zoom>
  );
};

export default FooterPage;
