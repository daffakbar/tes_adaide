import React from "react";
import { Nav1, Nav2, Nav3, Nav4, Nav5 } from "../../../assets";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 flex justify-around py-2 bg-white">
      <div className="">
        <img src={Nav1} alt="" className="" />
      </div>
      <div className="">
        <img src={Nav2} alt="" />
      </div>
      <div className="">
        <img src={Nav3} alt="" />
      </div>
      <div className="">
        <img src={Nav4} alt="" />
      </div>
      <div className="">
        <img src={Nav5} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
