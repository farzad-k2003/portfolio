import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        {/* <img
          src="./edward-howell-FTRkZnSrr1M-unsplash.jpg"
          alt="banner"
          className="banner-img"
        /> */}
        {/* <img src={`/edward-howell-FTRkZnSrr1M-unsplash.jpg`} /> */}
        <img src={`/edward-howell-FTRkZnSrr1M-unsplash.jpg`} width="10" />
        <div className="border1"></div>
        <div className="border2"></div>
      </div>
    </div>
  );
};

export default Banner;
