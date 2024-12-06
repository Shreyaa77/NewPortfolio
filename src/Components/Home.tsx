import "../Components/Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Home() {
  return (
    <>
      <Navbar />

      <main className="container ">
        <section id="hero" className="home-body">
          <h1 className="animate-bounce animate-delay-100"> Hello, there!</h1>
          <p className="animate-bounce animate-delay-100">
            {" "}
            Welcome to My Page!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
