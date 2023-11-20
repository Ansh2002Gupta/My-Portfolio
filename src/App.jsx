import Achivements from "./components/Achivements";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Parallax from "./components/Parallax";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Header />
      </section>
      <section id="Projects">
        <Parallax type="Projects" />
      </section>
      <Projects/>
      <section id="Other">
        <Parallax types="Other" />
      </section>
      <section id="Technical Skills"><Skills/></section>
      <section id="Achivements"><Achivements/></section>
      <section id="Contact"><Contact/></section>
    </div>
  );
};

export default App;
