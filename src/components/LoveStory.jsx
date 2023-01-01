import React from 'react'
import couple from "../assets/couple.png";
import satu from "../assets/1.png";
import dua from "../assets/2.png";
import tiga from "../assets/3.png";
import L from "../assets/L.png";

const LoveStory = () => {
  return (
    <div className='wrapper mt-[200px]'>
        <section id="love-story">
        <h1 className="title-text text-center flex text-5xl my-24 items-end justify-center">
          <img src={L} alt="" />
          <p className="text -ml-14 font-[450]">Love Story</p>
        </h1>
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center">
            <div className="love-list">
              <div className="love-group flex items-center">
                <div className="number">
                  <img src={satu} alt="" className="mx-auto" />
                </div>
                <div className="text-group">
                  <h1 className="title text-2xl font-poppins text-bold">
                    Awal Bertemu
                  </h1>
                  <p className="leads font-inter p-0">
                    Lorem ipsum dolor sit amet consectetur. Quis nibh tristique
                    faucibus vel cras amet risus. Risus adipiscing tellus id
                    convallis. Porttitor risus leo sed ligula{" "}
                  </p>
                </div>
              </div>
              <div className="love-group flex items-center">
                <div className="number">
                  <img src={dua} alt="" className="mx-auto" />
                </div>
                <div className="text-group">
                  <h1 className="title text-2xl font-poppins text-bold">
                    Awal Bertemu
                  </h1>
                  <p className="leads font-inter p-0">
                    Lorem ipsum dolor sit amet consectetur. Quis nibh tristique
                    faucibus vel cras amet risus. Risus adipiscing tellus id
                    convallis. Porttitor risus leo sed ligula{" "}
                  </p>
                </div>
              </div>
              <div className="love-group flex items-center">
                <div className="number">
                  <img src={tiga} alt="" className="mx-auto" />
                </div>
                <div className="text-group">
                  <h1 className="title text-2xl font-poppins text-bold">
                    Awal Bertemu
                  </h1>
                  <p className="leads font-inter p-0">
                    Lorem ipsum dolor sit amet consectetur. Quis nibh tristique
                    faucibus vel cras amet risus. Risus adipiscing tellus id
                    convallis. Porttitor risus leo sed ligula{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="img md:contents sm:hidden">
              <img src={couple} alt="" className="mx-auto" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center mt-24">
            <div className="img md:contents sm:hidden">
              <img src={couple} alt="" className="mx-auto" />
            </div>
            <div className="love-list">
              <div className="love-group flex items-center">
                <div className="number">
                  <img src={satu} alt="" className="mx-auto" />
                </div>
                <div className="text-group">
                  <h1 className="title text-2xl font-poppins text-bold">
                    Awal Bertemu
                  </h1>
                  <p className="leads font-inter p-0">
                    Lorem ipsum dolor sit amet consectetur. Quis nibh tristique
                    faucibus vel cras amet risus. Risus adipiscing tellus id
                    convallis. Porttitor risus leo sed ligula{" "}
                  </p>
                </div>
              </div>
              <div className="love-group flex items-center">
                <div className="number">
                  <img src={dua} alt="" className="mx-auto" />
                </div>
                <div className="text-group">
                  <h1 className="title text-2xl font-poppins text-bold">
                    Awal Bertemu
                  </h1>
                  <p className="leads font-inter p-0">
                    Lorem ipsum dolor sit amet consectetur. Quis nibh tristique
                    faucibus vel cras amet risus. Risus adipiscing tellus id
                    convallis. Porttitor risus leo sed ligula{" "}
                  </p>
                </div>
              </div>
              <div className="love-group flex items-center">
                <div className="number">
                  <img src={tiga} alt="" className="mx-auto" />
                </div>
                <div className="text-group">
                  <h1 className="title text-2xl font-poppins text-bold">
                    Awal Bertemu
                  </h1>
                  <p className="leads font-inter p-0">
                    Lorem ipsum dolor sit amet consectetur. Quis nibh tristique
                    faucibus vel cras amet risus. Risus adipiscing tellus id
                    convallis. Porttitor risus leo sed ligula{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LoveStory