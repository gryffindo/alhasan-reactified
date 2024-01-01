import BarSp from "../components/BarSp";
import Header from "../components/header";
import "../styles/skills.scss";

const Skills = () => {
  return (
    <>
      <Header />
      <div className="skill-wrapper">
        <div id="skills">
          <h1
            style={{ marginTop: "100px", marginBottom: "75px" }}
            className="hello_kitty"
          >
            Skills
          </h1>
          <div className="about-me-info skill_box">
            <p>
              Mainly I am a web developer. I can develop websites using nodejs,
              html, css etc.I am a React JS developer too. I love solving
              problems with C++.
            </p>
          </div>
        </div>
        <BarSp />
      </div>
    </>
  );
};

export default Skills;
