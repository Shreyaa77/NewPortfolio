import "../Components/About.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function About() {
  return (
    <>
      <Navbar />

      {/*About*/}
      <section id="About" className="about-body">
        <h2 className="about">About</h2>
        <p className="me">
          I’m Shreya, an international student at the University of Limerick.
          </p>
          <p className="me">
            For over four years, I’ve worked in various areas of Information
          Technology, focusing on managing, maintaining, and troubleshooting
          computer systems. 
          </p>
          <p className="me">
          Currently, as I pursue my Master’s, I spend my time
          researching, designing, prototyping, and coding. 
          </p>
          <p className="me"> When I'm not studying, I enjoy curling up with a good book or sketching and
          dreaming about traveling the world.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default About;
