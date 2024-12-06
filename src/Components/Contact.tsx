import "../Components/Contact.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Contact() {
  return (
    <>
      <Navbar />

      {/*Contact section */}

      <section id="contact" className="contact-body">
        <h2 className="contact">Contact Me:</h2>
        <p className="details">
          Contact number: <a href="tel:+353 899828713">+353 899828713</a>
        </p>
        <p className="details">
          Email:{" "}
          <a href="mailto:24150002@studentmail.ul.ie">
            24150002@studentmail.ul.ie
          </a>
        </p>{" "}
        {/* Email link */}
        <p className="details">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/shreya-shinde-6005a1275/"
            target="_blank"
          >
            https://www.linkedin.com
          </a>
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
