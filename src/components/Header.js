import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";

const Header = () => {
  // Component logic here

  return (
   <>
     
        <div style={{ marginBottom: "15px", border: "1px solid blue", borderRadius: "5px" }}>
          <Carousel autoPlay infiniteLoop interval={3000} showStatus={false} showThumbs={false}>
            <div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "500px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="http://www.iec-indulge.com/img/slide/slide-2.jpg"
                  alt="Image 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 150, 255, 0.3)",
                  }}
                ></div>
                <img
                  src="logo.png"
                  alt="Logo"
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    width: "100px",
                    height: "30px",
                    zIndex: "1",
                  }}
                />
                <p className="headerHeading"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "50px",
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    zIndex: "1",
                  }}
                >
                  Welcome to the world of Restaurants
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "500px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="http://www.iec-indulge.com/img/slide/slide-3.jpg"
                  alt="Image 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 150, 255, 0.3)",
                  }}
                ></div>
                <img
                  src="logo.png"
                  alt="Logo"
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    width: "100px",
                    height: "30px",
                    zIndex: "1",
                  }}
                />
                <p className="headerHeading"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "50px",
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    zIndex: "1",
                  }}
                >
                  Welcome to the world of Restaurants
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "500px",
                  overflow: "hidden",
                }}
              >
                <img
                  src="http://www.iec-indulge.com/img/slide/slide-1.jpg"
                  alt="Image 3"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 150, 255, 0.3)",
                  }}
                ></div>
                <img
                  src="logo.png"
                  alt="Logo"
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    width: "100px",
                    height: "30px",
                    zIndex: "1",
                  }}
                />
                <p className="headerHeading"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "50px",
                    color: "white",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    zIndex: "1",
                  }}
                >
                  Welcome to the world of Restaurants
                </p>
              </div>
            </div>
          </Carousel>
        </div>
        <Navbar/>
   </>
  );
};

export default Header;