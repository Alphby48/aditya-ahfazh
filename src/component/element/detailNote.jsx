import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const DetailNote = () => {
  return (
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
            I am capable of creating websites with a modular concept, separating
            JavaScript and CSS or Sass. Additionally, I use Webpack to bundle
            scripts and minimize the size of the bundled files.
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
            creation and development. This includes initializing repositories in
            local Git and on GitHub, adding code files to the repository,
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
            existing data in the database, and deleting data from the database.
            For this development, I use MongoDB as the database. Naturally, I
            use Node.js and Express.js for the backend.
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
  );
};

export default DetailNote;
