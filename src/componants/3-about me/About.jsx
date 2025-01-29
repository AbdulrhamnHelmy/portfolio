import "./about.css";

function About() {
  return (
    <section id="about" className="about">
      <h1 className="about-title" style={{marginBottom:"40px"}}>About me </h1>

      <div className=" info flex">
        <div>
          <h4 className="myName">
            My Name is :{" "}
            <span className="name">Abdulrahman Helmy Rabee'i Mohamed.</span>
          </h4>
          <h4 className="myName">
            My Age : <span className="name">24 years old.</span>
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
              <p>
                Junior Back-end Developer with hands-on experience in building
                scalable and secure web applications using Node.js, Express.js,
                and MongoDB. Skilled in designing and implementing RESTful APIs
                for seamless data exchange and efficient data management with
                NoSQL databases. Passionate about learning new technologies,
                solving complex problems, and delivering high-quality solutions.
                Strong team player with excellent communication skills and a
                proactive approach to software development.
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
