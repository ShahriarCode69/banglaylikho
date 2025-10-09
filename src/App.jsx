import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <main className="relative h-screen w-full">
      <div
        className="absolute inset-0 -z-1"
        style={{
          backgroundImage: ``,
        }}
      />
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
