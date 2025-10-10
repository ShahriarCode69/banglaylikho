import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Navbar />
      <Hero />
      <div className="group flex-center absolute right-10 bottom-10 rotate-20 cursor-pointer transition-all duration-300 ease-in-out select-none hover:rotate-0">
        <img
          src="/circle.svg"
          alt=""
          className="w-32 transition-all duration-500 ease-in-out group-hover:rotate-360"
        />
        <span className="absolute text-2xl leading-6 font-bold text-white transition-all duration-300 ease-in-out group-hover:text-3xl">
          100% <br />
          Free!
        </span>
      </div>
      <span className="absolute bottom-5 left-5">
        Made with 🖤 by{" "}
        <a href="https://shahriarcode.vercel.app/" target="_blank">
          <strong>Shahriar</strong>
        </a>
      </span>
    </main>
  );
};

export default App;
