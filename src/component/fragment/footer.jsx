const FooterPage = () => {
  return (
    <footer className="w-full py-14 bg-sky-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex space-x-10 justify-center items-center mb-14">
            <a href="">
              <i className="fa-brands fa-instagram text-3xl"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-tiktok text-3xl"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-x-twitter text-3xl"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-threads text-3xl"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-github text-3xl"></i>
            </a>
          </div>
          <span className="text-lg text-gray-500 text-center block font-poppins">
            ©Aditya 2024, All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
