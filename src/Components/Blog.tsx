import "../Components/Blog.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import headshot from "./../images/Business type Headshot.jpg";
import aes from "./../images/Aesthetic Photo.jpg";
import pass from "./../images/Photo showing passion.jpg";
function Blog() {
  return (
    <>
      <Navbar />

      <section id="Blog" className="blog-body">
        <h2 className="blog">Blog</h2>
        <div>
          <p>
            <img
              className="img1"
              src={headshot}
            ></img>
          </p>
          <p className="story pt-20">
            Hello My name is Shreya. Nice to meet you.
          </p>
        </div>

        <div>
          <p>
            <img
              className="img2"
              src={aes}
            ></img>
          </p>
          <p className="story2 text-center pt-20">
            The beautiful moon in the night sky inspired me to capture it. 
            This empty street at night gives a feeling of longing for some reason. The
            street-lights along with the moon and the car headlights gives a
            perfect aesthetic shot. </p>
            <p className="story2 text-center">
            To capture the moon I turned down the light in my camera settings completely. This made the
            moonlight, the streetlight and the car headlights pop out. 
            Giving us this beautiful aesthetic shot.
          </p>
        </div>

        <div>
          <p>
            <img
              className="img3"
              src={pass}
            ></img>
          </p>
          <p className="story3 text-center pt-20">
            In this photo I wanted to show my love for reading. I love reading
            books so I thought what better way to convey that than this picture.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
