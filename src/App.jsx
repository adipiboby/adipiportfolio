import Navbar from "./components/Navbar";
import Home from "../pages/Home.jsx";
import Skill from "../pages/Skill.jsx";
import Experience from "../pages/Experience.jsx";
import Education from "../pages/Education.jsx";
import Contact from "../pages/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
