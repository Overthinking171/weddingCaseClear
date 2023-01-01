import React from "react";
import leftTop from "../assets/left-top.png";
import leftBottom from "../assets/left-bottom.png";
import centerTop from "../assets/center-top.png";
import centerBottom from "../assets/center-bottom.png";
import rightTop from "../assets/right-top.png";
import rightBottom from "../assets/right-bottom.png";

const Album = () => {
  return (
    <div className="wrapper mt-[200px]">
      {" "}
      <section id="gallery">
        <h1 className="title-text text-center text-3xl md:text-3xl sm:text-xl">
          ALBUM FOTO
        </h1>
        <div className="container mx-auto mt-10">
          <div className="img md:hidden sm:contents">
            <img
              src={centerTop}
              alt=""
              className="items-start mt-3 mx-auto rounded-xl"
            />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-3 w-full items-center mx-auto">
            <div className="grid-cols-2 mx-auto">
              <img src={leftTop} alt="" className="mx-auto mt-3 rounded-xl" />
              <img
                src={leftBottom}
                alt=""
                className="mx-auto mt-3 rounded-xl"
              />
            </div>
            <div className="flex flex-col mx-auto items-stretch">
              <div className="img md:contents sm:hidden">
                <img
                  src={centerTop}
                  alt=""
                  className="items-start mt-3 mx-auto rounded-xl"
                />
              </div>

              <p className="lead gal-text text-center font-dancing text-6xl md:text-5xl sm:text-4xl my-28">
                Gallery
              </p>
              <div className="img md:contents sm:hidden">
                <img
                  src={centerBottom}
                  alt=""
                  className="mx-auto mt-3 rounded-xl"
                />
              </div>
            </div>
            <div className="grid-cols-2 mx-auto">
              <img src={rightTop} alt="" className="mx-auto mt-3 rounded-xl" />
              <img
                src={rightBottom}
                alt=""
                className="mx-auto mt-3 rounded-xl"
              />
            </div>
          </div>
          <div className="img md:hidden sm:contents">
            <img
              src={centerBottom}
              alt=""
              className="mx-auto mt-3 rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Album;
