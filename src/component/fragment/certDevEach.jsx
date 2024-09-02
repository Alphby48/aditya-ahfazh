import CertDev from "../../data/certDev";
import { useContext, useState } from "react";
import { DarkMode } from "../../context/darkModeContext";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const CertDevEach = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [isPop, setIsPop] = useState(false);
  const [isId, setIsId] = useState(0);
  const [isRes, setIsRes] = useState([]);

  const handlePopUp = (id) => {
    return () => {
      setIsPop(!isPop);
      setIsId(id);
    };
  };

  useEffect(() => {
    const pops = CertDev.filter((item) => item.id === isId);
    setIsRes(pops);
  }, [isPop, isId]);

  const handClose = () => {
    setIsPop(false);
    setIsId(0);
  };

  return (
    <div className={`w-full p-4`}>
      <div className="w-full flex justify-center">
        <Fade bottom>
          <h1
            className={`relative text-3xl font-semibold my-6 font-poppins ${
              isDarkMode ? "text-white" : "text-black"
            } after:absolute after:-bottom-1 after:left-0 after:w-24 after:h-1 after:bg-amber-400`}
          >
            Certificate
          </h1>
        </Fade>
      </div>
      <div className="w-full flex flex-wrap p-3 gap-10">
        <Zoom>
          {CertDev.length > 0 &&
            CertDev.map((d, i) => {
              return (
                <div
                  className="flex flex-col p-3 items-center w-80 shadow-neor bg-gray-200 cursor-pointer"
                  key={i}
                  onClick={handlePopUp(d.id)}
                >
                  <div>
                    <img src={d.img} className="w-72 rounded-lg" alt="" />
                  </div>
                  <p className="text-xl font-poppins mt-2">{d.name}</p>
                </div>
              );
            })}
        </Zoom>
      </div>
      <div
        className={`fixed top-0 left-0 bottom-0 right-0 z-50 justify-center items-center bg-pop ${
          isPop === true ? "flex" : "hidden"
        }`}
      >
        <div className="w-5/6 max-sm:w-full relative flex justify-center items-center">
          <i
            className="fa-regular fa-circle-xmark text-orange-600 absolute top-0 max-sm:-top-5 right-5 text-3xl cursor-pointer"
            onClick={handClose}
          ></i>
          <img
            src={isRes.length > 0 && isRes.map((d) => d.img)}
            className="w-2/3 max-sm:w-5/6"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CertDevEach;
