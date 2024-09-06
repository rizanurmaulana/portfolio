import { FaArrowRight } from "react-icons/fa6";

const projects = [
  {
    project: ["Web Design"],
    name: "Galeri Kreatif",
    image: "./images/project-3.png",
    description:
      "GaleriKreatif is a website dedicated to showcasing handmade products from small and medium-sized enterprises (SMEs).",
    link: "https://github.com/RifkiFiransah/Galeri-Kreatif",
  },
  {
    project: "Fullstack Web",
    name: "Catatanku",
    image: "./images/project-2.png",
    description:
      "Catatanku is a web application designed to streamline the process of recording and managing customer payments.",
    link: "https://github.com/rizanurmaulana/moja-project",
  },
  {
    project: "Fullstack Web",
    name: "Moja Project",
    image: "./images/project-1.png",
    description:
      "Moja Project is a web platform designed to connect companies with job seekers, streamlining the recruitment process for both parties.",
    link: "https://github.com/rizanurmaulana/catatanku-ci4",
  },
];

const ProjectCard = ({ image, project, name, description, link }) => (
  <div className="max-w-md rounded-lg p-6 bg-white">
    <div className="w-full aspect-video bg-cover overflow-hidden rounded mb-5">
      <img
        className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-300"
        src={image}
        alt={name}
      />
    </div>
    <div className="flex flex-col justify-between min-h-48">
      <div>
        <span className="badge mb-2">{project}</span>
        <h4 className="font-semibold text-2xl mb-2">{name}</h4>
        <p className="font-light text-gray-700 text-sm">{description}</p>
      </div>
      <div>
        <a
          target="_blank"
          href={link}
          className="flex items-center text-sm gap-3 hover:gap-4 text-sky-600 transition-300"
        >
          View Project <FaArrowRight />
        </a>
      </div>
    </div>
  </div>
);

const Project = () => (
  <section
    id="#project"
    className="flex justify-center items-center px-4 sm:px-8 md:px-14 lg:px-28 xl:px-44 py-28 gap-10 lg:gap-5 min-h-screen transition-500 bg-gray-100"
  >
    <div className="flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col items-center">
        <p className="font-medium mb-3 text-sm text-sky-600">Project</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          Recent Project
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            project={project.project}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Project;
