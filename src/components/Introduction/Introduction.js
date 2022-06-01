import Content from "../Content/Content";
const text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda fugiat delectus commodi debitis sed quo provident voluptate.";

const Introduction = () => {
  return (
    <div className="introduction">
      <Content
        subtitle={`INTRODUCTION`}
        title={`Front End Developer`}
        text={text}
      />
    </div>
  );
};

export default Introduction;
