import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "./../content/index";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typical from "react-typical";
import { Link as ScrollLink } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Header = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  //
  return (
    <div
      className="min-h-screen items-center justify-center overflow-x-hidden"
      style={{
        backgroundColor: "#091c29",
        paddingTop: 100
      }}
      id="header"
    >
      <div className=" flex flex-col md:flex-row-reverse items-center justify-center">
        <div className="md:w-4/12 mr-32 sm:w-full">
          <LazyLoadImage
            src={content.header.img}
            effect="blur"
            placeholderSrc={process.env.PUBLIC_URL + "/logo512.png"}
          />
        </div>
      
        <div className="text-white font-dosis text-center md:w-8/12">
        <div data-aos="flip-left"
    
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
   
    data-aos-once="false">
          <h2
            className={`${
              animated ? "" : "translate-y-10 opacity-0 "
            } transform transition duration-1000 ease-in-out text-4xl font-bold text-yellow-500`}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${animated ? "" : "translate-y-10 opacity-0 "}
          transform transition duration-1000 ease-in-out font-bold text-2xl text-yellow-500`}
          >
            {content.header.text[2]}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
            />
          </h1>
          <ScrollLink to="stack" smooth={true}>
            <button className="bg-yellow-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg animate-float">
              {content.header.btnText}
            </button>
          </ScrollLink>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
