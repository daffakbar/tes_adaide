import React from "react";

const ButtomComponent = ({ label }) => {
  return (
    <a
      href="#"
      className=" bg-gradient-to-l to-[#FFD260] from-[#FF9900] bg-slate-600 px-4 py-2 rounded-xl text-white font-semibold"
    >
      {label}
    </a>
  );
};

export default ButtomComponent;
