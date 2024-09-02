import { useState, useEffect, useContext } from "react";
const ToTopPage = () => {
  const [home, setHome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        setHome(true);
      } else {
        setHome(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 w-14 h-14 ${
        home ? "flex" : "hidden"
      } justify-center items-center rounded-full bg-orange-400 cursor-pointer z-20`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fa-solid fa-house text-xl text-gray-50"></i>
    </div>
  );
};

export default ToTopPage;
