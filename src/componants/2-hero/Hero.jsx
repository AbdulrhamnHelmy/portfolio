import "./Hero.css";
import Lottie from "lottie-react";
import devanimation from "../../Animation/developer.json";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 8, type: "spring", stiffness: 100 }}
            src="./images/solhy2.png"
            className="avatar"
            alt=""
          ></motion.img>
          <div className="name">
            <h1>Abdulrahman Mohamed</h1>
          </div>
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
         Software Engineer,<br /> Back-end Developer
        </motion.h1>

        <div className="btnCv " style={{ marginTop: "2rem" }}>
          <button className="Link-cv">
            <a href="https://flowcv.com/resume/k57obqi7ep">View CV</a>
          </button>
        </div>

        <div className="all-icons flex">
          <div>
            <a href="https://github.com/AbdulrhamnHelmy">
              <i className="icon icon-github-square"></i>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/abdul-rahman--mohammed/">
              <i className="icon icon-linkedin-square"></i>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100009512895014">
              <i className="icon icon-facebook-square"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="right-section animation">
        {" "}
        <Lottie className="" animationData={devanimation} />
      </div>
    </section>
  );
}

export default Hero;
