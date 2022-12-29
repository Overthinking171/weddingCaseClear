import React from "react";
import bg from "../assets/bg.png";
import slogan from "../assets/Group 47.png";
import man from "../assets/man.png";
import woman from "../assets/woman.png";
import wedding from "../assets/bg2.png";
import maps from "../assets/map.png";
import img1 from "../assets/img1.png";
import leftTop from "../assets/left-top.png";
import leftBottom from "../assets/left-bottom.png";
import centerTop from "../assets/center-top.png";
import centerBottom from "../assets/center-bottom.png";
import rightTop from "../assets/right-top.png";
import rightBottom from "../assets/right-bottom.png";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="jumbotron relative">
        <img src={bg} className="w-full" alt="background" />
      </div>
      <div className="text-group text-center relative p-10">
        <h1 className="title-text font-island text-8xl">
          <span>Cristian</span> <span className="text-[#2E453E]">&</span>{" "}
          <span>Jessica</span>
        </h1>
        <p className="date">Senin, 30 Agustus 2023</p>
      </div>

      <section id="words" className="relative">
        <div className="grid items-center grid-cols-2">
          <div className="left p-10 mx-auto">
            <p className="lead text-center">Kata-Kata Mempelai</p>
            <p className="leads mt-5 mx-auto">
              “ Sedalam dalam cintamu kuselami Warna warna terindah yang ada
              dibumi Terlukis di jiwa telah membelai kalbu sedalam cintamu
              tercipta untuk-ku ”
            </p>
            <img src={slogan} alt="slogan" className="mx-auto w-10/12 mt-5" />
          </div>
          <div className="right grid-cols-6 mx-auto">
            <div className="flex gap-10">
              <img src={woman} alt="woman" className="mt-12" />
              <img src={man} alt="man" className="h-3/5" />
            </div>
          </div>
        </div>
      </section>

      <section id="the-date" className="mt-12 mx-auto p-5 w-screen relative">
        <form className="w-3/5 mx-auto border-2 border-black p-10">
          <h1 className="title-text text-center font-dancing text-5xl text-[#555656]">
            Save The Date
          </h1>
          <div className="flex mt-12">
            <div className="card mx-auto text-center">
              <h1 className="title-text font-dancing text-5xl ">Akad Nikah</h1>
              <p className="leads mt-7">Senin, 30 Agustus 2023</p>
              <p className="lead">09.00 WIB - Selesai</p>
              <p className="lead">Hotel Sahid Mandarin</p>
            </div>

            <span className="line border border-black"></span>

            <div className="card mx-auto text-center">
              <h1 className="title-text font-dancing text-5xl ">
                Resepsi Nikah
              </h1>
              <p className="leads mt-7">Senin, 30 Agustus 2023</p>
              <p className="lead">11.00 WIB - Selesai</p>
              <p className="lead">Hotel Sahid Mandarin</p>
            </div>
          </div>
        </form>
      </section>

      <section id="carousel" className="w-screen relative">
        <div className="bg">
          <img
            src={wedding}
            alt="wedding"
            className="z-10 w-screen h-screen absolute"
          />
        </div>
        <div className="backdrop w-screen relative h-screen bg-[rgba(0,0,0,0.35)] z-20"></div>

        <div className="wrapper text-center absolute bottom-0 z-50 p-12">
          <h1 className="title-text my-4 text-6xl text-white  font-dancing">
            Awal Bertemu
          </h1>
          <p className="lead w-7/12 mx-auto text-white text-2xl">
            Dari sebuah pertemanan yang biasah saja saat remaja tanpa perasaan.
            sampai akhirnya bertemu menjelang kedewasaan disebuah moment dan
            berbincang dengan hangat.
          </p>
        </div>
      </section>

      <section id="location">
        <div className="container">
          <div className="lokasi w-screen grid items-center grid-cols-2 px-48 py-12">
            <div className="text-maps w-8/12 mx-auto">
              <h1 className="title-text my-5 font-dancing text-6xl text-[#555656]">
                Lokasi
              </h1>
              <p className="lead w-10/12 text-xl">
                Lorem ipsum dolor sit amet consectetur. Justo porta mauris amet
                tincidunt interdum. Sollicitudin id pellentesque sollicitudin
                proin nec ultricies vitae quis.
              </p>
              <button
                to="/"
                className="py-3 px-6 my-5 border-2 rounded-md bg-[#BF925C] text-white"
              >
                Buka Maps
              </button>
            </div>
            <div className="maps mx-auto">
              <img src={maps} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="protocol" className="mt-12">
        <div className="container mx-auto">
          <div className="text-protocol text-center">
            <h1 className="title-text my-5 font-dancing text-5xl">
              Protocol Covid-19
            </h1>
            <p className="lead w-5/6 mx-auto text-xl">
              Tanpa mengurangi rasa hormat, dikarenakan masih dalam masa pandemi
              Covid-19, dan demi mematuhi protokol kesehatan ditatanan hidup
              baru. Demi kenyamanan bersama, kami memohon agar para tamu
              undangan yang hadir berkenan menerapkan protokol kesehatan.
            </p>
          </div>
          <div className="card-list">
            <div className="grid mt-16 py-10 grid-cols-4 mx-auto">
              <div className="card">
                <img src={img1} alt="" className="mx-auto" />
                <p className="lead text-center">lorem ipsum dolor sit amet</p>
              </div>
              <div className="card">
                <img src={img1} alt="" className="mx-auto" />
                <p className="lead text-center">lorem ipsum dolor sit amet</p>
              </div>
              <div className="card">
                <img src={img1} alt="" className="mx-auto" />
                <p className="lead text-center">lorem ipsum dolor sit amet</p>
              </div>
              <div className="card">
                <img src={img1} alt="" className="mx-auto" />
                <p className="lead text-center">lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div className="grid mt-16 py-10 grid-cols-4 mx-auto">
            <div className="card"></div>
            <div className="card">
              <img src={img1} alt="" className="mx-auto" />
              <p className="lead text-center">lorem ipsum dolor sit amet</p>
            </div>
            <div className="card">
              <img src={img1} alt="" className="mx-auto" />
              <p className="lead text-center">lorem ipsum dolor sit amet</p>
            </div>
            <div className="card"></div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 w-full items-center mx-auto">
            <div className="grid-cols-2 mx-auto">
              <img src={leftTop} alt="" className="mx-auto mt-3" />
              <img src={leftBottom} alt="" className="mx-auto mt-3" />
            </div>
            <div className="flex flex-col mx-auto items-stretch">
              <img src={centerTop} alt="" className="items-start mt-3" />
              <p className="lead gal-text text-center font-dancing text-6xl my-28">
                Gallery
              </p>
              <img src={centerBottom} alt="" className="mx-auto mt-3" />
            </div>
            <div className="grid-cols-2 mx-auto">
              <img src={rightTop} alt="" className="mx-auto mt-3" />
              <img src={rightBottom} alt="" className="mx-auto mt-3" />
            </div>
          </div>
        </div>
      </section>

      <section id="donasi" className="mt-16 ">
        <div className="container mx-auto">
          <h1 className="title-text text-center text-6xl font-dancing ">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
          </h1>
          <p className="lead text-2xl w-3/4  mx-auto text-center mt-5">
            Dan jika memberi adalah ungkapan tanda terimakasih Anda, Anda dapat
            memberi kado secara cashless dengan mengirim amplop digital secara
            transfer pada akun do bawah ini:
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
