import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1
        style={{ fontSize: "28px", color: "var(--title)" }}
        className="skills-title"
      >
         Skills
      </h1>
      <div className="allskills ">
        <img className="imgskills" src="/images/html.png" alt="" />
        <img className="imgskills" src="/images/css.jpeg" alt="" />
        <img
          className="imgskills"
          src="/images/javascript-js-logo-4.webp"
          alt=""
        />

        <img className="imgskills" src="/images/node.webp" alt="" />
        <img className="imgskills" src="/images/express.jpeg" alt="" />
        <img className="imgskills" src="/images/mong.jpeg" alt="" />
      </div>
    </section>
  );
};

export default Skills;
