import "./about.css";

function About() {
  return (
    <section id="about" className="about">
      <h1 className="about-title" style={{marginBottom:"40px"}}>About me </h1>

      <div className=" info flex">
        <div>
          <h4 className="myName">
            My Name is :{" "}
            <span className="name">Abdulrahman Helmy Rabeay Mohamed.</span>
          </h4>
          <h4 className="myName">
            My Age : <span className="name">23 years old.</span>
          </h4>
          <h4 className="myName">
            Educational Degree :{" "}
            <span className="name">
              I have earned a degree from the Faculty of Islamic Da'wah at
              Al-Azhar University, having graduated in July 2023.
            </span>
          </h4>
          <h4 className="myName">
            Jop Title :{" "}
            <span className="name">
              Back-end Developer,{" "}
              <p>
                I use Node.js, Express js and MongoDB for backend development.{" "}
                <br /> Experienced in designing RESTful APIs for seamless data
                exchange. <br /> Use MongoDB as a NoSQL database for efficient
                data management.
              </p>
            </span>
          </h4>
        </div>
        <div>
          <img className="imga" src="/images/solhy.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
