import React from "react";
import content from "../content/index";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  return (
    <div
      style={{
        backgroundColor: "#091c29",
        position: "sticky",
        top: 0,
        zIndex: 1,
      //  width: "100%"
      }}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
        <ScrollLink to="header" smooth={true}>
          <h1 className="text-3xl font-bold cursor-pointer">
            {content.nav.logo}{" "}
            <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
          </h1>
        </ScrollLink>
        <div>
          <ScrollLink to="stack" smooth={true}>
            <span className="text-xl mr-4 text-yellow-500 cursor-pointer">
              Skills.
            </span>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true}>
            <span className="text-xl mr-4 text-yellow-500 cursor-pointer">
              Contact.
            </span>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
