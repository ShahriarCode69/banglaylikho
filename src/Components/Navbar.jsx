import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex-center container mt-5 flex-col gap-6 rounded-xl py-2 backdrop-blur-sm">
      <div className="flex-center relative">
        <h1 className="heading-logo text-center">বাংলায় লিখো</h1>
        <img
          src="/underline.svg"
          className="absolute -bottom-2 mx-auto w-58"
          alt=""
        />
      </div>
      <div className="flex-center gap-2 transition-all duration-500 ease-in-out">
        <a href="#" className="hover:text-emerald-500" target="_blank">
          <FaGithub size={26} />
        </a>
        <a href="#" className="hover:text-emerald-500" target="_blank">
          <FaYoutube size={26} />
        </a>
        <a href="#" className="hover:text-emerald-500" target="_blank">
          <FaLinkedin size={26} />
        </a>
        <a href="#" className="hover:text-emerald-500" target="_blank">
          <FaExternalLinkAlt size={26} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
