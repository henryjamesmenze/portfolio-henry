import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import FloatingChatButton from "./components/FloatingChatButton";

function App() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <FloatingChatButton />
    </>
  );
}

export default App;