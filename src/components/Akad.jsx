import React from "react";
import vector from "../assets/vector.png";

const Akad = () => {
  return (
    <div className="wrapper mt-[200px]">
      <section id="akad">
        <h1 className="title-text uppercase text-center text-5xl md:text-4xl sm:text-3xl">
          akad nikah
        </h1>
        <h1 className="heading-title font-parisienne mt-10 text-7xl md:text-6xl sm:text-5xl px-5 text-center">
          Rabu, 11 Januari 2023
        </h1>
        <p className="lead text-center font-montserrat tracking-wide mt-10 text-2xl md:text-2xl sm:text-xl">
          Desa Lempuyang RT. 01 RW. 03 Kecamatan Wonosalam Kabupaten Demak
        </p>
        <p
          className="time text-
        poppins text-center p-10 text-4xl md:text-4xl sm:text-3xl"
        >
          {" "}
          11.20 - 12.30
        </p>
        <center>
          <button className="py-5 px-16 bg-black text-white text-bold rounded-md cursor-pointer relative z-50">
            Lokasi Pernikahan
          </button>
        </center>
      </section>

      <section id="resepsi" className="mt-[35rem] md:mt-[35rem] sm:mt-[13rem]">
        <div className="wrappers relative z-10">
          <h1 className="title-text text-center text-5xl md:text-4xl sm:text-3xl text-white text-poppins">
            Resepsi
          </h1>
          <h1 className="heading-title font-parisienne text-white mt-10 text-7xl md:text-6xl sm:text-5xl px-5 text-center">
            Rabu, 11 Januari 2023
          </h1>
          <p className="lead text-center font-montserrat text-white tracking-wide mt-10 text-2xl sm:text-xl">
            Desa Wonosalam RT. 03 RW. 02 Kecamatan Wonosalam Kabupaten Demak
          </p>
          <p className="time text-poppins text-center text-white p-10 text-4xl md:text-3xl sm:text-2xl">
            {" "}
            12.30 - Selesai
          </p>
          <center>
            <button className="py-5 px-16 bg-white text-black border-black text-bold rounded-md">
              Lokasi Pernikahan
            </button>
          </center>
        </div>
        <img
          src={vector}
          alt=""
          className="w-screen md:w-screen sm:w-screen md:h-fit sm:h-[140vh!important] absolute z-0 -mt-[80rem] md:-mt-[80rem] sm:-mt-[55rem]"
        />
      </section>
    </div>
  );
};

export default Akad;
