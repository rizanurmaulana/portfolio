import { FaArrowRight } from "react-icons/fa6";
import {
  MdOutlineDevices,
  MdOutlineLanguage,
  MdOutlineLayers,
} from "react-icons/md";
import { Link } from "react-scroll";

const services = [
  {
    icon: <MdOutlineDevices />,
    title: "Web Design",
    description:
      "Craft user-friendly and visually appealing website interfaces.",
  },
  {
    icon: <MdOutlineLanguage />,
    title: "Web Development",
    description: "Building and coding the functional aspects of a website.",
  },
  {
    icon: <MdOutlineLayers />,
    title: "UI/UX Design",
    description: "Designing user interfaces and improving user experience.",
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="flex items-center gap-5 border hover:border-white hover:shadow-xl max-w-md font-light rounded-xl p-5 transition-1000">
    <div className="p-3 bg-gray-100 text-sky-600 rounded transition-500 text-2xl">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-base md:text-lg">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const Service = () => (
  <section
    id="#service"
    className="flex flex-col md:flex-row justify-center items-start px-4 sm:px-8 md:px-14 lg:px-28 xl:px-44 py-28 gap-10 lg:gap-5 transition-300"
  >
    <div className="flex flex-col md:w-1/2 gap-5">
      <div>
        <p className="font-medium mb-3 text-sm text-sky-600">Service</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          Services i provide
        </h2>
      </div>
      <div className="lg:w-10/12 font-light text-gray-600">
        <p>
          As a dedicated front-end developer, I offer a range of services to
          bring your web projects to life.
        </p>
      </div>
      <div>
        <Link
          to="#contact"
          spy={true}
          smooth={true}
          duration={500}
          className="btn btn-primary"
        >
          Let's Work Together <FaArrowRight />
        </Link>
      </div>
    </div>
    <div className="flex flex-col gap-5 justify-center items-center w-full lg:w-1/2">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </section>
);

export default Service;
