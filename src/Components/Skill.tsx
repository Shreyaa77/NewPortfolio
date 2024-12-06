import "../Components/Skill.css";
import Navbar from "./Navbar";
import sk1 from "./../images/Html Logo.png";
import sk2 from "./../images/CSS logo.webp";
import sk3 from "./../images/tailwind logo.png";
import sk4 from "./../images/figma logo.png";
import sk5 from "./../images/canva.jpg";
import Footer from "./Footer";
function Skills() {
  return (
    <>
      <Navbar />

      {/*Skills*/}
      <section id="Skills" className="skills-body">
        <h2 className="skills">Skills</h2>

        <div className="image-container">
          <p>
            <img className="html" src={sk1}></img>
          </p>

          <p>
            <img className="CSS" src={sk2}></img>
          </p>

          <p>
            <img
              className="Tailwind"
              src={sk3}
            ></img>
          </p>
</div>

          <div className="image-container">
        
          <p>
            <img className="Figma" src={sk4}></img>
          </p>

          <p>
            <img className="Canva" src={sk5}></img>
          </p>

        </div>
      </section>

     <Footer/>
    </>
  );
}

export default Skills;
