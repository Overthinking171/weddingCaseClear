import React from "react";
import bg from "../assets/bg3.png";
import vector from "../assets/vector.png";
import cw from "../assets/cw.png";
import cwk from "../assets/cwk.png";
import flower from "../assets/flower.png";
import leftTop from "../assets/left-top.png";
import leftBottom from "../assets/left-bottom.png";
import centerTop from "../assets/center-top.png";
import centerBottom from "../assets/center-bottom.png";
import rightTop from "../assets/right-top.png";
import rightBottom from "../assets/right-bottom.png";
import couple from "../assets/couple.png";
import satu from "../assets/1.png";
import dua from "../assets/2.png";
import tiga from "../assets/3.png";
import P from "../assets/P.png";
import L from "../assets/L.png";
import carbon from "../assets/carbon_copy.png";
import BNI from "../assets/BNI.png";
import BRI from "../assets/BRI.png";
import Dana from "../assets/Dana.png";
import mekar from "../assets/mekar.png";

const Home2 = () => {
  return (
    <div className="wrapper">
      <div className="jumbotron relative">
        <img src={bg} className="w-full" alt="background" />
      </div>
      {/* Card Mempelai */}
      <div className="container md:container sm:container relative z-10 -mt-52 md:-mt-52 sm:-mt-12 mx-auto">
        <div className="card w-4/6 md:w-8/12 sm:w-11/12 mx-auto border-2 bg-white p-16 md:p-10 sm:p-5 rounded-2xl shadow-md">
          <h1 className="text-title text-center font-poppins text-2xl">
            Mempelai
          </h1>
          <h1 className="text-title text-center font-poppins text-2xl">
            Pria dan Wanita
          </h1>
          <div className="img w-36 mx-auto">
            <img src={flower} alt="" className="text-center ml-5 " />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">
            <div className="description">
              <div className="flex justify-end items-center md:justify-end sm:justify-center">
                <div className="text-group">
                  <p className="top-title text-right font-marck text-3xl py-[5px!important]">
                    Nama Pria
                  </p>
                  <p className="center-title text-right py-[5px!important] text-[#888]">
                    Anak tunggal dari
                  </p>
                  <p className="bottom-title  text-right py-[5px!important] text-[#888]">
                    Bpk. Ilham & Ibu Nurul
                  </p>
                </div>
                <img
                  src={cw}
                  alt=""
                  className="border-2 border-[#555656] p-3 rounded-full md:max-h-[120px] sm:max-h-[90px]"
                />

              </div>
            </div>
            <div className="description">
              <div className="flex items-center justify-start md:justify-start sm:justify-center">
                <img
                  src={cwk}
                  alt=""
                  className="border-2 border-[#555656] p-3 rounded-full md:max-h-[120px] sm:max-h-[90px]"
                />
                <div className="text-group">
                  <p className="top-title font-marck text-3xl py-[5px!important]">Nama Wanita</p>
                  <p className="center-title py-[5px!important] text-[#888]">
                    Anak tunggal dari
                  </p>
                  <p className="bottom-tittle py-[5px!important] text-[#888] max-w-sm">
                    Bpk. Ilham & Ibu Nurul
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="akad" className="mt-44 mx-auto">
        <h1 className="title-text uppercase text-center text-5xl md:text-4xl sm:text-3xl">
          akad nikah
        </h1>
        <h1 className="heading-title font-parisienne mt-10 text-7xl md:text-6xl sm:text-5xl px-5 text-center">
          Minggu, 18 Desember 2022
        </h1>
        <p className="lead text-center font-montserrat tracking-wide mt-10 text-2xl md:text-2xl sm:text-xl">
          Grand Slipi Tower, Jl. Letjen S. Parman, RT. 06/RW 04, Kec. Semarang
          Barat, Semarang
        </p>
        <p
          className="time text-
        poppins text-center p-10 text-4xl md:text-4xl sm:text-3xl"
        >
          {" "}
          08.00 - 10.00 WIB
        </p>
        <center>
          <button className="py-5 px-16 bg-black text-white text-bold rounded-md cursor-pointer relative z-50">
            Lokasi Pernikahan
          </button>
        </center>
      </section>

      <section id="resepsi" className="mt-[35rem] md:mt-[35rem] sm:mt-[10rem]">
        <div className="wrappers relative z-10">
          <h1 className="title-text text-center text-5xl md:text-4xl sm:text-3xl text-white text-poppins">
            Resepsi
          </h1>
          <h1 className="heading-title font-parisienne text-white mt-10 text-7xl md:text-6xl sm:text-5xl px-5 text-center">
            Minggu, 18 Desember 2022
          </h1>
          <p className="lead text-center font-montserrat text-white tracking-wide mt-10 text-2xl sm:text-xl">
            Grand Slipi Tower, Jl. Letjen S. Parman, RT. 06/RW 04, Kec. Semarang
            Barat, Semarang
          </p>
          <p className="time text-poppins text-center text-white p-10 text-4xl md:text-3xl sm:text-2xl">
            {" "}
            13.00 - 15.00 WIB
          </p>
          <center>
            <button className="py-5 px-16 bg-white text-black border-black text-bold rounded-md">
              Lokasi Pernikahan
            </button>
          </center>
        </div>
        <img
          src={vector}
          alt="w-screen h-screen"
          className="w-screen absolute z-0 -mt-[80rem] md:-mt-[80rem] sm:-mt-[30rem]"
        />
      </section>

      {/* Love Story */}
      <section id="love-story" className="mt-96">
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
                  <h1 className="title text-2xl font-poppins text-bold">Awal Bertemu</h1>
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
                  <h1 className="title text-2xl font-poppins text-bold">Awal Bertemu</h1>
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
                  <h1 className="title text-2xl font-poppins text-bold">Awal Bertemu</h1>
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
                  <h1 className="title text-2xl font-poppins text-bold">Awal Bertemu</h1>
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
                  <h1 className="title text-2xl font-poppins text-bold">Awal Bertemu</h1>
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
                  <h1 className="title text-2xl font-poppins text-bold">Awal Bertemu</h1>
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

      <section id="gallery" className="mt-52">
        <h1 className="title-text text-center text-3xl md:text-3xl sm:text-xl">ALBUM FOTO</h1>
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-3 w-full items-center mx-auto">
            <div className="grid-cols-2 mx-auto">
              <img src={leftTop} alt="" className="mx-auto mt-3 rounded-xl" />
              <img
                src={leftBottom}
                alt=""
                className="mx-auto mt-3 rounded-xl"
              />
            </div>
            <div className="flex flex-col mx-auto items-stretch">
              <img
                src={centerTop}
                alt=""
                className="items-start mt-3 rounded-xl"
              />
              <p className="lead gal-text text-center font-dancing text-6xl my-28">
                Gallery
              </p>
              <img
                src={centerBottom}
                alt=""
                className="mx-auto mt-3 rounded-xl"
              />
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
        </div>
      </section>

      <section id="prokes" className="mt-44">
        <div className="container mx-auto">
          <div className="title-text flex justify-center items-end">
            <img src={P} alt="" />
            <p className="texts -ml-10 text-4xl font-poppins">rokes</p>
          </div>
          <p className="lead text-center mt-10 text-[#888] max-w-[70%] font-inter mx-auto">
            Tanpa mengurangi rasa hormat, dikarenakan masih dalam masa pandemi
            Covid-19, dan demi mematuhi protokol kesehatan ditatanan hidup baru.
            Demi kenyamanan bersama, kami memohon agar para tamu undangan yang
            hadir berkenan menerapkan protokol kesehatan.
          </p>
        </div>
      </section>

      <section id="gift" className="mt-52 w-screen h-screen">
        <h1 className="title-text text-center font-[500] py-10 font-poppins text-5xl">
          Wedding Gift
        </h1>
        <p className="lead text-center mx-auto w-2/4 font-outfit">
          Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
          kado secara cashless dengan mengirim amplop digital secara transfer
          pada akun di bawah ini :
        </p>
        <div className="container mx-auto mt-16">
          <div className="card-list">
            <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 items gap-10">
              <div className="card py-10 min-w-full border-2 rounded-lg mx-auto">
                <h1 className="title text-center text-4xl text-black my-8">
                  Transfer
                </h1>
                <img src={BNI} alt="" className="mx-auto" />
                <p className="leads my-10 text-xl text-center">
                  A.n Cristian Nirwarna
                </p>
                <center>
                  <button className="button my-5 flex items-center bg-black text-white px-10 py-4 rounded-full">
                    <img src={carbon} alt="" className="mx-2" />
                    <p>Copy Nomor Rekening</p>
                  </button>
                </center>
              </div>
              <div className="card py-10 min-w-full border-2 rounded-lg mx-auto">
                <h1 className="title text-center text-4xl text-black my-8">
                  Transfer
                </h1>
                <img src={BRI} alt="" className="mx-auto" />
                <p className="leads my-10 text-xl text-center">
                  A.n Cristian Nirwarna
                </p>
                <center>
                  <button className="button my-5 flex items-center bg-black text-white px-10 py-4 rounded-full">
                    <img src={carbon} alt="" className="mx-2" />
                    <p>Copy Nomor Rekening</p>
                  </button>
                </center>
              </div>
              <div className="card py-10 min-w-full border-2 rounded-lg mx-auto">
                <h1 className="title text-center text-4xl text-black my-8">
                  Dana
                </h1>
                <img src={Dana} alt="" className="mx-auto" />
                <p className="leads my-10 text-xl text-center">
                  A.n Cristian Nirwarna
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="RSVP bg-background bg-cover bg-no-repeat bg-center relative">
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
                  <p className="top-title text-xl px-[0px!important] text-[#A80038] font-poppins">Ronald Medium</p>
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
                  <p className="top-title text-xl px-[0px!important] text-[#A80038] font-poppins">Ronald Medium</p>
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
                  <p className="top-title text-xl px-[0px!important] text-[#A80038] font-poppins">Ronald Medium</p>
                  <p className="center-title text-[#888] px-[0px!important] py-[0px!important] font-poppins">
                    Temanggung, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Send */}
            <div className="send">
              <form action="#" className="p-16 sm:p-4 rounded-lg border-2 bg-white">
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
                      className="absolute z-10 -mt-10 w-2/12"
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

export default Home2;
