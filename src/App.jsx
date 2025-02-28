import "./app.scss"
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section><Services /></section>
    <section id="Portfolio">
    <Parallax type= "portfolio"/>
    </section>
    <Portfolio />
    <section id="Contact">
      <Contact />
    </section>
   {/* <Test/> */}
  </div>;
};

export default App;
