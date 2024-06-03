import Hero from "./componants/2-hero/Hero";
import Header from "./componants/1-header/Header";
import Main from "./componants/5-main/Main";
import Contact from "./componants/6-contact/Contact";
// @ts-ignore
import Footer from "./componants/footer/Footer";
import About from "./componants/3-about me/About";
import { useEffect, useState } from "react";
import Skills from "./componants/4-skills/Skills";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScaleLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [showScrollBtn, setshowScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <ScaleLoader
            color="#7f8de9"
            cssOverride={{}}
            height={100}
            loading
            margin={6}
            width={10}
          />
        </div>
      ) : (
        <div id="up" className="container">
          <Header />
          <div id="home"  ></div>
          <Hero />
          <div id="about" className="divider"></div>
          <About />
          <div id="skills"  className="divider"></div>
          <Skills />
          <div id="main" className="divider"></div>
          <Main />
          <div id="contact" className="divider"></div>
          <Contact />
          <div className="divider"></div>
          <Footer />

          <a
            style={{ opacity: showScrollBtn ? 1 : 0, transition: "1s" }}
            href="#up"
          >
            {" "}
            <button className="scroll2Top icon-arrow-thick-up"></button>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
