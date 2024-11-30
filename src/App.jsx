import "./app.scss"
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Test from "./Test";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
   {/* <Test/> */}
  </div>;
};

export default App;
