import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

const Homepage = ({children}) => {
  return (
    <>
      <div>

        
        <Header/>
        
        
        <main style={{minHeight:"60vh"}} >{children}</main>

        
        <Footer/>
        
        
      </div>
    </>
  );
};

export default Homepage;
