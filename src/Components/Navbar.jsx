import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex-center container mt-5 flex-col gap-2 rounded-xl bg-neutral-300 py-2">
      <h1 className="heading-logo">বাংলায় লিখো</h1>
      <div className="flex-center gap-2 transition-all ease-in-out duration-500">
        <a href="#" className="hover:text-indigo-600" target="_blank">
          <FaGithub size={26} />
        </a>
        <a href="#" className="hover:text-indigo-600" target="_blank">
          <FaYoutube size={26} />
        </a>
        <a href="#" className="hover:text-indigo-600" target="_blank">
          <FaLinkedin size={26} />
        </a>
        <a href="#" className="hover:text-indigo-600" target="_blank">
          <FaExternalLinkAlt size={26} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
