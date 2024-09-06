import { FaRegFileLines } from "react-icons/fa6";
import SocialMedia from "./SocialLink";

const About = () => {
  return (
    <section
      id="#about"
      className="flex justify-center items-center flex-col lg:flex-row px-4 sm:px-8 md:px-14 lg:px-28 xl:px-44 py-28 gap-10 lg:gap-5 min-h-screen transition-300 bg-gr"
    >
      <div className="flex relative justify-center items-center lg:w-1/2">
        <img
          className="object-cover rounded-xl sm:h-96 lg:h-full hover:drop-shadow-2xl transition-300"
          src="./images/my-profile.jpg"
          alt="personal photo"
        />
        <div className="absolute bottom-5 left-10">
          <SocialMedia />
        </div>
      </div>
      <div className="flex flex-col items-start lg:w-1/2 gap-5">
        <div>
          <p className="font-medium mb-3 text-sm text-sky-600">About Me</p>
          <h2 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl font-medium">
            Hi, I’m Riza Nur Maulana
          </h2>
        </div>
        <div className="text-justify font-light">
          <p className="text-gray-600 mb-2">
            I’m a Computer Science student and a passionate front-end developer
            from Indonesia. I specialize in creating dynamic, responsive web
            applications that perform seamlessly across all devices.
          </p>
          <p className="text-gray-600 mb-2">
            I prioritize developing user-friendly interfaces that align with the
            needs and expectations of end-users.
          </p>
        </div>
        <div>
          <button className="btn btn-primary">
            <FaRegFileLines /> Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
