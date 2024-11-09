import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Navbar2 from "@/components/Nabvar2";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
<<<<<<< HEAD
import Skills from "@/components/Skills";
=======
import ScrollToTopButtom from "@/components/ScrollToTopButtom";
>>>>>>> b4014d0c23c6af3c6f20fac0721f665853b164c8

export default function Page() {
  return (
    <div>
      {/* Navbar fijo */}
      {/* <Navbar/> */}
      <Navbar2 />
      {/* Secciones */}
      <Home />
      <Skills/>
      <Projects />
      <ScrollToTopButtom/>
      <About />
      <Contact />
    </div>
  );
}
