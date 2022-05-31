import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <img src={`/edward-howell-FTRkZnSrr1M-unsplash.jpg`} />
        <div className="border1"></div>
        <div className="border2"></div>
        <h3>HI THERE! I AM</h3>
        <h1>Farzad Kavoosi</h1>
      </div>

      <div className="status">
        <span></span>
        <p>I'm available for a freelance job. Hire me</p>
      </div>
    </div>
  );
};

export default Banner;
