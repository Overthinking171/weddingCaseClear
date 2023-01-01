import React from "react";
import mekar from "../assets/mekar.png";

const RSVPFooter = () => {
  return (
    <div className="wrapper mt-[200px]">
      {" "}
      <section className="RSVP w-screen bg-background bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto p-24 md:p-24 sm:p-3 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center gap-24">
            <div className="comment">
              {/* Card-1 */}
              <div className="card my-5 p-10 bg-white max-w-[100px] py-10 min-w-full border-2 rounded-lg mx-auto">
                <p className="salam text-xl text-justify font-poppins">
                  “Ullamcorper nulla sapien tempor feugiat nisl eu sed imperdiet
                  senectus. In aliquet cursus fermentum sit. Erat quis aliquam
                  duis et massa augue lorem eu. Lectus mollis dictum sapien
                  aenean.{" "}
                </p>
                <div className="text-group mt-3">
                  <p className="top-title text-xl px-[0px!important] text-[#A80038] font-poppins">
                    Ronald Medium
                  </p>
                  <p className="center-title text-[#888] px-[0px!important] py-[0px!important] font-poppins">
                    Temanggung, Indonesia
                  </p>
                </div>
              </div>

              {/* Card-2 */}
              <div className="card my-5 p-10 bg-white max-w-[100px] py-10 min-w-full border-2 rounded-lg mx-auto">
                <p className="salam text-xl text-justify font-poppins">
                  “Ullamcorper nulla sapien tempor feugiat nisl eu sed imperdiet
                  senectus. In aliquet cursus fermentum sit. Erat quis aliquam
                  duis et massa augue lorem eu. Lectus mollis dictum sapien
                  aenean.{" "}
                </p>
                <div className="text-group mt-3">
                  <p className="top-title text-xl px-[0px!important] text-[#A80038] font-poppins">
                    Ronald Medium
                  </p>
                  <p className="center-title text-[#888] px-[0px!important] py-[0px!important] font-poppins">
                    Temanggung, Indonesia
                  </p>
                </div>
              </div>

              {/* Card-3 */}
              <div className="card my-5 p-10 bg-white max-w-[100px] py-10 min-w-full border-2 rounded-lg mx-auto">
                <p className="salam text-xl text-justify font-poppins">
                  “Ullamcorper nulla sapien tempor feugiat nisl eu sed imperdiet
                  senectus. In aliquet cursus fermentum sit. Erat quis aliquam
                  duis et massa augue lorem eu. Lectus mollis dictum sapien
                  aenean.{" "}
                </p>
                <div className="text-group mt-3">
                  <p className="top-title text-xl px-[0px!important] text-[#A80038] font-poppins">
                    Ronald Medium
                  </p>
                  <p className="center-title text-[#888] px-[0px!important] py-[0px!important] font-poppins">
                    Temanggung, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Send */}
            <div className="send">
              <form
                action="#"
                className="p-16 sm:p-4 rounded-lg border-2 bg-white"
              >
                <div className="send-text">
                  <h1 className="title-text text-center text-black text-5xl my-5 font-bold">
                    RSVP
                  </h1>
                  <p className="leads text-center max-w-sm mx-auto font-montserrat">
                    Lorem ipsum dolor sit amet consectetur. Porttitor
                    ullamcorper eget quam libero
                  </p>
                </div>
                <div className="input-list mt-5">
                  <input
                    type="text"
                    className="w-full border p-5"
                    placeholder="Nama"
                  />
                  <input
                    type="text"
                    className="w-full border p-5"
                    placeholder="Isikan Konfirmasi Daftar Kehadiran"
                  />
                  <center>
                    <button className="btn px-10 py-3 bg-black text-white rounded-full mt-5">
                      Konfirmasi via WA
                    </button>
                  </center>
                  <div className="group-flowers flex justify-center relative my-16">
                    <div className="border border-[#888] w-2/4 mx-auto z-0 relative"></div>
                    <img
                      src={mekar}
                      alt=""
                      className="absolute z-10 -mt-10 md:-mt-10 sm:-mt-7 w-2/12 md:w-2/12 sm:w-3/12"
                    />
                  </div>
                </div>
                {/* Ucapan */}
                <div className="ucapan">
                  <h1 className="title text-center font-montserrat text-4xl my-5 font-bold">
                    Ucapan & Doa
                  </h1>
                  <div className="leads max-w-sm mx-auto text-center font-montserrat">
                    Lorem ipsum dolor sit amet consectetur. Porttitor
                    ullamcorper eget quam libero{" "}
                  </div>
                  <div className="input-list mt-5">
                    <input
                      type="text"
                      className="w-full border p-5"
                      placeholder="Nama"
                    />
                    <input
                      type="text"
                      className="w-full border p-5"
                      placeholder="Ucapan & Doa"
                    />
                    <center>
                      <button className="btn px-10 py-3 bg-black text-white rounded-full mt-5">
                        Kirim Ucapan
                      </button>
                    </center>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="p-24 w-screen bg-[#1E1E1E]">
        <p className="leads text-white text-center text-2xl font-bold font-montserrat">
          Kami Yang Berbahagia
        </p>
        <h1 className="title-texts text-center text-white text-7xl my-8 font-marck">
          Nama Pria & Nama Wanita
        </h1>
        <p className="leads text-center text-white font-montserrat text-2xl font-bold">
          Sekeluarga
        </p>
      </footer>
    </div>
  );
};

export default RSVPFooter;
