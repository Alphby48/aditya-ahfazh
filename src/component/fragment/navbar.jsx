import { useState, useEffect, useContext } from "react";
import { DarkMode } from "../../context/darkModeContext";
import { Link } from "react-router-dom";
import DarkModeToggle from "./darkModeToggle";
import { useRef } from "react";

const NavbarPages = (props) => {
  const { aboutRef, skillsRef } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [navbar, setNavbar] = useState(false);
  const [home, setHome] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const windowRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !windowRef.current.contains(event.target) &&
        !navRef.current.contains(event.target)
      ) {
        setNavbar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setHome(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        setHome(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleHomeScroller = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setNavbar(false);
  };

  const handleAboutScroler = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      behavior: "smooth",
    });

    setNavbar(false);
  };

  const handleSkillsScroller = () => {
    window.scrollTo({
      top: skillsRef.current.offsetTop,
      behavior: "smooth",
    });
    setNavbar(false);
  };

  return (
    <>
      <div
        className={`w-full z-50 transition-all ease-in duration-300 ${
          isVisible ? "flex" : "hidden"
        } items-center fixed justify-around font-poppins p-3 ${
          isDarkMode ? "bg-slate-400" : "bg-sky-500"
        }`}
      >
        <div className="w-1/2 sm:w-1/6 flex items-center gap-4">
          <img src="/img/aditya.png" alt="" className="w-12" />
          <h1 className="text-2xl text-white">Aditya</h1>
        </div>
        <div
          className={`ul-nav flex flex-col sm:flex-row w-1/2 max-sm:w-3/5 sm:justify-around items-center transition-all ease-in duration-300 gap-7 sm:gap-0 text-white text-xl pt-10 sm:pt-0 fixed top-16 ${
            navbar === true ? "left-0" : "-left-72"
          } bottom-0 ${isDarkMode ? "bg-slate-400" : "bg-sky-500"} sm:static`}
          ref={navRef}
        >
          <p
            className="hover:text-red-200 transition ease-in duration-100 cursor-pointer"
            onClick={handleHomeScroller}
          >
            Home
          </p>

          <p onClick={handleAboutScroler} className="cursor-pointer">
            About
          </p>

          <p onClick={handleSkillsScroller} className="cursor-pointer">
            Skills
          </p>

          <Link>
            <p>Portfolio</p>
          </Link>
          <Link>
            <p>Contact</p>
          </Link>
          <i
            className="fa-regular fa-circle-xmark hidden text-3xl max-sm:block max-sm:absolute max-sm:top-1 max-sm:right-1"
            onClick={() => setNavbar(false)}
          ></i>
        </div>
        <div className="w-1/2 sm:w-1/6 flex items-center justify-end gap-5 sm:gap-0">
          <i
            className="fa-solid fa-bars block sm:hidden text-3xl"
            onClick={() => setNavbar(!navbar)}
            ref={windowRef}
          ></i>
          <DarkModeToggle></DarkModeToggle>
        </div>
      </div>
      <div
        className={`fixed bottom-5 right-5 w-14 h-14 ${
          home ? "flex" : "hidden"
        } justify-center items-center rounded-full bg-orange-100 cursor-pointer z-20`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i class="fa-solid fa-house text-xl"></i>
      </div>
    </>
  );
};

export default NavbarPages;
