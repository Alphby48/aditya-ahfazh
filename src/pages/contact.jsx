import { useContext } from "react";
import { DarkMode } from "../context/darkModeContext";
import PopupLayout from "../component/element/popup";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import { useEffect } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [popup, setPopup] = useState(false);
  const formEmailRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("sampunojodown", "sampunteplet", formEmailRef.current, {
        publicKey: "9XnTBC-248f4epTo1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setPopup(true);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...");
          console.log(error);
        }
      );
  };

  return (
    <div className="w-full flex items-center flex-col min-h-screen">
      <div className="w-full flex justify-center mb-8">
        <Fade left>
          <h1
            className={`relative text-3xl max-sm:mb-10 ${
              isDarkMode ? "text-white" : "text-black"
            } font-poppins font-semibold text-shadow-md after:absolute after:-bottom-2 after:left-0 after:w-20 after:h-1 after:bg-amber-400`}
          >
            Contact
          </h1>
        </Fade>
      </div>

      <form
        ref={formEmailRef}
        onSubmit={sendEmail}
        className={`flex flex-col w-2/3 max-sm:w-full p-5 shadow-neor ${
          isDarkMode ? "bg-slate-500" : "bg-lime-200"
        }`}
      >
        <div className="flex flex-col">
          <label
            htmlFor="user_names"
            className={`text-xl font-poppins mb-2 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className={`p-2 text-base font-poppins rounded-md mb-2 ${
              isDarkMode ? "bg-slate-300" : "bg-slate-100"
            }`}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="user_emails"
            className={`text-xl font-poppins mb-2 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className={`p-2 text-base font-poppins rounded-md mb-2 ${
              isDarkMode ? "bg-slate-300" : "bg-slate-100"
            }`}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="messages"
            className={`text-xl font-poppins mb-2 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className={`p-2 text-base font-poppins rounded-md mb-2 ${
              isDarkMode ? "bg-slate-300" : "bg-slate-100"
            }`}
          ></textarea>
        </div>
        <div className="flex justify-center my-10">
          <button
            type="submit"
            className="p-2 text-base font-poppins rounded-md bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>

      {popup && (
        <PopupLayout
          msg="Terima Kasih Sudah Menghubungi Kami!.."
          setPopup={setPopup}
        ></PopupLayout>
      )}
    </div>
  );
};

export default ContactPage;
