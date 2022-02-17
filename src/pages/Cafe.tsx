import React from "react";
import Red from "../components/Red";

import Footer from "../props/Footer";
import Header2 from "../props/Header2";

const Cafe =() => {
  
  return (
    <div className="dark:bg-black scroll-smooth transition-colors duration-500">
      <Header2/>
      <Red/>
      <Footer/>
    </div>
        
  );
};

export default Cafe;