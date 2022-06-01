import Content from "../Content/Content";
import PersonalInfo from "./PersonalInfo";

const text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda fugiat delectus commodi debitis sed quo provident voluptate.";

const AboutMe = () => {
  return (
    <div className="about-me">
      <Content subtitle={`ABOUT ME`} title={`Biography`} text={text} />
      <PersonalInfo />
    </div>
  );
};

export default AboutMe;
