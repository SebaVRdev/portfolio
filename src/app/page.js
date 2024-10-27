import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Navbar2 from "@/components/Nabvar2";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollToTopButtom from "@/components/ScrollToTopButtom";

export default function Page() {
  return (
    <div>
      {/* Navbar fijo */}
      {/* <Navbar/> */}
      <Navbar2 />
      {/* Secciones */}
      <Home />
      <Projects />
      <ScrollToTopButtom/>
      <About />
      <Contact />
    </div>
  );
}
