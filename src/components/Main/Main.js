import Banner from "../Banner/Banner";
import Signature from "../Signature/Signature";
import Introduction from "../Introduction/Introduction";
import AboutMe from "../AboutMe/AboutMe";

const Main = () => {
  return (
    <main>
      <Banner />
      <div className="left-side">
        <Introduction />
        <Signature />
        <AboutMe />
      </div>
    </main>
  );
};

export default Main;
