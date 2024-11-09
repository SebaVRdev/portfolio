import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Navbar2 from "@/components/Nabvar2";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollToTopButtom from "@/components/ScrollToTopButtom";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Home />
      <Skills/>
     {/*  <Projects /> */}
      <ScrollToTopButtom/>
      <About />
      <Contact />
    </div>
  );
}
