import React from "react";
import Stairy from "../components/Stairy";

import Footer from "../props/Footer";
import Header2 from "../props/Header2";

const Night =() => {
  
  return (
    <div className="dark:bg-black scroll-smooth transition-colors duration-500">
      <Header2/>
      <Stairy/>
      <Footer/>
    </div>
        
  );
};

export default Night;