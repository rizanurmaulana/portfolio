import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/riza-nur-maulana-2b611420a/",
    icon: <FaLinkedinIn />,
    color: "text-sky-600",
    bgColor: "hover:bg-sky-600",
  },
  {
    href: "https://github.com/rizanurmaulana",
    icon: <FaGithub />,
    color: "text-gray-800",
    bgColor: "hover:bg-gray-800",
  },
  {
    href: "https://www.instagram.com/rizanurmaulana_/",
    icon: <FaInstagram />,
    color: "text-red-600",
    bgColor: "hover:bg-red-600",
  },
];

const SocialLink = () => (
  <div className="flex flex-col bg-white/50 backdrop-blur border border-white p-5 rounded-lg">
    <p className="mb-2 text-sm text-gray-800">Follow me on social media</p>
    <ul className="flex gap-4">
      {socialLinks.map(({ href, icon, color, bgColor }) => (
        <li
          key={href}
          className={`p-2 bg-white ${bgColor} ${color} hover:text-white rounded-lg cursor-pointer transition-500`}
        >
          <a href={href} className={`text-xl`}>
            {icon}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLink;
