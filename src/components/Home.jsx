import { FaArrowRight, FaRegFileLines } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => (
  <section
    id="#home"
    className="flex justify-center items-center flex-col-reverse lg:flex-row px-4 sm:px-8 md:px-14 lg:px-28 xl:px-44 py-28 gap-10 lg:gap-5 min-h-screen transition-300"
  >
    <div className="flex flex-col justify-center lg:w-1/2 gap-5 md:gap-7">
      <h1 className="text-gray-800 text-3xl sm:text-4xl lg:text-5xl font-semibold">
        Hi There👋, I’m{" "}
        <span className="text-sky-600 underline">Riza Nur Maulana</span>
      </h1>
      <p className="font-light text-gray-600">
        I'm passionate about web development, specializing in creating
        responsive and interactive web applications, as well as developing
        user-friendly interfaces.
      </p>
      <div className="flex flex-col sm:flex-row items-baseline gap-5">
        <Link
          to="#project"
          spy={true}
          smooth={true}
          duration={500}
          className="btn btn-primary"
        >
          View Project <FaArrowRight />
        </Link>
        <button className="btn btn-light">
          <FaRegFileLines /> Download CV
        </button>
      </div>
    </div>
    <div className="flex justify-end items-center lg:w-1/2">
      <img
        className="object-cover rounded-xl sm:h-96 lg:h-full hover:drop-shadow-2xl transition-300"
        src="./images/home-image.jpg"
        alt="profile"
      />
    </div>
  </section>
);

export default Home;
